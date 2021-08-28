import { useState } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, convertFromHTML, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextEditor = ({ editorState, setEditorState }) => {
    const updateEditorState = (newState) => {
        setEditorState(newState);
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            updateEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    const toggleToolbar = (inlineStyle) => {
        updateEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    }

    const handleReturn = (e) => {
        if (e.shiftKey) {
            updateEditorState(RichUtils.insertSoftNewline(editorState))
            return 'handled';
        }
        return 'not-handled';
    }

    return (
        <>
            <div className="border border-gray-400">
                <ToolBar
                    editorState={editorState}
                    onToggle={toggleToolbar}
                />
                <div className="bg-gray-50 h-48 overflow-y-auto">
                    <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                        handleKeyCommand={handleKeyCommand}
                        handleReturn={handleReturn}
                    />
                </div>
            </div>
        </>
    )
}

const toolbarItems = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' }
]

const ToolbarButton = (props) => {
    const onToggle = e => {
        e.preventDefault()
        props.onToggle(props.style)
    }

    const styles = props.active ? "px-8 cursor-pointer font-bold" : "px-8 cursor-pointer"
    
    return (
        <span
            onMouseDown={onToggle}
            className={styles}
        >
            {props.label}
        </span>
    )
}

const ToolBar = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle()
    return (
        <div className="py-2 border-b-2 border-gray-300 bg-white">
            {toolbarItems.map((toolbarItem) => (
                <ToolbarButton
                    key={toolbarItem.label}
                    active={currentStyle.has(toolbarItem.style)}
                    label={toolbarItem.label}
                    onToggle={props.onToggle}
                    style={toolbarItem.style}
                />
            ))}
        </div>
    )
}
export default TextEditor
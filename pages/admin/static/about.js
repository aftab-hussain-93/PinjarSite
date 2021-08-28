import axios from 'axios'
import { useState } from 'react'
import Router from 'next/router'
import Meta from '../../../components/Meta'
import TitleInput from '../../../components/admin/StaticContentManagement/TitleInput'
import TextEditor from '../../../components/admin/StaticContentManagement/TextEditor'


import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, convertFromHTML, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';


const pagetitle = "KARNATAKA RAJYA NADAF PINJAR SANGHA"
const shortDescription = `<p>Hello this is the initial text </p> <p> Hello this is paragrah2 </p>`

const editAboutPage = (props) => {

    const [title, setTitle] = useState(pagetitle);

    // Setting editor state for short description
    const [description, setShortDescription] = useState(
        () => {
            if (shortDescription) {
                const blocksFromHTML = convertFromHTML(shortDescription)
                const state = ContentState.createFromBlockArray(
                    blocksFromHTML.contentBlocks,
                    blocksFromHTML.entityMap,
                )
                return EditorState.createWithContent(state)
            } else return EditorState.createEmpty()
        }
    );

    const handleSubmit = (event) => {
        console.log("Changing title to ", title.trim())
    }

    const saveContent = (e) => {
        console.log("In save content")
        console.log(description.getCurrentContent())
        // return saveContentBlock(convertToRaw(editorState.getCurrentContent()))
        const shortDescriptionInHtml = draftToHtml(convertToRaw(description.getCurrentContent()))
        console.log("Saving to DB SHORT DESC", shortDescriptionInHtml)
        // return saveContentBlock())
    }

    return (
        <>
            <Meta title='Edit About Page' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary">Edit About Page <span className="text-lg font-light underline">Preview</span>
                </span>
            </div>
            <div className="container h-heroHeight mt-5 bg-white p-10 border border-gray-400 shadow-md">
                <div className=" grid grid-cols-5">
                    <label className="flex justify-start items-center col-span-1">
                        Page Title
                    </label>
                    <TitleInput title={title} changeHandler={setTitle}/>
                    <label className="flex justify-start items-center col-span-1">
                        Page Description
                    </label>
                    <div className="col-span-4">
                        <TextEditor editorState={description} setEditorState={setShortDescription}/>
                    </div>
                    <div className="col-span-1">9</div>
                    <div className="col-span-4">1</div>
                </div>
                <button
                    className="downloadBtn mt-1 text-right"
                    onClick={saveContent}
                    > Save
                </button >
            </div>
        </>
    )
}

export default editAboutPage
import React, { useState, useEffect } from 'react'

function TitleInput(props) {
    const [title, setTitle] = useState(props.title);

    useEffect(() => {
        setTitle(props.title);
    }, [props.title])

    const handleChange = (event) => {
        const changeHandler = props.changeHandler
        changeHandler(event.target.value)
    }

    return (
        <div className="mb-3 pt-0 col-span-4">
            <input
                type="text"
                placeholder="Edit Page Title"
                onChange={handleChange}
                value={title}
                className="px-3 py-3 relative bg-gray-50 font-semibold leading-4 text-md border border-gray-400 focus:outline-none focus:ring focus:bg-white focus:border-blue-300 w-full"
            />
        </div>
    )
}

export default TitleInput

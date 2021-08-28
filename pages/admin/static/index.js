import { useState } from 'react'
import Meta from '../../../components/Meta'
import TextEditor from '../../../components/admin/TextEditor'

const initialText = `<p>The Pinjara or Nadafs are a community found in the states of Madhya Pradesh, Maharashtra, Karnataka, Gujarat and Rajasthan in India. The terms Pinjara, Mansoori, and Dhunia are used interchangebly in some regions of India whereas in other regions they are separate communities. They are also known as Mansoori, especially in Gujarat, where the name Pinjara is no longer used. The Pinjara is the traditional cotton carder of Central India, just like the are the traditional cotton carders of North India.</p>
<p></p><p>The <strong>Pinjara</strong> or Nadafs are a community found in the states of Madhya Pradesh, Maharashtra, Karnataka, Gujarat and Rajasthan in India. The terms Pinjara, Mansoori, and Dhunia are used interchangebly in some regions of India whereas in other regions they are separate communities. They are also known as Mansoori, especially in Gujarat, where the name Pinjara is no longer used. The Pinjara is the traditional cotton carder of Central India, just like the are the traditional cotton carders of North India.</p>`

const saveContentBlock = (staticContent) => {
    console.log("Saving static content")
    console.log(staticContent)
}

const staticContentList = ({ articles }) => {
    return (
        <>
            <Meta title='Static Content Management' />
            {/* <TextEditor initialText={initialText} saveContentBlock={saveContentBlock}/> */}
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary "> Static Content Management </span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex flex-start gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Content List</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 pl-2 pr-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Page Name
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Preview</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">
                                                    About
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-primary hover:text-black">Preview</a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={`/admin/static/about`} className="text-primary hover:text-black">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">
                                                    Members
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-primary hover:text-black">Preview</a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={`/admin/static/members`} className="text-primary hover:text-black">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">
                                                    Benefits
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-primary hover:text-black">Preview</a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={`/admin/static/benefits`} className="text-primary hover:text-black">Edit</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default staticContentList


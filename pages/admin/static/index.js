import { useState } from 'react'
import Meta from '../../../components/Meta'

const staticContentList = ({ articles }) => {
    const [addEvent, setAddEvent] = useState(false);
    return (
        <>
            <Meta title='Static Content List' />
            <div className="w-full mt-5 p-5 flex justify-between border-b border-gray-500 pb-5 text-black">
                <span className="text-4xl "> Static Content Management</span>
            </div>
            <table className="table-auto w-9/12 mx-auto">
                <thead className="border-black border">
                    <tr>
                        <th>Article ID</th>
                        <th>Article</th>
                        <th>Type</th>
                        <th>Preview</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {articles.map(article => {
                        return (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>Major</td>
                                <td>Preview</td>
                                <td>Edit</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )
}


export default staticContentList

export async function getServerSideProps(context) {

    const res = await fetch('http://localhost:3000/api/static')
    const data = await res.json()

    return {
        props: {
            articles: data
        },
    }
}


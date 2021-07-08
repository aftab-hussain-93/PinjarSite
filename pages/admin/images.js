import { useState } from 'react'
import Meta from '../../components/Meta'
import HomePageImages from '../../components/admin/HomePageImages'

const images = ({ images }) => {

    return (
        <>
            <Meta title='Site Images' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <h1 className="text-2xl sm:text-4xl font-semibold capitalize text-primary "> Manage Site Images </h1>
                {/* <span className="btn text-primary bg-white border-primary border hover:bg-primary hover:text-white">Add a New Event</span> */}
            </div>
            <div className="container h-full mt-5">                
                <HomePageImages images={images}/>
            </div>        
        </>
    )
}

export async function getServerSideProps(context) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    const { success, data } = await fetch(`${url}/api/images`).then(res => res.json())
    const allImages = {}
    if (success) {
        data.forEach(item => {
            if (!(item.name in allImages)) {
                allImages[item.name] = item.url
            }
        })
    }
    return {
        props: {
            images: allImages
        }, // will be passed to the page component as props
    }
}

export default images

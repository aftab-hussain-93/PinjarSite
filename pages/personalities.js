import Meta from '../components/Meta'
import Image from 'next/image'

const personalities = () => {
    const img = `/portrait_pic.jpg`

    return (
        <>
            <Meta title={'Personalities'} />
            <div className="md:max-w-2/3 mx-auto p-12 bg-white mt-1">
                <h1 className="routeHeading">Personalities</h1>

                <div className="mt-8 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10">
                    
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img src={img} className="w-full h-40 sm:h-64 object-cover" />
                        <div className="text-center">
                            <p className="text-xl font-semibold">Full Name</p>
                            <p className="text-lg font-bold">Occupation/Position</p>
                            <p className="text-lg">Title</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default personalities
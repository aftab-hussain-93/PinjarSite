import Loader from "react-loader-spinner";
import React from 'react'

const FullPageLoader = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Loader
                type="Puff"
                color="#30AB11"
                height={100}
                width={100}
            />
        </div>
    )
}

export default FullPageLoader

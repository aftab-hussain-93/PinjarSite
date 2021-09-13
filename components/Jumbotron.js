const Jumbotron = ({ banner }) => {

    return (
        <div className="bg-cover w-screen h-heroHeight relative">
            <div className="w-full h-full absolute">
                <img
                    src={banner}
                    className="w-full h-full"
                    alt="Pinjar Image"
                />
            </div>
            <div className="bg-cover w-full h-full bg-black opacity-70 flex justify-center items-center">
                <h1 className="sm:text-5xl w-4/5 text-center text-4xl capitalize text-white font-bold">Karnataka Rajya Nadaf Pinjar Sangha</h1>
            </div>
        </div>
    )
}

export default Jumbotron

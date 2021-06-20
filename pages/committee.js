import Meta from '../components/Meta'
import Image from 'next/image'

const committee = () => {
    
    return (
        <div>
            <Meta title={'Committee'} />
            <div className="md:max-w-2/3 mx-auto md:p-12 p-2 bg-white mt-1">
                <h1 className="routeHeading">Committee</h1>
                <p className="mt-4">Brief description of the committee. Brief description of the committee. Brief description of the committee. Brief description of the committee. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam, quibusdam hic repellat fuga eveniet blanditiis porro aliquam adipisci in cupiditate nemo consequatur corrupti minima reiciendis fugiat voluptates nostrum neque.</p>
                <div className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <h1 className="text-4xl uppercase font-semibold tracking-wide mb-8 text-gray-700">State Committee</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos nulla sit sequi minima ratione neque aspernatur explicabo repellendus expedita illo, iusto impedit eum laudantium autem cumque. Quod, consectetur quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, doloremque ullam magni dicta mollitia laboriosam omnis. Fuga omnis repudiandae iusto perferendis in autem nemo optio, dolore ea? Dolorum, necessitatibus a.</p>
                    <h1 className="routeSubheading">State Office Bearers</h1>
                    <div className="w-full mt-2 flex justify-center items-center">
                        <img
                            src="/State_Office_Bearers.png"
                            alt="State Office Bearers Image"
                            className="w-full md:w-9/12"
                        />
                    </div>
                    <div className="flex mt-5 justify-center items-center">
                        <span className="w-1/6 h-1 inline-block border-gray-500 border-t-2 mb-2"></span>
                    </div>
                    <div className="flex mt-5 justify-center items-center">
                        <span className="border-primary border-2 px-4 py-2 text-primary mb-2 uppercase font-bold text-lg">divisional vice presidents</span>
                    </div>
                    <div className="w-full mt-2 flex justify-center items-center">
                        <img
                            src="/Divisional_Vice_Presidents.png"
                            alt="Divsional Vice Presidents"
                            className="w-full md:w-8/12"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <h1 className="text-4xl uppercase font-semibold tracking-wide mb-8 text-gray-700">District Committee</h1>                    
                    <h1 className="routeSubheading">Structure</h1>
                    <div className="w-full flex justify-center items-center mt-2">
                        <img
                            src="/District_Structure.png"
                            alt="District Structure"
                            className="w-full md:w-9/12"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <h1 className="text-4xl uppercase font-semibold tracking-wide mb-8 text-gray-700">Taluka Committee</h1>                    
                    <h1 className="routeSubheading">Structure</h1>
                    <div className="w-full flex justify-center items-center mt-2">
                        <img
                            src="/Taluka_Structure.png"
                            alt="Taluka Structure"
                            className="w-full md:w-9/12"
                        />
                    </div>
                    <h1 className="routeSubheading">Objectives</h1>
                    <ol className="list-decimal pl-8 leading-7">
                        <li className="pt-3">Mandatory Quarterly Meetings</li>
                        <li>Administrating Taluka level activities</li>
                        <li>Reporting to State committee</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}   

export default committee
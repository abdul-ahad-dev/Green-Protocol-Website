import bigImage from '../assets/big-image-1.png'

function ProblemSecB() {
    return (

        <div className="lg:w-4/5 mx-auto mb-4 flex gap-2 p-1 border-4 border-green-600">

            <div className="w-1/2 relative">
                <img src={bigImage} alt="" />
                <p className="bg-green-600 text-white font-semibold w-fit h-fit px-4 py-3 absolute top-8 inset-7">Ocean Wave Renewable Energy</p>
            </div>
            <div className="w-1/2 relative">
                <img src={bigImage} alt="" />
                <p className="bg-green-600 text-white font-semibold w-fit h-fit px-4 py-3 absolute top-8 inset-7">Ocean Wave Renewable Energy</p>
            </div>
        </div>

    )
}

export default ProblemSecB
function HeroCard( { src } ) {

    return (
        <div className="w-1/6 h-1/6 flex text-center items-center">
            <div className="w-full h-full p-4 items-center justify-center rounded-full bg-white border-4 border-green-700 shadow-2xl">
                <img className='w-full' src={src} alt="" />
            </div>
        </div>
    )
}

export default HeroCard
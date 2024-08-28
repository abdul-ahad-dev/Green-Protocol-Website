function HeroCard( { src } ) {

    return (
        <div className="flex text-center items-center">
            <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-white p-5 border-4 border-green-700 shadow-2xl flex-shrink-0">
                <img className='w-full' src={src} alt="" />
            </div>
        </div>
    )
}

export default HeroCard
function SolutionCard( { src, title } ) {
    return (

      <div className="bg-green-600 text-center lg:w-1/4 md:w-1/2 w-full px-6 py-8 shadow-inner border-2 border-green-700 overflow-hidden">
        
          <img
            alt="ecommerce"
            className="h-32 w-32 mx-auto my-8 object-cover object-center border-4 border-green-700 shadow-2xl rounded-full block"
            src={src}   
          />

          <h2 title={title} className="w-full text-white text-center title-font text-2xl py-6 mx-auto my-8 font-bold">
            {title}
          </h2>
      </div>

    )
}

export default SolutionCard
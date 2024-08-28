import HeroCard from "./HeroCard"
import reactLogo from '../assets/react.svg'
import dottedLine from '../assets/dotted-lines.png'

function Hero() {
  return (

    <section className="text-white bg-green-600">
      <div className="container px-5 py-44 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-5xl font-bold title-font  mb-8">
            Green Protocol
          </h1>
        </div>

        <div className="flex justify-center gap-4 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            
            <HeroCard src={reactLogo} />
            <img src={dottedLine} className="w-1/12 object-contain	" alt="" />
            <HeroCard src={reactLogo} />
            <img src={dottedLine} className="w-1/12 object-contain	" alt="" />
            <HeroCard src={reactLogo} />
          
          
        </div>
      </div>
    </section>
  )
}

export default Hero
import HeroCard from "./HeroCard"
import reactLogo from '../assets/react.svg'
import dottedLine from '../assets/dotted-lines.png'

function Footer() {
    return (

        <section className="text-white bg-green-600">
            <div className="container px-5 py-56 mx-auto">

                <div className="lg:w-4/5 mx-auto flex justify-center gap-3">

                    <HeroCard src={reactLogo} />
                    <img src={dottedLine} className="w-1/12 object-contain	" alt="" />
                    <HeroCard src={reactLogo} />
                    <img src={dottedLine} className="w-1/12 object-contain	" alt="" />
                    <HeroCard src={reactLogo} />


                </div>


                <div className="text-center mb-20">
                    <h1 className="sm:text-6xl text-4xl font-bold title-font mt-20">
                        Thank You
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Footer
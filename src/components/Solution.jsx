import solution1 from '../assets/solution-1.png'
import solution2 from '../assets/solution-2.png'
import solution3 from '../assets/solution-3.png'
import solution4 from '../assets/solution-4.png'
import solution5 from '../assets/solution-5.png'
import solution6 from '../assets/solution-6.png'
import solution7 from '../assets/solution-7.png'
import solution8 from '../assets/solution-8.png'

import SolutionCard from './SolutionCard'

function Solution() {

    let solutionData = [
        {
            image: solution1,
            title: "Green Energy"
        },
        {
            image: solution2,
            title: "Automated agriculture"
        },
        {
            image: solution3,
            title: "Deputation rain water"
        },
        {
            image: solution4,
            title: "Mosquito Prevention"
        },
        {
            image: solution5,
            title: "Electrical Mobility"
        },
        {
            image: solution6,
            title: "Solar Charging Station"
        },
        {
            image: solution7,
            title: "Recycling Plastic"
        },
        {
            image: solution8,
            title: "Cleaning Ocean"
        },
    ]

    return (
        <section className="body-font overflow-hidden">

            <div className="container lg:w-4/5 py-24 mx-auto">

                <h1 className="text-green-600 text-5xl leading-normal title-font font-bold">Solution</h1>

                <div className="flex justify-center">
                    <div className="w-full h-1 bg-green-600 opacity-75 inline-flex" />
                </div>

                <div className=" mx-auto py-12 flex flex-wrap justify-between">
                    
                    {solutionData.map((data , index) => (

                        <SolutionCard key={index} src={data.image} title={data.title} index={index} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Solution
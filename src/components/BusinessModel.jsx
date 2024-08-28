import businessModel1 from '../assets/business-model-1.png'
import businessModel2 from '../assets/business-model-2.png'
import businessModel3 from '../assets/business-model-3.png'
import businessModel4 from '../assets/business-model-4.png'
import businessModel5 from '../assets/business-model-5.png'

import BusinessModelCard from './BusinessModelCard'

function BusinessModel() {

    let businessModelData = [
        {
            image: businessModel1,
            title: "Fruits and Vegetable Sale Out"
        },
        {
            image: businessModel2,
            title: "Electrical Distribution Profit"
        },
        {
            image: businessModel3,
            title: "Plastic Recycling"
        },
        {
            image: businessModel4,
            title: "Electrical Mobility Rental"
        },
        {
            image: businessModel5,
            title: "Mosquito System"
        },

    ]

    return (
        <section className="overflow-hidden">

            <div className="container lg:w-4/5 py-24 mx-auto">

                <h1 className="text-green-600 text-5xl leading-normal title-font font-bold">BusinessModel</h1>

                <div className="flex justify-center">
                    <div className="w-full h-1 bg-green-600 opacity-75 inline-flex" />
                </div>


                <div className="w-full mx-auto py-12 flex gap-6 flex-wrap justify-center">
                    <h2 className="w-full text-green-600 text-center title-font text-xl mx-auto px-3 py-6 font-medium">
                        Crowd-funding ownership of
                    </h2>
                    {businessModelData.map((data, index) => (

                        <BusinessModelCard key={index} src={data.image} title={data.title} index={index} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default BusinessModel
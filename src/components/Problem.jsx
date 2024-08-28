import problemImage from '../assets/problem.png'


function Problem() {
    return (
        <section className="overflow-hidden">

            <div className="container lg:w-4/5 py-24 mx-auto">

                <h1 className="text-green-600 text-5xl leading-normal title-font font-bold">Problem</h1>

                <div className="flex justify-center">
                    <div className="w-full h-1 bg-green-600 opacity-75 inline-flex" />
                </div>

                <div className="mx-auto py-12 flex flex-wrap justify-between">
                    <div className="lg:w-2/3 w-full lg:px-10 lg:py-6 mb-6 lg:mb-0">
                        <p className="text-black text-3xl leading-relaxed title-font font-medium">
                            Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion. The conservation movement lobbies for protection of endangered species and protection of any ecologically valuable natural areas, genetically modified foods and global warming.
                        </p>

                    </div>
                    <img
                        alt="ecommerce"
                        className="lg:w-1/4 w-full lg:h-auto h-64 object-contain object-center rounded"
                        src={problemImage}
                    />
                </div>
            </div>
        </section>
    )
}

export default Problem
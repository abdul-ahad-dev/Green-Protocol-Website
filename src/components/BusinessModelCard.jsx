function BusinessModelCard({ src, title }) {
    return (

        <div className="w-1/4 px-4 mb-4 text-center overflow-hidden">
            <img
                alt="ecommerce"
                className="mx-auto object-cover object-center rounded-full"
                src={src}
            />

            <h2 title={title} className="w-full text-green-600 text-center title-font text-xl mx-auto px-3 py-6 font-medium">
                {title}
            </h2>
        </div>

    )
}

export default BusinessModelCard
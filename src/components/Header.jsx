function Header() {

    return (
        <header className="w-full text-white bg-green-700 body-font fixed z-20">
            <div className="container lg:w-4/5 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-bold items-center mb-4 md:mb-0">
                    <span className="ml-3 text-2xl">Green Protocol</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap text-center items-center text-base justify-center">
                    <a className="w-20 mr-5 hover:font-bold hover:cursor-pointer">Problem</a>
                    <a className="w-20 mr-5 hover:font-bold hover:cursor-pointer">Solution</a>
                    <a className="w-32 mr-5 hover:font-bold hover:cursor-pointer">Business Model</a>
                    <a className="w-36 mr-5 hover:font-bold hover:cursor-pointer">Profit Distribution</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
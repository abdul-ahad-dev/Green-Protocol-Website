function Header() {

    return (
        <header className="text-white bg-green-700 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-bold items-center mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Green Protocol</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Problem</a>
                    <a className="mr-5 hover:text-gray-900">Solution</a>
                    <a className="mr-5 hover:text-gray-900">Business Model</a>
                    <a className="mr-5 hover:text-gray-900">Profit Distribution</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
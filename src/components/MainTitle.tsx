const MainTitle = ({ title, description }: { title: string, description: string }) => {
    return (
        <header id='contMainTitle' className="text-center mb-10">
            <div id="title">
                <h1 className="text-2xl sm:text-4xl font-semibold">
                    {title}
                </h1>
            </div>
            <div id="description">
                <p className="font-light text-justify">
                    {description}
                </p>
            </div>
        </header>
    )
}

export default MainTitle
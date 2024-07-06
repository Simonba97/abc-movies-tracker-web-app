const MainTitle = ({ title, description }: { title: string, description: string }) => {
    return (
        <div id='contMainTitle' className="text-center mb-6 -space-y-1">
            {/* Site title */}
            <div id="title">
                <h1 className="text-4xl sm:text-6xl font-bold">
                    {title}
                </h1>
            </div>

            {/* Site description */}
            <div id="description">
                <p className="font-light text-center italic text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default MainTitle
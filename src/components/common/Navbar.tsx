import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-gray-700  border-gray-200 p-3 text-gray-100 shadow-lg">
            <ul className="flex justify-evenly sm:justify-between sm:px-6">
                {/* Home option */}
                <li id="homeOption">
                    <Link to={'/'} className="w-full flex items-center space-x-2">
                        <svg className="w-6 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208H48v-88l80-80l80 80Z" /></svg>
                        <span id="homeLabel" className="text-gray-300">Inicio</span>
                    </Link>
                </li>

                <li id="homeOption" className="font-semibold text-lg max-sm:hidden">
                    <Link to={'/'}>
                        <span id="homeLabel">✨ ABC Movies Tracker ✨</span>
                    </Link>
                </li>

                {/* Favorites option */}
                <li id="favoritesOption">
                    <Link to={'/my-favorites'} className="w-full flex items-center space-x-2">
                        <svg className="w-6 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M192 26H96a14 14 0 0 0-14 14v18H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224v-43.2l22.51 16.08A6 6 0 0 0 206 192V40a14 14 0 0 0-14-14m-30 186.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Zm32-32l-20-14.28V72a14 14 0 0 0-14-14H94V40a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Z" /></svg>
                        {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75" /></svg> */}
                        <span id="favoriteLabel" className="text-gray-300">Mis favoritos</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
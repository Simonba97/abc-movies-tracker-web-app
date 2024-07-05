import { Cast } from "../models/ICreditsItem"
import PersonCard from "./common/PersonCard"

const CastMovie = ({ cast }: { cast: Cast[] }) => {
    cast = cast.reverse().splice(0, 10);
    return (
        <div id="contCastMovie" className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
            {cast.map((person) => <PersonCard person={person} />)}
        </div>
    )
}

export default CastMovie
import { Cast } from "../models/ICreditsItem"
import PersonCard from "./common/PersonCard"

const CastMovie = ({ cast }: { cast: Cast[] }) => {
    cast = cast.reverse().splice(0, 10);

    /* Control cuando el cast no tiene elementos */
    if (cast.length == 0) {
        return (
            <div id="contCastMovie" className="mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 bg-gray-100">
                <div className="mx-10 py-3 sm:p-4">
                    <span className=" font-light text-gray-400">
                        No hay elenco principal disponible
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div id="contCastMovie" className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-gray-100">
            {cast.map((person) => <PersonCard person={person} />)}
        </div>
    )
}

export default CastMovie
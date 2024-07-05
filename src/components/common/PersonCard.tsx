import { TMDB_BASE_URL_IMG } from "../../config/tmdb"
import { Cast } from "../../models/ICreditsItem"

const PersonCard = ({ person }: { person: Cast }) => {
    return (
        <figcaption className="flex items-center p-2 sm:p-4">
            <div className="w-1/3">
                <img className="rounded-full w-20 h-20 lg:w-32 lg:h-32 object-cover" src={`${TMDB_BASE_URL_IMG}${person.profile_path}`} alt={`${person.name}`} />
            </div>
            <div className="font-medium text-left ms-3 w-2/3">
                <div className="font-light">{person.name}</div>
                <div className="text-sm font-light text-gray-500">{person.character}</div>
            </div>
        </figcaption>
    )
}

export default PersonCard
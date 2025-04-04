import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 mx-2">
        <img src={IMG_CDN_URL+ posterPath} alt="movie poster" />
    </div>
  )
}

export default MovieCard
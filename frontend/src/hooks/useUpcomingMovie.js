import axios from "axios"
import { useDispatch } from "react-redux"
import { options, Upcoming } from "../utils/constant"
import { getUpcomingMovie } from "../redux/movieSlice"


const useUpcomingMovie = async() => {
  const dispatch = useDispatch()
  try {
    const res = await axios.get(Upcoming , options)
    dispatch(getUpcomingMovie(res.data.results))
  } catch (error) {
    console.log(error)
  }
}

export default useUpcomingMovie

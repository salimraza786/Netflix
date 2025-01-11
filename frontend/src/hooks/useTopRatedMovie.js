import axios from "axios"
import { options, Top_Rated } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getTopRatedMovie } from "../redux/movieSlice"


const useTopRatedMovie = async() => {
  const dispatch = useDispatch()
  try {
    const res = await axios.get(Top_Rated , options)
    dispatch(getTopRatedMovie(res.data.results))
    dispatch()
  } catch (error) {
    console.log(error)
  }
}

export default useTopRatedMovie

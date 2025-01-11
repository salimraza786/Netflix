import axios from "axios"
import { options, Popular_Movie } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getPopularMovie } from "../redux/movieSlice"


const usePopularMovie = async() => {
  const dispatch = useDispatch()
   try {
      const res = await axios.get(Popular_Movie , options)
      dispatch(getPopularMovie(res.data.results))
   } catch (error) {
     console.log(error)
   }
}

export default usePopularMovie

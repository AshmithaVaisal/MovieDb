import { useState } from "react"
import { AUTH_TOKEN, API_ENDPOINT} from '../utils/constants'
import { MovieCard } from "./MovieCard"
import axios from "axios"
import { useEffect } from "react"

const Movielist = () =>{
  const [movieData , setMovieData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getMovieList = async() =>{
      const {data} = await axios.get(API_ENDPOINT,{
          headers:{
              Authorization:`Bearer ${AUTH_TOKEN}`
          }
      })
  setMovieData(data)
  setIsLoading(false)
  }

  useEffect(() => {
      getMovieList()
  },[])

  if (isLoading) {
      return <h1>Loading......</h1>
    }


  return (
    <div className='flex items-center justify-between flex-wrap p-10'>
        {movieData.results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export default Movielist

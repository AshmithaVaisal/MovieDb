
export const MovieCard =({ movie })  => {
    const base_image_url = 'https://image.tmdb.org/t/p/original'
 
        return (
            <div className='w-96 border border-black'>
                <img src={base_image_url + movie.backdrop_path} alt="" />
                <h1 className="text-3xl">Title:{movie.title}</h1>
                <p>Description: {movie.overview}</p>
                <span>Popularity: {movie.popularity}</span>
                <span>Views: {movie.vote_average}</span>
            </div>

     )
    }

   
    
 
    

export const MovieCard =({ movie })  => {
    const base_image_url = 'https://image.tmdb.org/t/p/original'
 
        return (
            <div className='w-96 border border-black'>
                <img src={base_image_url + movie.backdrop_path} alt="" />
                <h2>Title:{movie.title}</h2>
                <p>Description: {movie.overview}</p>
                <span>Popularity: {movie.popularity}</span>
                <span>Views: {movie.vote_average}</span>
            </div>

     )
    }

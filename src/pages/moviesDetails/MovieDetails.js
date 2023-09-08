import { useParams } from "react-router-dom"
import { MovieImage } from "../../api/components/MovieImage/MovieImage";
import styles from "./MoviesDetails.module.css"
import { formatDate } from "../../api/components/MovieItem/MovieItem";
import { useGetMoveiDetail } from "../../hooks/useGetMovieDetail";

export function MovieDetails(){
    const { movieId } = useParams();
    const movie = useGetMoveiDetail(movieId);
    const releaseDate = formatDate(movie.release_date);

    return(
        <article id="page-movieDetail" className={styles.container}>
            <image is="x3d" className={styles.image}>            
                <MovieImage path={movie.poster_path} size={500} />
            </image>

            <div className={styles.movieInfo}>
                <h1>{movie.title}</h1>
               
                <div className={styles.movieDescription}>
                    {movie.overview}
                </div>

                <p>Data de lançamento: {releaseDate}</p>
                <p>Popularidade: {movie.popularity}</p>
                <p>Nota: {movie.vote_average}</p>

            </div>

        </article>
    )
}
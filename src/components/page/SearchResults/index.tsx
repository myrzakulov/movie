import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {fetchSearchMovie} from "../../../Store/Reducer/ActionCreate";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {Link, useParams} from "react-router-dom";

const SearchResults = () => {
    const dispatch = useAppDispatch()
    const {searchMovie} = useAppSelector(s => s.userSlice)
    const {movieName} = useParams()

    console.log(searchMovie)

    useEffect(() => {
        dispatch(fetchSearchMovie(movieName))
    }, [movieName])


    return (
        <div className="container">
            <div className="search_movie">
                {
                    searchMovie.map(el => (
                        <div className='moves-search'>
                            <Link to={`/movies/movie-page/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                     alt=""/>
                            </Link>
                            <h3>{el.title}</h3>
                            <h2>{el.release_date}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchResults;
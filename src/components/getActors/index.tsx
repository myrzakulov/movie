import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchingActors} from "../../Store/Reducer/ActionCreate";
import {Link, useParams} from "react-router-dom";
import './detail.scss'

const GetActors = () => {
    const dispatch = useAppDispatch()
    const {loader, actorsMovie  , user, language} = useAppSelector(loader => loader.userSlice)
    const {detailID} = useParams()


    useEffect(() => {
        dispatch(fetchingActors(detailID, language))
    },[detailID,language])


    return (
        <div className='container'>
         <div className="actors" style={{display: "flex", flexWrap: "nowrap", overflowX: "auto"}}>
             {
                 actorsMovie.map(el => (
                     <div className='actors--img'>
                         <Link to={`/movies/movie-cast/${el.id}`}>
                             <img width={200} src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                         </Link>
                         <h2>{el.name}</h2>
                     </div>
                 ))
             }
         </div>
        </div>
    );
};

export default GetActors;
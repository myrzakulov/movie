import React, {useEffect} from 'react';
import {fetchDetail, fetchingActors} from "../../../Store/Reducer/ActionCreate";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import './Detail.scss'
import GetActors from "../../getActors";
import Treilers from "../Treilers";


const Detail = () => {

    const dispatch = useAppDispatch()
    const {loader,actorsMovie, movieDetails, user, language} = useAppSelector(loader => loader.userSlice)
    const {detailID} = useParams()

    useEffect(() => {
        dispatch(fetchDetail(detailID, language))
    }, [detailID, language])


    return (
        <div style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}") center/cover`}} className='detail'>
            <div className='container'>
                <div className="actors">
                    <div className="actors--one">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieDetails.poster_path}`} alt=""/>
                    </div>
                    <div className="actors--two">
                        <h1>{movieDetails.title}</h1>
                        <h2>{movieDetails.release_date}</h2>
                        <h3>{movieDetails.overview}</h3>
                        <h3 className="my-3">{Math.round(movieDetails.runtime / 60)}h {Math.round(movieDetails.runtime / 10)}min</h3>
                    </div>
                </div>
                <GetActors/>
                <Treilers/>
            </div>
        </div>
    );
};

export default Detail;
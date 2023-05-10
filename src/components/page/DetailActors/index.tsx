import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {Link, useParams} from "react-router-dom";
import {fetchingCast, fetchingCinema} from "../../../Store/Reducer/ActionCreate";
import './detaisActors.scss'
import Slider from "react-slick";

const DetailActors = () => {
    const dispatch = useAppDispatch()
    const {loader,language,actorsCast } = useAppSelector(loader => loader.userSlice)
    const { castMovie } = useAppSelector(loader => loader.userSlice)
    const {castID} = useParams()
    const [view, setView] = useState(true)

    const {name, birthday, place_of_birth, biography} = actorsCast
    console.log(castMovie)
    interface ISlider {
        dots: boolean
        infinite: boolean
        speed: number
        slidesToShow: number
        slidesToScroll: number
    }

    const settings: ISlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };


    useEffect(() => {
        dispatch(fetchingCast(castID, language))
        dispatch(fetchingCinema(castID, language))
    }, [castID, language])

    return (
        <div id="info">
            <div className='container'>
                <div className="info">
                    <div className='info--right'>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actorsCast.profile_path}`} alt=""/>
                    </div>
                    <div className='info--left'>
                        <h2>{name}</h2>
                        <h3>{birthday}</h3>
                        <h3>{place_of_birth}</h3>
                        {
                            view ? <h3>{biography ? biography.slice(0,400) : ""}</h3>
                                : <h3>{biography ? biography : ""}</h3>
                        }
                        <button style={{display: biography ? "block" : "none"}} className={view ? "text-blue-400" : "text-red-600"} onClick={() => setView(!view)}>{view ? "open" : "close"}</button>
                    </div>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            castMovie.filter(m => m.poster_path).map(el => (
                                <div>
                                    <Link to={`/movies/movie-page/${el.id}`}>
                                        <img width={200} src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.poster_path}`} alt=""/>
                                    </Link>
                                    <h1>{el.title}</h1>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default DetailActors;
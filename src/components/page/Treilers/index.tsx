import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchingVideo} from "../../../Store/Reducer/ActionCreate";
import {useParams} from "react-router-dom";
// @ts-ignore
import Slider from "react-slick";

interface ISlider {
    dots: boolean
    infinite: boolean
    speed: number
    slidesToShow: number
    slidesToScroll: number
}
const Treilers = () => {
    const dispatch = useAppDispatch()
    const {loader,actorsMovie,videoMovies,key, movieDetails, user, language} = useAppSelector(loader => loader.userSlice)
    const {detailID} = useParams()

    useEffect(() => {
        dispatch(fetchingVideo(detailID, language))
    }, [detailID, language])


    const settings: ISlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };


    // @ts-ignore
    return (
        <div>
            <Slider {...settings}>
                {
                    videoMovies.map (el => (
                        <div key={el.id}>
                            <iframe style={{margin: "20px"}} width="360" height="215" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="YouTube video player" frameBorder='0'
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    ))
                }
            </Slider>

        </div>
    );
};

export default Treilers;
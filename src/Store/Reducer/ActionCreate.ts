import {AppDispatch} from "../store";
import axios from "axios";
import {
    usersFetching,
    usersFetchingSuccess,
    getActorsMovie,
    getMovieDetails,
    usersFetchingError,
    getSearchMovies,
    getActors, videoRec, ActorsCast, getlenguage
} from "./useSlice";

export const APIKEY = '45d1d56fc54beedb6c0207f9ac6cab7c'
export const fetchingUsers = (lan: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lan}&page=1`)
        await dispatch(usersFetchingSuccess(responsive.data.results))
    } catch (e: any) {
        dispatch(usersFetching(e.message))
    }
}
export const fetchSearchMovie = (name: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}`)
        const {data} = await url
        dispatch(getSearchMovies(data.results))
    } catch (e) {
        dispatch(usersFetchingError("Error..."))
    }
}
export const fetchDetail = (id: any, lan: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const str = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${lan}`)
        const {data} = await str
        dispatch(getMovieDetails(data))
    } catch (e) {
        dispatch(usersFetchingError("Error..."))
    }
}
export const fetchingActors = (id: any, lan: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=${lan}`)
        const {data} = await url
        dispatch(getActors(data.cast))
    } catch (e) {
        dispatch(usersFetchingError("Error..."))
    }
}

export const fetchingVideo = (id: any, lan: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=${lan}`)
        const {data} = await url
        dispatch(videoRec(data.results))
    } catch (e) {
        dispatch(usersFetchingError('Error...'))
    }
}


export const fetchingCast = (id: any, lan: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=${lan}`)
        const {data} = await url
        dispatch(ActorsCast(data))
    } catch (e) {
        dispatch(usersFetchingError('Error...'))
    }
}


export const fetchingCinema = (id: any, lan: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersFetching())
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APIKEY}&language=${lan}`)
        const {data} = await url
        dispatch(getActorsMovie(data.cast))
    }catch (e){
        dispatch(usersFetchingError('Error...'))
    }
}

export const fetchLan = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(getlenguage(lan))
}
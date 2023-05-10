import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActors, IMovie, IUser} from "../../type/type";
import {safeAssign} from "@reduxjs/toolkit/dist/query/tsHelpers";


interface IUserState {
    user: IUser[]
    loader: boolean
    error: string
    movieDetails:  Partial<IMovie>
    language: string
    mode: boolean
    searchMovie: IMovie[],
    searchLineRec: [],
    videoMovies:  IMovie[],
    castMovie: any[],
    actorsMovie: IActors[],
    actorsCast: Partial<any>,
    key: string
}

const initialState: IUserState = {
    user: [],
    loader: false,
    error: '',
    movieDetails: {},
    language: "en-US",
    mode: false,
    searchMovie: [],
    searchLineRec: [],
    videoMovies: [],
    castMovie: [],
    actorsMovie: [],
    actorsCast: {},
    key: "en-US"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state){
            state.loader = true
        },
        usersFetchingSuccess(state,action: PayloadAction<IUser[]>){
            state.loader = false
            state.user = action.payload
            state.error = ''
        },
        usersFetchingError(state,action: PayloadAction<string>){
            state.loader = false
            state.user = []
            state.error = action.payload
        },
        getMovieDetails(state,action){
            state.loader = false
            state.movieDetails = {...action.payload}
        },
        getSearchMovies(state, action: PayloadAction<any>) {
            state.loader = false
            state.searchMovie = action.payload
            // state.
        },
        getActors(state, action: PayloadAction<any>){
            state.loader = false
            state.actorsMovie = action.payload
        },
        videoRec(state,action) {
            state.loader = false
            state.videoMovies = action.payload
            state.key = action.payload
        },
        ActorsCast(state, action: PayloadAction<object>) {
            state.loader = false
            state.actorsCast = action.payload
        },
        getActorsMovie(state, action) {
            state.loader = false
            state.castMovie = action.payload
        },
        getlenguage(state, action:PayloadAction<string>)  {
           state.language = action.payload
        }

    }
})

export const {usersFetching,getlenguage,getActorsMovie,ActorsCast,videoRec,  getActors,getMovieDetails, usersFetchingSuccess, usersFetchingError, getSearchMovies} = userSlice.actions
export default userSlice.reducer
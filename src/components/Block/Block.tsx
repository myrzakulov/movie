import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchingUsers} from "../../Store/Reducer/ActionCreate";
import './Block.scss'
import {Link} from "react-router-dom";
import GetActors from "../getActors";
const Block = () => {
    const dispatch = useAppDispatch()
    const {loader,user,error,language} = useAppSelector((state) => state.userSlice)

    useEffect(() => {
        dispatch(fetchingUsers(language))
    }, [language])
    if (loader) {
        return <h1>loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div id='moves'>
            <div className='container' style={{display: "flex",alignItems: "center",flexWrap: "wrap", justifyContent:"space-between"}}>
                {
                    user.map(el => (
                        <div className='moves'>
                            <Link to={`/movies/movie-page/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} width={200} alt=""/>
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
export default Block;
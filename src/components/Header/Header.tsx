import React, {useState} from 'react';
import "./Header.scss"
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from "../../asetss/img/Rectangle.png"
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchLan} from "../../Store/Reducer/ActionCreate";
// import {fetchlan} from "../../Store/Reducer/ActionCreate";
const Header = () => {
    const [value, setValue] = useState('')
    const [button, setButton] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const cHange = (e: React.ChangeEvent<any>) => {
        dispatch(fetchLan(e.target.value))
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <Link to={'/'}>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className="header--search">
                        <div className='header--search__input'>
                            <input onChange={(event) => setValue(event.target.value)} type="text"/>
                        </div>
                        <button
                        onClick={() => navigate(`./movies/movie-page/Search/${value}`)}>
                            search
                        </button>
                    </div>
                    <div className="header--language">
                        <select onChange={(e) => cHange(e)}>
                            <option value="en-US">en-US</option>
                            <option value="ru-RU">ru-RU</option>
                        </select>
                    </div>
                    <div className="header--right">
                        <div className="header--right__btn">
                            <div>
                                <button className="header--right__btn--button" onClick={() => setButton(true)}>
                                    Sign in
                                </button>
                                <div style={{display: button ? "block" : "none"}}>

                                </div>
                            </div>

                            <button className="header--right__btn--button">Sign up</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;
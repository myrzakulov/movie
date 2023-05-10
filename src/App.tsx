import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Detail from "./components/page/Detail";
import SearchResults from "./components/page/SearchResults";
import Block from "./components/Block/Block";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailActors from "./components/page/DetailActors";
function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path={"/"} element={<Block/>}/>
            <Route path={'/movies/movie-page/:detailID'} element={<Detail/>}/>
            <Route path={'/movies/movie-cast/:castID'} element={<DetailActors/>}/>
            <Route path={'/movies/movie-page/Search/:movieName'} element={<SearchResults/>}/>
        </Routes>
    </div>
  );
}

export default App;

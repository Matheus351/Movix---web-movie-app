import { useState, useEffect } from 'react'
import { fetchData } from './api/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './api/pages/home/Home'
import Header from './components/header/Header'
import Details from './api/pages/details/Details'
import SearchResult from './api/pages/searchResult/SearchResult'
import Explore from './api/pages/explore/Explore'
import NotFound from './api/pages/404/404'
import Footer from './components/footer/Footer'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig()
  }, [])


  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);


  const fetchApiConfig = () => {

    fetchData("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };


  const genresCall = async () => {
    let promises: Promise<any>[] = [];
    let endPoints = ["tv", "movie"];
    let allGenres:any = {};

    endPoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item: { id: string | number }) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import React, { ChangeEvent, KeyboardEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../../components/contentWrapper/ContentWrapper';
import './style.scss';

const HeroBanner = () => {

    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("");

    const { data, loading } = useFetch("/movie/upcoming")

    const { url } = useSelector((state: any) => state.home)

    useEffect(() => {

        if (data) {
            const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
            setBackground(bg);
        }

    }, [data]);

    const navigate = useNavigate()

    const searchQueryHandler = (e: any) => {
        if (e.key === "Enter" && e.query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>

            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className='wrapper'>
                    <div className='heroBannerContent'>
                        <span className='title'>Welcome</span>
                        <span className='subTitle'>Millions of movies, TV shows and people to discover. Explore now.</span>
                        <div className='searchInput'>
                            <input onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} type="text" placeholder='Searh for a Movie or TV Show...' />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </ContentWrapper>

        </div>
    )
}

export default HeroBanner
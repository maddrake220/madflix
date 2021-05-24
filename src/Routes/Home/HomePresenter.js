import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster_Home from "../../Components/Poster_Home";
import Slider from "react-slick";
import getYoutubePath from "./getYoutubePath";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Container = styled.div`
margin-top: 910px;
padding: 20px;
`;
const Title = styled.div`
    font-size: 13px;
    padding-bottom: 16px;
`;
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 4
  };

const Section = styled.div`
    padding-right: 10px;
`;
const HomePresenter = ({
    weeklyTrending,
    error,
    loading,
    random
}) => ( <>
        <Helmet>
            <title>Movies | Madflix</title>
        </Helmet>
        {
            loading ? <Loader /> : <>
            <div class="video-background">
                        <div class="video-foreground">
                            {weeklyTrending && weeklyTrending.length > 0 ? 
                            
                            <iframe class="ww" src={`https://www.youtube-nocookie.com/embed/${getYoutubePath(weeklyTrending[random].id,weeklyTrending[random].media_type)}?autoplay=1&autopause=0&mute=0&loop=1&playlist=${getYoutubePath(weeklyTrending[random].id,weeklyTrending[random].media_type)}&controls=0&vq=hd1080`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                             : <Loader/>
                             }  </div>
                        </div>
                        <div id="vidtop-content">
                            <div class="vid-info">
                                <h1>{weeklyTrending && weeklyTrending[random].original_title ? weeklyTrending[random].original_title : weeklyTrending[random].name }</h1>
                                    <p>{weeklyTrending && weeklyTrending[random].overview}</p>
                                <Link to={`/movie/${weeklyTrending[random].id}`}> 상세 정보</Link>
                            </div>
                        </div>
                <Container>
                    
                    <Title>이번주 인기 콘텐츠</Title>
                    {weeklyTrending && weeklyTrending.length > 0 && (
                        
                        <Slider  {...settings}>
                            {weeklyTrending.map(trend => 
                        <Section>
                          <Poster_Home
                                key={trend.id}
                                id={trend.id}
                                title={trend.original_title ? trend.original_title : trend.name}
                                isMovie={trend.media_type==="movie" ? true : false}
                                imageUrl={trend.poster_path}
                                rating={trend.vote_average}
                                year={trend.release_date && trend.release_date.substring(0,4)} />
                         </Section>
                        )}
                        </Slider>
                   )
                    }
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
        </>}
        </>

)
/* children은 태그 사이의 값을 받을 수 있다. it's easy to read */

HomePresenter.propTypes = {
    weeklyTrending:propTypes.array,
    error:propTypes.string,
    loading:propTypes.bool.isRequired
};

export default HomePresenter;

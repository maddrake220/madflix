import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster_Home from "../../Components/Poster_Home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
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
    loading
}) => ( <>
        <Helmet>
            <title>Movies | Madflix</title>
        </Helmet>
        {
            loading ? <Loader /> : 
                <Container>
                    <Title>이번주 인기 콘텐츠</Title>
                    {weeklyTrending && weeklyTrending.length > 0 && (
                        
                        <Slider  {...settings}>
                            {weeklyTrending.map(trend => 
                        <Section>
                          <Poster_Home
                                key={trend.id}
                                id={trend.id}
                                title={trend.original_title}
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
        }
        </>

)
/* children은 태그 사이의 값을 받을 수 있다. it's easy to read */

HomePresenter.propTypes = {
    weeklyTrending:propTypes.array,
    error:propTypes.string,
    loading:propTypes.bool.isRequired
};

export default HomePresenter;

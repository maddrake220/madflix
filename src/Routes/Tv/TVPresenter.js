
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;
const TVPresenter = ({
    topRated,
    airingToday,
    popular,
    error,
    loading
}) => (<> 
        <Helmet>
            <title> TV Shows | Madflix</title>
        </Helmet>
        {loading ? <Loader/> : 
    <Container>
        {topRated && topRated.length > 0 && (
        <Section title= "최고 평점 시리즈">
            {topRated.map(show => 
                <Poster 
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    year={show.first_air_date && show.first_air_date.substring(0,4)} />)}
        </Section>
        )}
        {airingToday && airingToday.length > 0 && (
        <Section title= "오늘 방영 시리즈">
            {airingToday.map(show => 
                <Poster 
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    year={show.first_air_date && show.first_air_date.substring(0,4)} />)}
        </Section>
        )}
        {popular && popular.length > 0 && (
        <Section title= "인기 시리즈">
            {popular.map(show => 
                <Poster 
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    year={show.first_air_date && show.first_air_date.substring(0,4)} />)}
        </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
    </Container>}
        </> )

TVPresenter.propTypes = {
    topRated:propTypes.array,
    airingToday:propTypes.array,
    popular:propTypes.array,
    error:propTypes.string,
    loading:propTypes.bool.isRequired
};

export default TVPresenter;
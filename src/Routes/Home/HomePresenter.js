import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
const Container = styled.div`
padding: 20px;
`;

const HomePresenter = ({
    nowPlaying,
    upcoming,
    popular,
    error,
    loading
}) => ( <>
        <Helmet>
            <title>Movies | Madflix</title>
        </Helmet>
        {
            loading ? <Loader /> : 
            /* Load를 사용하지 않으면 Presenter가 Loaded 되지 않은 채
             실행되기 떄문에 항상 Load check해야한다.*/
                <Container>
                    {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map(movie => 
                        <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0,4)} />)}
                    </Section>)
                    }
                    {upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming Movies">
                        {upcoming.map(movie => 
                        <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0,4)} />)}
                    </Section>)
                    }
                    {popular && popular.length > 0 && (
                    <Section title="Popular Movies">
                        {popular.map(movie => 
                        <Poster 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0,4)} />)}
                    </Section>)
                    }
                    {error && <Message color="#e74c3c" text={error} />}
            
                </Container>
        }
        </>

)
/* children은 태그 사이의 값을 받을 수 있다. it's easy to read */

HomePresenter.propTypes = {
    nowPlaying:propTypes.array,
    upcoming:propTypes.array,
    popular:propTypes.array,
    error:propTypes.string,
    loading:propTypes.bool.isRequired
};

export default HomePresenter;

<Section title="Now Playing"></Section>
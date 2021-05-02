import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
const Container = styled.div`
padding: 0px 10px;
`;

const HomePresenter = ({
    nowPlaying,
    upcoming,
    popular,
    error,
    loading
}) => loading ? <Loader /> : 
/* Load를 사용하지 않으면 Presenter가 Loaded 되지 않은 채
 실행되기 떄문에 항상 Load check해야한다.*/
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
            {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>)
        }
        {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
            {upcoming.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>)
        }
        {popular && popular.length > 0 && (
        <Section title="Popular Movies">
            {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>)
        }

    </Container>;
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
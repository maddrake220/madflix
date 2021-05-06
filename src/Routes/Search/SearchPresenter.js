import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size: 28px;
    width:100%;
`;

const SearchTerm = styled.div`
    font-size: 20px;
    margin-bottom: 30px;
    position: relative;
    color: yellow;
`;
const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    error,
    loading,
    handleSubmit,
    updateTerm,
    pastTerm
}) => <Container>
    <Helmet><title>Search | Madflix</title></Helmet>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="검색하고 싶은 영화, TV시리즈를 입력하세요" 
        value={searchTerm} 
        onChange={updateTerm}>

        </Input>
    </Form>
    {loading ? <Loader/> : <> 
        {pastTerm 
            ? <SearchTerm>'{pastTerm}' 전체 검색결과가 {movieResults.length + tvResults.length}건 있습니다.</SearchTerm> : pastTerm}
        {movieResults && movieResults.length >0 && 
        
        <Section title = "영화 검색결과">
            {movieResults.map(movie => (
                <Poster 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0,4)} /> 
        ))}</Section>
        }
        {tvResults && tvResults.length >0 && 
        <Section title = "TV프로그램 검색결과">
            {tvResults.map(show => (
                <Poster 
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0,4)} /> 
        ))}</Section>
        }
        {error && <Message color="#e74c3c" text={error} />}
</>}
</Container>;

SearchPresenter.propTypes = {
    movieResults:propTypes.array,
    tvResults:propTypes.array,
    searchTerm:propTypes.string,
    pastTerm:propTypes.string,
    error:propTypes.string,
    loading:propTypes.bool.isRequired,
    handleSubmit:propTypes.func.isRequired,
    updateTerm:propTypes.func.isRequired
};

export default SearchPresenter;
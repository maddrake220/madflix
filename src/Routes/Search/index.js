import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";
import { multiSearchApi } from "../../API";

const Container = styled.div`
  margin-top: 20px;
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchTerm = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  position: relative;
  color: yellow;
`;
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [pastSearchTerm, setPastSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };
  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };
  const searchByTerm = async () => {
    try {
      const {
        data: { results: searchResults },
      } = await multiSearchApi.multiSearch(searchTerm);
      setPastSearchTerm(searchTerm);
      setLoading(true);
      setSearchResults(searchResults);
    } catch {
      setError("결과를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Container>
      <Helmet>
        <title>Search | Madflix</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="검색하고 싶은 영화, TV시리즈를 입력하세요"
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {pastSearchTerm ? (
            <SearchTerm>
              '{pastSearchTerm}' 전체 검색결과가 {searchResults.length}건
              있습니다.
            </SearchTerm>
          ) : (
            pastSearchTerm
          )}
          {searchResults && searchResults.length > 0 && (
            <Section title="검색결과">
              {searchResults.map((result) => (
                <Poster
                  key={result.id}
                  id={result.id}
                  title={
                    result.title ? result.title : result.name && result.name
                  }
                  imageUrl={result.poster_path}
                  isMovie={result.media_type === "movie" ? true : false}
                  rating={result.vote_average}
                  year={
                    result.release_date
                      ? result.release_date.substring(0, 4)
                      : result.first_air_date &&
                        result.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </>
      )}
    </Container>
  );
};

export default Search;

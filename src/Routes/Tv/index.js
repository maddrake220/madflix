import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";
import { tvApi } from "../../API";

const Container = styled.div`
  padding: 40px;
`;
const TV = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  const getTvDataFromApi = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setTopRated(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
    } catch {
      setError("Tv 데이터를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTvDataFromApi();
  }, []);
  return (
    <>
      <Helmet>
        <title> TV Shows | Madflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title="최고 평점 시리즈">
              {topRated.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section title="오늘 방영 시리즈">
              {airingToday.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="인기 시리즈">
              {popular.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  title={show.name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};

export default TV;

import React, { useState, useEffect } from "react";
import Home from "./Home";
import { trendApi } from "../../API";

const Index = () => {
  const [weeklyTrending, setWeeklyTrending] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 20);
    setRandomNumber(randomNumber);
  };

  const getWeeklyTrendingFromApi = async () => {
    try {
      const {
        data: { results: weeklyTrending },
      } = await trendApi.weeklyTrending();

      setWeeklyTrending(weeklyTrending);
    } catch {
      setError("데이터를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRandomNumber();
    getWeeklyTrendingFromApi();
  }, []);

  return (
    <Home
      weeklyTrending={weeklyTrending}
      error={error}
      loading={loading}
      random={randomNumber}
    />
  );
};

export default Index;

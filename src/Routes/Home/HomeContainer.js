import React from "react";
import HomePresenter from "./HomePresenter";
import { trendApi } from "../../API";

export default class extends React.Component {
  state = {
    weeklyTrending: null,
    error: null,
    loading: true,
    random: null,
  };
  async componentDidMount() {
    let random = Math.floor(Math.random() * 20);
    this.setState({ random });
    try {
      const {
        data: { results: weeklyTrending },
      } = await trendApi.weeklyTrending();

      this.setState({
        weeklyTrending,
      });
    } catch {
      this.setState({
        error: "Can't find movies information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { weeklyTrending, error, loading, random } = this.state;
    return (
      <HomePresenter
        weeklyTrending={weeklyTrending}
        error={error}
        loading={loading}
        random={random}
      />
    );
  }
}

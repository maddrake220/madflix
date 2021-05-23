import React from "react";
import HomePresenter from "./HomePresenter";
import { trendApi } from "../../API";

export default class extends React.Component {
    state = {
        weeklyTrending:null,
        error: null,
        loading: true
    }
    async componentDidMount() {
        try{
            const {
                data: {results: weeklyTrending}
            } = await trendApi.weeklyTrending();
            
            this.setState({
                weeklyTrending,
            })
        } catch {
            this.setState({
                error: "Can't find movies information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const {weeklyTrending, error, loading} = this.state;
        return (<HomePresenter 
            weeklyTrending={weeklyTrending} 
            error={error}
            loading={loading}
            />);
    }
}
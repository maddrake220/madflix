import React from "react";
import { moviesApi, tvApi  } from "../../API";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false,
        pastTerm: null
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    }
    updateTerm = (event) => {
        const {target : { value}} = event;
        this.setState({
            searchTerm: value
        })
    }
    searchByTerm = async() => {
            const {searchTerm} = this.state;
        try {
            const {data: {
                results:movieResults}} = await moviesApi.search(searchTerm)
            const {data: {
                results:tvResults}} = await tvApi.search(searchTerm)
            this.setState({pastTerm: searchTerm, movieResults, tvResults, loading : true});
        } catch {
            this.setState({ error : "Can't find results"})
        } finally {
            this.setState({ loading : false})
        }
    }
    render() {
        const {movieResults,tvResults,searchTerm, error, loading, pastTerm} = this.state;
        return (<SearchPresenter 
            movieResults={movieResults} 
            tvResults={tvResults} 
            searchTerm={searchTerm}
            pastTerm={pastTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            />);
    }
}
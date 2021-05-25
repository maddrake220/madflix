import React from "react";
import { multiSearchApi  } from "../../API";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        searchResults: null,
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
                results:searchResults}} = await multiSearchApi.multiSearch(searchTerm)
            this.setState({pastTerm: searchTerm, searchResults, loading : true});
        } catch {
            this.setState({ error : "Can't find results"})
        } finally {
            this.setState({ loading : false})
        }
    }
    render() {
        const {searchResults, searchTerm, error, loading, pastTerm} = this.state;
        return (<SearchPresenter 
            searchResults={searchResults} 
            searchTerm={searchTerm}
            pastTerm={pastTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            />);
    }
}
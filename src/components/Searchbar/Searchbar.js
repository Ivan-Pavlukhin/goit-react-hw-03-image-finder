import { Component } from "react";

export class Searchbar extends Component {
    state = {
        value: ''
    }


    findValue = (e) => {
        e.preventDefault()
        this.setState({value: e.currentTarget.value})
    }

    handelChange = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return(
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handelChange}>
                    <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    onChange={this.findValue}
                className="SearchForm-input"
                type="text"
                autoсomplete="off"
                autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                />
            </form>
        </header>
    )
    }
    
}
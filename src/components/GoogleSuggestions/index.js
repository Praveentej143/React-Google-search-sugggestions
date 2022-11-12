// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  userClicked = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="item-container">
            <div className="suggestion-item-container">
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search-icon"
                />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search Google"
                  onChange={this.onSearch}
                  value={searchInput}
                />
              </div>
              {/* list components goes here */}
              <ul className="list-container">
                {searchResults.map(each => (
                  <SuggestionItem
                    itemsComp={each}
                    key={each.id}
                    userClicked={this.userClicked}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

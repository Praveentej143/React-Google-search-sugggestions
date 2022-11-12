// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemsComp, userClicked} = props
  const {id, suggestion} = itemsComp

  const onUserClicked = () => {
    userClicked(suggestion)
  }
  return (
    <li className="list-item">
      <div className="suggestion-item-containers">
        <p className="suggestion-item">{suggestion}</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-logo"
            onClick={onUserClicked}
          />
        </div>
      </div>
    </li>
  )
}

export default SuggestionItem

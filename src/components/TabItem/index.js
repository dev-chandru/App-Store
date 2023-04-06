// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetailsList, onUpdateTablist, isActive} = props
  const {tabId, displayText} = tabDetailsList

  const onClickTabButton = () => {
    onUpdateTablist(tabId)
  }

  const activeClassName = isActive ? 'active-button' : ''

  return (
    <li className="tab-list-cards-container">
      <button
        className={`tab-button ${activeClassName}`}
        type="button"
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

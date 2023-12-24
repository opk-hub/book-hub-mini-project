import HeaderContextContainer from '../../context/HeaderContextContainer'

import FavoriteItemContainer from '../FavoriteItemContainer'
import './index.css'

const FavoritesListContainer = () => (
  <HeaderContextContainer.Consumer>
    {value => {
      const {favoritesList} = value

      return (
        <ul className="favorites-list">
          {favoritesList.map(eachItem => (
            <FavoriteItemContainer
              key={eachItem.id}
              cartItemDetails={eachItem}
            />
          ))}
        </ul>
      )
    }}
  </HeaderContextContainer.Consumer>
)

export default FavoritesListContainer

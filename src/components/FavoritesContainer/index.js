import {Component} from 'react'
import FavoritesEmptyContainer from '../FavoritesEmptyContainer'
import FavoritesListContainer from '../FavoritesListContainer'
import HeaderContainer from '../HeaderContainer'
import HeaderContextContainer from '../../context/HeaderContextContainer'

import './index.css'

class FavoritesContainer extends Component {
  render() {
    return (
      <HeaderContextContainer.Consumer>
        {value => {
          const {favoritesList, removeAllFavorites, isDarkTheme} = value
          const favoritesListLength = favoritesList.length
          const showEmptyView = favoritesListLength === 0
          const bookText = favoritesListLength === 1 ? 'Book' : 'Books'

          const darkThemeHeading = isDarkTheme
            ? 'favorites-dark-heading-text'
            : ''

          const onClickRemoveAllBtn = () => {
            removeAllFavorites()
          }
          return (
            <>
              <HeaderContainer />
              <div className="favorites-container">
                {showEmptyView ? (
                  <FavoritesEmptyContainer />
                ) : (
                  <div className="favorites-content-container">
                    <h1 className={`favorites-heading ${darkThemeHeading}`}>
                      My Favorites
                    </h1>
                    <button
                      type="button"
                      className="remove-all-btn"
                      onClick={onClickRemoveAllBtn}
                    >
                      Remove {favoritesListLength} {bookText}
                    </button>
                    <FavoritesListContainer />
                  </div>
                )}
              </div>
            </>
          )
        }}
      </HeaderContextContainer.Consumer>
    )
  }
}

export default FavoritesContainer

import {Link} from 'react-router-dom'
import HeaderContainer from '../HeaderContainer'
import TopRatedBooksContainer from '../TopRatedBooksContainer'
import HeaderContextContainer from '../../context/HeaderContextContainer'
import './index.css'

const HomeContainer = () => (
  <HeaderContextContainer.Consumer>
    {value => {
      const {updateActiveNavId, isDarkTheme} = value
      const onClickFindBooks = () => {
        updateActiveNavId(2)
      }

      const darkHeadingText = isDarkTheme ? 'home-dark-heading-text' : ''
      const darkDescriptionText = isDarkTheme
        ? 'home-dark-description-text'
        : ''

      return (
        <>
          <HeaderContainer />
          <div className="home-container">
            <div className="home-content">
              <h1 className={`home-heading ${darkHeadingText}`}>
                Find Your Next Favorite Books?
              </h1>
              <p className={`home-description ${darkDescriptionText}`}>
                You are in the right place. Tell us what titles or genres you
                have enjoyed in the past, and we will give you surprisingly
                insightful recommendations.
              </p>
              <Link to="/shelf">
                <button
                  type="button"
                  className="find-books-mobile-btn"
                  onClick={onClickFindBooks}
                >
                  Find Books
                </button>
              </Link>
            </div>
            <TopRatedBooksContainer />
          </div>
        </>
      )
    }}
  </HeaderContextContainer.Consumer>
)

export default HomeContainer

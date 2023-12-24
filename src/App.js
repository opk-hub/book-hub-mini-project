import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import BookItemDetailsContainer from './components/BookItemDetailsContainer'
import BooksShelvesContainer from './components/BooksShelvesContainer'
import HomeContainer from './components/HomeContainer'
import LoginFormContainer from './components/LoginFormContainer'
import ProtectedRouteContainer from './components/ProtectedRouteContainer'
import NotFoundContainer from './components/NotFoundContainer'
import HeaderContextContainer from './context/HeaderContextContainer'
import FavoritesContainer from './components/FavoritesContainer'
import './App.css'

class App extends Component {
  state = {
    showNavIcons: false,
    activeNavId: '',
    isDarkTheme: false,
    favoritesList: [],
  }

  updateActiveNavId = navId => {
    this.setState({activeNavId: navId})
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onToggleIcon = () => {
    this.setState(prevState => ({
      showNavIcons: !prevState.showNavIcons,
    }))
  }

  onClose = () => {
    this.setState({showNavIcons: false})
  }

  removeAllFavorites = () => {
    this.setState({favoritesList: []})
    localStorage.setItem('favorites_list', [])
  }

  addFavorites = book => {
    const {favoritesList} = this.state
    const bookObject = favoritesList.find(eachBook => eachBook.id === book.id)
    if (bookObject === undefined) {
      this.setState(prevState => ({
        favoritesList: [...prevState.favoritesList, book],
      }))
    }
  }

  removeFavorites = id => {
    const {favoritesList} = this.state
    const updatedFavoritesList = favoritesList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({favoritesList: updatedFavoritesList})
  }

  render() {
    const {showNavIcons, activeNavId, isDarkTheme, favoritesList} = this.state
    const appBg = isDarkTheme ? 'dark-theme' : 'light-theme'
    return (
      <HeaderContextContainer.Provider
        value={{
          showNavIcons,
          activeNavId,
          updateActiveNavId: this.updateActiveNavId,
          onToggleIcon: this.onToggleIcon,
          onClose: this.onClose,
          isDarkTheme,
          onToggleTheme: this.onToggleTheme,
          favoritesList,
          removeAllFavorites: this.removeAllFavorites,
          removeFavorites: this.removeFavorites,
          addFavorites: this.addFavorites,
        }}
      >
        <div className={`app-container ${appBg}`}>
          <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <ProtectedRouteContainer exact path="/" component={HomeContainer} />
            <ProtectedRouteContainer
              exact
              path="/shelf"
              component={BooksShelvesContainer}
            />
            <ProtectedRouteContainer
              exact
              path="/books/:id"
              component={BookItemDetailsContainer}
            />
            <ProtectedRouteContainer
              exact
              path="/favorites"
              component={FavoritesContainer}
            />
            <Route path="/not-found" component={NotFoundContainer} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </HeaderContextContainer.Provider>
    )
  }
}

export default App

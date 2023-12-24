import React from 'react'

const HeaderContextContainer = React.createContext({
  activeNavId: '',
  updateActiveNavId: () => {},
  showNavIcons: false,
  onToggleIcon: () => {},
  onClose: () => {},
  isDarkTheme: false,
  onToggleTheme: () => {},
  favoritesList: [],
  removeAllFavorites: () => {},
  removeFavorites: () => {},
  addFavorites: () => {},
})

export default HeaderContextContainer

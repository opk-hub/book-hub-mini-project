import {NavLink} from 'react-router-dom'
import HeaderContextContainer from '../../context/HeaderContextContainer'
import './index.css'

const NavItemContainer = props => {
  const {navItemDetails, updateActiveNavId} = props
  const {id, displayText, pathText} = navItemDetails

  const onClickNavItem = () => {
    updateActiveNavId(id)
  }

  return (
    <HeaderContextContainer.Consumer>
      {value => {
        const {isDarkTheme} = value
        const navLinkDarkThemeText = isDarkTheme ? 'header-dark-theme-text' : ''

        return (
          <li className="nav-menu-item" onClick={onClickNavItem}>
            <NavLink
              exact
              to={`/${pathText}`}
              className={`nav-link ${navLinkDarkThemeText}`}
            >
              {displayText}
            </NavLink>
          </li>
        )
      }}
    </HeaderContextContainer.Consumer>
  )
}

export default NavItemContainer

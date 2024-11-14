import s from './header.module.css'
import HeaderLogo from "./header-logo/header_logo"
import HeaderText from "./header-text/header-text"
import HeaderButton from "./header-button/header-button"

const Header = () => {
  return (
    <header className={s.header}>
      <HeaderLogo/>
      <HeaderText/>
      <HeaderButton/>
    </header>
  )
}

export default Header
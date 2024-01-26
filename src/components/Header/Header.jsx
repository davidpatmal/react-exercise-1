import Logo from "./Logo/Logo"
import Links from "./Links/Links"
import Menu from "./Menu/Menu"

const Header = ({ header }) => {
    return (
        <div>
            <Logo logo={header.logo}></Logo>
            <Links links={header.links}></Links>
            <Menu menu={header.menu}></Menu>
        </div>
    )
}

export default Header

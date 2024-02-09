import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from './logo.svg'
import HeaderLink from "../HeaderLink"
function Header(){
    return(
        <header className={styles.header}>
            <Link to="./">
            <img src={logo} className={styles.logo} alt="logo of cinetag" />
            </Link>
<nav>
<HeaderLink url="./">
Home
</HeaderLink>
<HeaderLink url="./favorite">
Favorite
</HeaderLink>
</nav>
        </header>
    )
}

export default Header
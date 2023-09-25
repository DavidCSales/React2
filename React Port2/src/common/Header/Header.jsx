import { Link } from "react-router-dom";
import styles from "../../styles/components/Header/header.module.scss"

export default function Header() {
    return(
        <>
            <header className={`${styles["header-full-content"]}`}>
                <h1>DavidCS</h1>
                <nav>
                    <Link to={'/'} >Home</Link>
                    <Link to= {'/projects'}>Projects</Link>
                </nav>
            </header>
        </>
    )
}
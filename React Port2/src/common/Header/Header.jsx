import { Link } from "react-router-dom";

export default function Header() {
    return(
        <>
            <header>
                <h1>DavidCS</h1>
                <nav>
                    <Link to={'/'} >Home</Link>
                    <Link to= {'/projects'}>Projects</Link>
                </nav>
            </header>
        </>
    )
}
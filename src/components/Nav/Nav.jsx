// PATH: 'src/components/Nav/Nav.jsx'

import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { Link } from 'react-router-dom'

const Nav = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    return (
        <nav className="Nav">
            <Link to='/'>Home</Link>
            {!isLoading ? (
                isAuthenticated ? (
                    <span>
                        <Link to="/profile">Profile</Link> || <LogoutButton />
                    </span>
                ) : (
                    <LoginButton />
                )
            ) : null}
        </nav>
    )
}

export default Nav
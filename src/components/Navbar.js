import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Home Cookin Logo" />
                    </Link>
                    <button className="nav-btn" onClick={()=> setShow()}>
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link to="/" className="nav-link" activeClassName="active-link">home</Link>
                    <Link to="/recipes" className="nav-link" activeClassName="active-link">recipes</Link>
                    <Link to="/tags" className="nav-link" activeClassName="active-link">tags</Link>
                    <Link to="/about" className="nav-link" activeClassName="active-link">about</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn">Contact us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

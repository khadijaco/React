import { Link } from "react-router-dom";

const navStyle = {
    backgroundColor: '#fff',
    color: '#1c1b1b',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const Navbar = () => {
    return (
        <nav style={navStyle}>
            
            <Link to="/" style={{ textDecoration: 'none', color: '#1c1b1b' }}>index</Link>

        </nav>
    );
}

export default Navbar;
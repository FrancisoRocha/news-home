import "./Navbar.css"

function Navbar() {
    return (
        <>
            <img src="../public/logoW.svg" alt="logoW" className="logo"/>
            <ul className="navegacion">
                <li className="navbar">Home</li>
                <li className="navbar">New</li>
                <li className="navbar">Popular</li>
                <li className="navbar">Treding</li>
                <li className="navbar">Categories</li>
            </ul>
        </>
    )
}

export default Navbar;
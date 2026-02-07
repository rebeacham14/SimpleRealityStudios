import './NavBar.css';

function NavBar() {

    let navMenuIsOpen = false;
    
    const toggleNavMenu = () => {
        navMenuIsOpen = !navMenuIsOpen;
        console.log("Button clicked!");
    };

    return (
        <nav className="Nav-Wrapper">
            <div className="Nav-Container">
                
                <div className='Nav-Logo-&-Text'>
                    <a href="/" className="Nav-Title-Text">
                        {/* Logo */}
                        {/* logo
                        <img className='Nav-Logo' src="" alt="" /> */}
                        
                        {/* Text */}
                        <span className="Simple-Reality-Span">SIMPLE REALITY </span>
                        <span className="Studios-Span">STUDIOS</span>
                    </a>

                </div>

                {/* Nav Menu Toggle */}
                <div className='Nav-Menu-Icon-Container'>
                    <button className={navMenuIsOpen ? 'Nav-Menu-Icon-Open' : 'Nav-Menu-Icon-Closed'}> ||| </button>
                </div>
                                
            </div>

            {/* Nav Menu Toggle */}
            {navMenuIsOpen ? (
                <div>
                    list of nav link options 

                    <button className="Nav-Get-Tickets" onClick={toggleNavMenu}>
                        GET TICKETS
                    </button>
                </div>
            ) : '' }

        </nav>
    );
}
export default NavBar;

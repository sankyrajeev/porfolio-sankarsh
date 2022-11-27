import Navigation from './Navigation';


function Header({setCurrentPage}) {
    return (
        <header>
            
            <Navigation setCurrentPage ={setCurrentPage } />
        </header>
    )

}

export default Header;
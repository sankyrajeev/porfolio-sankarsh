import Navigation from './Navigation';

function Header({setCurrentPage}) {
    return (
        <header>
            <h1>Sankarsh Rajeev</h1>
            <Navigation setCurrentPage ={setCurrentPage } />
        </header>
    )

}

export default Header;
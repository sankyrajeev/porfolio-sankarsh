import logo from '../pages/images/logo.png'

function Navigation({ setCurrentPage }) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <img className='logo' src={logo} alt="log" width="70px"></img>
            <a className="fs-3 navbar-brand text-white " href="#">Sankarsh Rajeev</a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-light"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav   mb-2 mb-lg-0 text-white ms-auto" >
                        <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('home')
                                }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white " aria-current="page" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('about')
                                }}>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('portfolio')
                                }}> Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('contact')
                                }}> Contact</a>
                            </li>
                            <li className="nav-item text-white">
                                <a className="nav-link text-white" href="https://drive.google.com/file/d/1dPzM60YcWiXx--SN_OQv8c18hmq_A6tR/view?usp=sharing"> Resume</a>
                            </li>


                        </ul>

                    </div>
            </div>
        </nav >
    )

}

export default Navigation;
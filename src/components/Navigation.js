

function Navigation({ setCurrentPage }) {
    return (
        <nav class="navbar sticky-top navbar-expand-lg  ">
            <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Sankarsh Rajeev</a>
                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto  mb-2 mb-lg-0 text-white" >
                        <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('home')
                                }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white " aria-current="page" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('about')
                                }}>About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('portfolio')
                                }}> Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentPage('contact')
                                }}> Contact</a>
                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" href="#"> Resume</a>
                            </li>


                        </ul>

                    </div>
            </div>
        </nav >
    )

}

export default Navigation;
import Image from "next/image";

export default function Footer(){
    return(
<div className="bg-dark">
<div className="b-example-divider"></div>
    <div className="container">
        {/* This is the three vertical lists that contain information about the website and links*/}
        <footer className="pt-4">
        <div className="row">
        <div className="col-6 col-md-2 mb-2">
            <h5 className="text-light">Links</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2 text-secondary"><a href="#" className="nav-link p-0 text-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">News & Events</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Sponsors</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Datahub</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">About</a></li>
            </ul>
        </div>
        <div className="col-6 col-md-2 mb-2">
            <h5 className="text-light">Licensing</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Bootstrap</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            </ul>
        </div>
        <div className="col-6 col-md-2 mb-2">
            <h5 className="text-light">Contacts</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Email</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Etc.</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary ">Etc.</a></li>
            </ul>
        </div>

    
        <div className="col-6 col-md-4 mb-3"></div>
        {/* Loras Crest*/}
        <div className="col-6 col-md-2 mb-3">
            <Image
            src="/lorasCrest.png"
            alt="Loras Crest"
            width={150}
            height={150}
            className="mx-3"
            />
        </div>

        </div>
        {/*This is where we modify links to social media sites currently display Twitter, Insta, and Facebook*/}
        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
        <p className="text-light">© 2024 Loras College Baja. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
            <li>
            <h4 className="mt-1 text-light">Follow Us:</h4> 
            </li>
            <li className="ms-3">
                <a className="link-body-emphasis text-light " href="#">
                <i className="bi bi-twitter-x icon-size" ></i>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-body-emphasis text-light" href="#">
                <i className="bi bi-instagram icon-size"></i>
                </a>
            </li>
            <li className="ms-3">
                <a className="link-body-emphasis text-light" href="#">
                <i className="bi bi-facebook icon-size"></i>
                </a>
            </li>
        </ul>
        </div>
    </footer>
    </div>
</div>
    );
}

// 
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav 
                style={{backgroundColor:"#050707"}}
            className="navbar navbar-expand-lg">
                    <img src="https://firebasestorage.googleapis.com/v0/b/links-ce8df.appspot.com/o/logos%2Flogo.png?alt=media&token=4c0aff7a-73f9-46c5-ac7c-fdf89bba1c08"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <span className="sr-only"></span></a>
                        </li>
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button 
                                style={{
                                    backgroundColor:"#feb916"
                                }}
                            className="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

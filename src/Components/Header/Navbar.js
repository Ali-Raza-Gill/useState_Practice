import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <Link to='/' class="navbar-brand">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link active" aria-current="page">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' class="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='add' class="nav-link active" aria-current="page">Add</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='update' class="nav-link active" aria-current="page">Update</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='remove' class="nav-link active" aria-current="page">Remove</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='edit' class="nav-link active" aria-current="page">Edit</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login' class="nav-link active" aria-current="page">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login' class="nav-link active" aria-current="page">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login' class="nav-link active" aria-current="page">ResetPassword</Link>
                        </li>


                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

import React, { useState } from 'react';

function Navbar({ setCategory, setSearchQuery, setSortOrder }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(searchTerm);
    };

    const handleSort = (order) => {
        setSortOrder(order);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('general')}>General</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('technology')}>Technology</div>
                        </li>
                    </ul>
                    <button 
                        className="btn btn-outline-success me-2" 
                        type="button" 
                        onClick={() => handleSort('asc')}
                    >
                        Ascending
                    </button>
                    <button 
                        className="btn btn-outline-success me-2" 
                        type="button" 
                        onClick={() => handleSort('desc')}
                    >
                        Descending
                    </button>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}  
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

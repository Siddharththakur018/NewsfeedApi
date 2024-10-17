import React from 'react';

function NewsItems({ title, description, url, src }) {
    const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image+Available";

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px' }}>
            <img src={src || placeholderImage} style={{ height: '200px', width: '300px' }} className="card-img-top" alt="News" />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 50) + '...' : 'No Title'}</h5>
                <p className="card-text">{description ? description.slice(0, 90) + '...' : 'Description not available'}</p>
                <a href={url || '#'} className="btn btn-primary" target='_blank'>Read More</a>
            </div>
        </div>
    );
}

export default NewsItems;

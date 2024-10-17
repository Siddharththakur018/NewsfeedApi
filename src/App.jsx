import React, { useState } from 'react';

import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

function App() {
    const [category, setCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('publishedAt');

    return (
        <div>
            <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} setSortOrder={setSortOrder}/>
            <NewsBoard category={category} searchQuery={searchQuery} sortOrder={sortOrder}/>
        </div>
    );
}

export default App;

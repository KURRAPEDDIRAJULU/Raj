import React, { useState } from 'react';
import './index.css'

function DestinationSearch({ destinationsList }) {
  const [searchInput, setSearchInput] = useState('');
  
  const filteredDestinations = destinationsList.filter((destination) =>
    destination.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="destination-search">
      <h1>DestinationSearch</h1>
    <div className="search-input-containerd">
      <input
        type="text"
        placeholder="Search destinations"
        value={searchInput}
        onChange={onSearchInputChange }
        className="search-input"
      />
      </div>
      <ul className="destinations-listd">
        {filteredDestinations.map((destination) => (
          <li key={destination.id} className="destination-item">
            <img src={destination.imgUrl} alt={destination.name} className="destination-image" />
            <p className="named">{destination.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationSearch;

import React, { useState } from 'react';
import './index.css'

function BrowserHistory({ initialHistoryList }) {
  const [searchInput, setSearchInput] = useState('');
  const [historyList, setHistoryList] = useState(initialHistoryList);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [emptyHistory, setEmptyHistory] = useState("There is no history to show");


  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);


    const filteredItems = historyList.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    setFilteredHistory(filteredItems);
    setEmptyHistory(filteredItems.length === 0);
  };


  const handleDeleteItem = (id) => {
    const updatedHistory = historyList.filter((item) => item.id !== id);
    setHistoryList(updatedHistory);


    const updatedFilteredHistory = filteredHistory.filter((item) => item.id !== id);
    setFilteredHistory(updatedFilteredHistory);
    setEmptyHistory(updatedFilteredHistory.length === 0);
  };

  return (

    <div className="browser-history-bg-container">
      <div className="header-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="search-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search history"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      {filteredHistory.length === 0 ? (
        <p className="no-history">{emptyHistory}</p>
      ) : (
        <ul className="history-container">
          {filteredHistory.map((item) => (
            <li key={item.id} className="history">
              <p className="time-stamp">{item.timeAccessed}</p>
              <div className="domain-details-container">
                <div className="domain-details">
                  <img src={item.logoUrl} alt="domain logo" className="domain-logo" />
                  <p className="title">{item.title}</p>
                  <p className="domain-url">{item.domainUrl}</p>
                </div>
                <button
                  testId="delete"
                  type="button"
                  className="delete-button"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>


  );
}

export default BrowserHistory;
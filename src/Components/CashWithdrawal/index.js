import React, { useState } from 'react';
import './index.css'

function CashWithdrawal({ denominationsList }) {
  const [num, setNum] = useState(2000);

  
  const onClick = (value) => {
    if (num >= value) {
      const updatedNum = num - value;
      setNum(updatedNum);
    } 
    
  };

  return (
    <div className="main-container">
        <div className="inner-container">
          <div className="heading-container">
            <div className="para-div">
              <p className="s">P</p>
            </div>
            <p className="name-para">Raju Yadav</p>
          </div>
          <div className="money-container">
            <p className="balance-name">Your Balance</p>
            <div className="balance-holder">
              <p className="amount">{num}</p>
            </div>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>

          <ul className="items-holder">
          {denominationsList.map((denomination) => (
          <li key={denomination.id}>
            <button
              type="button"
              className="button"
              onClick={() => onClick(denomination.value)}
            >
              {denomination.value} Rupees
            </button>
          </li>
        ))}
          </ul>
        </div>
      </div>
  );





}

export default CashWithdrawal;

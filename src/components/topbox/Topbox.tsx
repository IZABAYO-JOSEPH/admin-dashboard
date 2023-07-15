import React from 'react'
import"./TopBox.scss";
import { topDealUsers } from '../../data'
const TopBox = () => {
  return (
    <div className='topBox'>
      <h3>Top Deals</h3>
      <div className="list">
        {topDealUsers.map((user)=> (
        <div className="listItem" key={user.id}>
      <div className="userSection">
      <img src={user.img} alt="image" />
      <div className="userTexts">
        <span className='username'>{user.username}</span>
         <span className="email">{user.email}</span>
      </div>
      </div>
      <span className='amount'>${user.amount}</span>

        </div>
        )
        )}
      </div>
    </div>
  )
}

export default TopBox
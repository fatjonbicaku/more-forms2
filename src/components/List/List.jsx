import React, { useState } from 'react'
import style from './List.module.css'


function List({ users, setUsers }) {

  const deleteUser = (index) => {
    const newUsers = users.filter((item, i) => i !== index);
    setUsers(newUsers);
  };



  return (


    <ul className={style.li}>


      {

        users.map((item, index) =>


          <div className={style.listItems}>
            <li key={index}>  firstName: {item.firstName} email: {item.email} </li>
            <button className={style.btn} onClick={() => deleteUser(index)}>Delete</button></div>
        )
      }
    </ul>
  )
}

export default List

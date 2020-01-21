import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Magic the Gathering mana symbols</h1></center>
          <center>
          {contacts.map((contact) => (
            <img src={contact.url} alt="mana symbol" />
          ))}
          </center>
        </div>
      )
    };

    export default Contacts
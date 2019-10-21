import React from "react";

// import the Contact component
import SingleCompany from "./SingleCompany";


function ContactList(props) {
  return (
    <div>
      {props.contacts.map(c => <SingleCompany key={c.id} name={c.name} />)}
     </div> 
  ); 
} 

export default ContactList;
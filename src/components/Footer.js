import React from 'react';
import footerContacts from '../data/footerContacts.json'
function Footer () {
    
    const footerContactsList= footerContacts.contacts.map((footerContact)=>(
        <li key={footerContact.id}>
            <a href={footerContact.contactUrl}>
                    <img src={footerContact.contactImgUrl} alt=" logo"/>
             </a>
        </li>
    ))
        return (
        <footer>
            <div className="company">
                <div>Swiggy</div>
            </div>
            <div className="copyright">
                <p>© 2022 Swiggy</p>
            </div>
            <div >
                <ul className="contacts">
                    {footerContactsList}
                </ul>
            </div>
      </footer>
        );
    }

 
export default Footer;

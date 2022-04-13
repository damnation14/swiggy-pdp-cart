import React from 'react';
import footerContacts from '../../../mocks/footerContacts.json'
import styles from './footer.module.css'
import FooterContactLogo from '../../atoms/LinkWithImage/LinkWithImage.js'
function Footer () {
    
    const footerContactsList= footerContacts.contacts.map((footerContact)=>(
        <FooterContactLogo key={footerContact.id} contactUrl={footerContact.contactUrl} imgUrl={footerContact.contactImgUrl} imgAlt="fblogo"/>
    ))
        return (
        <footer className={styles.footer}>
            <div className="company">
                <div>Swiggy</div>
            </div>
            <div className="copyright">
                <p>© 2022 Swiggy</p>
            </div>
            <div >
                <ul className={styles.contacts}>
                    {footerContactsList}
                </ul>
            </div>
      </footer>
        );
    }

 
export default Footer;
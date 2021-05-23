import Element from '../util/ElementFactory.js';

import address from '../../../../static/images/icons/address.svg';
import phone from '../../../../static/images/icons/phone.svg';
import email from '../../../../static/images/icons/email.svg';


const contactsObject = ()=> {
    return {
        address : {
            src: address,
            title : 'Address',
            text: '123, Fake Street'
         },
         phone:{
             src: phone,
             title: 'Phone',
             text: '+1 123-456-7890'
         },
         email:{
             src: email,
             title: 'E-mail',
             text: 'fake@email.com'
         }
     }
 }


const createContactElement = ({src, title, text}) =>{
        
    const contact = Element({
        elementType: 'div',
        elementClass:'contact__item'
    });

    const contactSubItem = Element({
        elementType: 'div',
        elementClass: 'contact__subitem'
    });
    
    const contactSubItemIcon = Element({
        elementType: 'img',
        elementClass: 'contact__icon',
        elementSource: src
    });
    
    const contactSubItemTitle = Element({
        elementType: 'h4',
        elementClass: 'contact__subtitle',
        elementContent: title
    });


    const contactText = Element({
        elementType: 'p',
        elementClass: 'contact__text',
        elementContent: text
    });

    contactSubItem.appendChild(contactSubItemIcon);
    contactSubItem.appendChild(contactSubItemTitle);

    contact.appendChild(contactSubItem);
    contact.appendChild(contactText);
    
    return contact;
}



const createContacts = () =>{

    const fragment = document.createDocumentFragment();

    const contacts = contactsObject();
    
    const contactsEntries = Object.entries(contacts)
    
    
    contactsEntries.map(contactsEntry => fragment.appendChild(createContactElement(
        {
            src: contactsEntry[1].src,
            title: contactsEntry[1].title,
            text: contactsEntry[1].text
        })));                     
    
    return fragment;
}


const contact = () =>{
    
    const main = Element({
        elementType: 'main',
        elementClass: 'main-contact',
    });

    const contact = Element({
        elementType: 'div',
        elementClass: 'contact'
    });

    const contactTitle = Element({
        elementType: 'h2',
        elementClass: 'contact__title',
        elementContent: 'Contact Info'
    });

    const createdContacts = createContacts();

    contact.appendChild(contactTitle);
    contact.appendChild(createdContacts);
    
    main.appendChild(contact);

    return main;
}

export default contact;
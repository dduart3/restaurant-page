import '../css/reset.css';
import '../css/style.css';
import '../css/splide.min.css';
import header from './modules/components/header'
import {home, mountSliders } from './modules/views/home';
import menu from './modules/views/menu';
import contact from './modules/views/contact';

const displayController = (()=>{

    const elements = () =>{
        const content = document.querySelector('#content');
    
        const title = document.querySelector('.title__text');
        
        
        const homeItem = document.querySelector('#home');
        const menuItem = document.querySelector('#menu');
        const menuButton = document.querySelector('.button');
        const contactItem = document.querySelector('#contact');

        return{
            content,
            title,
            homeItem,
            menuItem,
            menuButton,
            contactItem
        }
    };
    
    const getActualSection = ()=>{
        return elements().content.lastChild;
    };

    const isActualSectionHeader = (actualSection)=>{
        return actualSection.id == 'header';
    };

    const renderHeader = ()=>{
      elements().content.appendChild(header());  
    };

    const updateHeaderTitle = (newTitle) =>{
        elements().title.textContent = newTitle;
    };
    

    const renderSection = ({section, title}) =>{
        let actualSection = getActualSection();
        
        
        if(isActualSectionHeader(actualSection)){
            
            //Append

            elements().content.appendChild(section);  
            
        }else{
            
            //Replace

            elements().content.replaceChild(section, actualSection);
        };
        
        updateHeaderTitle(title);
    };


    //Init with home section
    const init = () =>{
        renderHeader();
        
        renderSection({
            title: 'Home',
            section: home()
        });
    }

    init();

    
    return {renderSection, elements}
    
})();

const elements = displayController.elements();

const renderSection = displayController.renderSection;



const homeItem = elements.homeItem;

const menuItem = elements.menuItem;
const menuButton = elements.menuButton;

const contactItem = elements.contactItem;


homeItem.addEventListener('click', (e)=>{
    e.preventDefault();

    renderSection({
        section: home(),
        title: 'Home'
    });

    mountSliders();

});


menuItem.addEventListener('click', (e)=>{
    e.preventDefault();

    renderSection({
        section: menu(),
        title: 'Menu'
    });
});


menuButton.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target)

    renderSection({
        section: menu(),
        title: 'Menu'
    });
});


contactItem.addEventListener('click', (e)=>{
    e.preventDefault();

    renderSection({
        section: contact(),
        title: 'Contact'
    });
});


















//content.appendChild(contact())
//content.appendChild(menu())

//content.appendChild(home())


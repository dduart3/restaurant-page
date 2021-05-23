import Element from '../util/ElementFactory.js';

//Images
import bollito_pelon from '../../../../static/images/food/bollito_pelon.jpeg';
import cachapa from '../../../../static/images/food/cachapa.jpeg';
import empanada from '../../../../static/images/food/empanada.jpeg';
import hallaca from '../../../../static/images/food/hallaca.jpeg';
import pabellon from '../../../../static/images/food/pabellon.jpeg';
import pastelitos from '../../../../static/images/food/pastelito.jpeg';
import patacon from '../../../../static/images/food/patacon.jpeg';
import tequeno from '../../../../static/images/food/tequeno.jpeg';


const cardsObject = ()=> {
   return {
       bollito : {
           src: bollito_pelon,
           title : 'Bollitos Pelones'
        },
        cachapa:{
            src: cachapa,
            title: 'Cachapas'
        },
        empanadas:{
            src: empanada,
            title: 'Empanadas'
        },
        hallaca:{
            src: hallaca,
            title: 'Hallacas'
        },
        pabellon:{
            src: pabellon,
            title: 'Pabellon'
        },
        pastelitos:{
            src: pastelitos,
            title: 'Pastelitos'
        },
        patacon:{
            src: patacon,
            title: 'Patacon'
        },
        tequenos:{
            src: tequeno,
            title: 'Tequeños'
        }
    }
}


const createCardElement = ({src, title}) =>{
        
    const card = Element({
        elementType: 'div',
        elementClass:'card'
    });
    
    const cardImage = Element({
        elementType: 'img',
        elementClass: 'card__image',
        elementSource: src
    });
    
    const cardTitle = Element({
        elementType: 'h3',
        elementClass: 'card__title',
        elementContent: title
    })

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    
    
    return card;
}


const createCards = () =>{

    const fragment = document.createDocumentFragment();

    const cards = cardsObject();
    
    const cardsEntries = Object.entries(cards)
    
    
    cardsEntries.map(cardsEntry => fragment.appendChild(createCardElement(
        {
            src: cardsEntry[1].src,
            title: cardsEntry[1].title
        })));                     
    
    return fragment;
}



const menu = ()=>{
    const main = Element({
        elementType: 'main',
        elementClass: 'main-menu'
    });

    const mainTitle = Element({
        elementType: 'h2',
        elementClass: 'main-menu__title',
        elementContent: 'Enjoy the real food mamagüevo'
    });

    const cards = Element({
        elementType: 'div',
        elementClass: 'cards'
    });

    const createdCards = createCards();

    cards.appendChild(createdCards);

    main.appendChild(mainTitle);
    main.appendChild(cards);

    return main
}

export default menu;
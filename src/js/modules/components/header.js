import Element from '../util/ElementFactory'

const header = () =>{

const header = Element({
    elementType: 'header',
    elementClass: 'header',
    elementId: 'header'
});

const navBar = Element({
    elementType: 'nav',
    elementClass: 'navbar'
});

const logo = Element({
    elementType: 'div',
    elementClass: 'logo',
    elementContent: 'Logo'
});

const navbarList = Element({
    elementType:'ul',
    elementClass: 'navbar-list'
});


const navbarListHomeItem = Element({
    elementType: 'li',
    elementClass: 'navbar-list__item',
    elementId: 'home'
});

navbarListHomeItem.appendChild(Element({
    elementType: 'a',
    elementContent:'Home'
}));


const navbarListMenuItem = Element({
    elementType: 'li',
    elementClass: 'navbar-list__item',
    elementId: 'menu'
});

navbarListMenuItem.appendChild(Element({
    elementType: 'a',
    elementContent:'Menu'
}));

const navbarListContactItem = Element({
    elementType: 'li',
    elementClass: 'navbar-list__item',
    elementId: 'contact'
});

navbarListContactItem.appendChild(Element({
    elementType: 'a',
    elementContent:"Contact us"
}));

const navbarListItems = document.createDocumentFragment();

navbarListItems.appendChild(navbarListHomeItem);
navbarListItems.appendChild(navbarListMenuItem);
navbarListItems.appendChild(navbarListContactItem);


const title = Element({
    elementType: 'div',
    elementClass: 'title'
});

const titleText = Element({
    elementType: 'h1',
    elementClass: 'title__text',
    elementContent: "Home"
});


title.appendChild(titleText);

navbarList.appendChild(navbarListItems);

navBar.appendChild(logo);

navBar.appendChild(navbarList);

header.appendChild(navBar);

header.appendChild(title);


return header;
}

export default header;


  
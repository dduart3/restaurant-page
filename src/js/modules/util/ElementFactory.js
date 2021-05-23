const Element = ({elementType, elementClass, elementContent, elementSource, elementHref, elementId}) =>{
    
   const addClasses = (classes) =>{
       classes.split(',').map(el => element.classList.add(el))
    }


    const element = document.createElement(elementType);

    if(elementClass){
        addClasses(elementClass)
    }
    
    if(elementContent){
        element.textContent = elementContent;
    }
            
    if(elementSource){
        element.setAttribute('src', elementSource)
    }

    if(elementHref){
        element.setAttribute('href', elementHref);
    }

    if(elementId){
        element.id = elementId;
    }
    
    return element;
}

export default Element;
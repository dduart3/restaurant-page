import Element from '../util/ElementFactory';

import pabellon from '../../../../static/images/food/pabellon.jpeg';

import pastelito from '../../../../static/images/food/pastelito.jpeg';

import patacon from '../../../../static/images/food/patacon.jpeg';

import tequeno from '../../../../static/images/food/tequeno.jpeg';


const sliderTwo = ()=> {

    const slider = Element({
        elementType: 'div',
        elementClass: 'splide',
        elementId: 'image-slider-1'
    });
    
    const sliderSplideTrack = Element({
        elementType: 'div',
        elementClass: 'splide__track'
    });
    
    const sliderSplideList = Element({
        elementType: 'ul',
        elementClass: 'splide__list'
    });
    
    

    const sliderFirstSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderFirstSlide.appendChild(Element({
        elementType:'img',
        elementSource: pabellon
    }));
    
    
    
    const sliderSecondSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderSecondSlide.appendChild(Element({
        elementType:'img',
        elementSource: pastelito
    }));
    

    
    const sliderThirdSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderThirdSlide.appendChild(Element({
        elementType:'img',
        elementSource: patacon
    }));
    
    

    const sliderFourthSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderFourthSlide.appendChild(Element({
        elementType:'img',
        elementSource: tequeno
    }));


    const sliderSlides = document.createDocumentFragment();

    sliderSlides.appendChild(sliderFirstSlide);
    sliderSlides.appendChild(sliderSecondSlide);
    sliderSlides.appendChild(sliderThirdSlide);
    sliderSlides.appendChild(sliderFourthSlide);

    
    sliderSplideList.appendChild(sliderSlides);

    sliderSplideTrack.appendChild(sliderSplideList);

    slider.appendChild(sliderSplideTrack);

    return slider;
}

export default sliderTwo;
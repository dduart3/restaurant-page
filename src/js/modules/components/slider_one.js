import Element from '../util/ElementFactory';

import bollito_pelon from '../../../../static/images/food/bollito_pelon.jpeg';

import cachapa from '../../../../static/images/food/cachapa.jpeg';

import empanada from '../../../../static/images/food/empanada.jpeg';

import hallaca from '../../../../static/images/food/hallaca.jpeg';


const sliderOne = ()=>{

    const slider = Element({
        elementType: 'div',
        elementClass: 'splide',
        elementId: 'image-slider'
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
        elementSource: bollito_pelon
    }));
    
    
    
    const sliderSecondSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderSecondSlide.appendChild(Element({
        elementType:'img',
        elementSource: cachapa
    }));
    
    
    const sliderThirdSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderThirdSlide.appendChild(Element({
        elementType:'img',
        elementSource: empanada
    }));
    
    
    
    const sliderFourthSlide = Element({
        elementType: 'li',
        elementClass: 'splide__slide',
    });
    
    sliderFourthSlide.appendChild(Element({
        elementType:'img',
        elementSource: hallaca
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

export default sliderOne;

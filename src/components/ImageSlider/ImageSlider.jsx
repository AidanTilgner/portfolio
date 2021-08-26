//modules
import React, { useState } from 'react'

//components
import ImageSliderArrow from '../../assets/Icons/SliderArrow.svg'

//files
import './ImageSlider.scss'

function ImageSlider({ images }) {
    const [image, setimage] = useState(0)

    return (
        <div className="image-slider">
            <img src={images[image]} alt="Carousel Image" className="image-slider__image"/>
            <img src={ImageSliderArrow} alt="" className="image-slider__arrow image-slider__arrow-1" 
                onClick={e => {
                    e.preventDefault()
                    if(image <= 0){
                        setimage(images.length - 1)
                    }else{
                        setimage(image - 1)
                    }
                    console.log(image)
                }}
            />
            <img src={ImageSliderArrow} alt="" className="image-slider__arrow image-slider__arrow-2" 
                onClick={e => {
                    e.preventDefault()
                    if(image >= (images.length - 1)){
                        setimage(0)
                    }else{
                        setimage(image + 1)
                    }
                    console.log(image)
                }}
            />
        </div>
    )
}

export default ImageSlider

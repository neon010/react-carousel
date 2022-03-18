import React,{useState} from "react";

export interface CarouselProps{
    images: string[];
    width: number;
    height:number;
    showDots?:boolean,
    currentImageDotsColor?:string,
    otherDotColor?:string,
    arrowStyle:{},
    leftArrowLabel:any,
    rightArrowLabel:any,
    showCurrentSlideNumber?:boolean
}

const Carousel = ({
    images, 
    width, 
    height, 
    showDots=true, 
    currentImageDotsColor="#1e293b",
    otherDotColor="#e5e7eb",
    arrowStyle={},
    leftArrowLabel,
    rightArrowLabel,
    showCurrentSlideNumber=true
}:CarouselProps)=>{
    const [currentSlide,setCurrentSlide] = useState(0);

    return (
        <div 
        style={{
            width:width, 
            height:height,
            position:'relative'
        }}>
            <img 
                src={images[currentSlide]} 
                alt="ca" 
                style={{objectFit:'cover'}}
                width={width}
                height={height}
            />
            <button 
                style={{
                    position:'absolute',
                    top:"40%",
                    left:"5px",
                    ...arrowStyle
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
                    if(currentSlide === 0){
                        setCurrentSlide(images.length-1)
                    }else{
                        setCurrentSlide(currentSlide-1)
                    }
                }}
            >
                {leftArrowLabel}
            </button>
            <button
                style={{
                    position:'absolute',
                    top:"40%",
                    right:"5px",
                    ...arrowStyle
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
                    if(currentSlide < images.length-1){
                        setCurrentSlide(currentSlide+1)
                    }else{
                        setCurrentSlide(0)
                    }
                }}
            >
                {rightArrowLabel}
            </button>
            {
                showCurrentSlideNumber && (
                    <div 
                    style={{position:"absolute", top:"5px", right:"10px", background:"#1e293b",width:'35px',height:'20px', borderRadius:"10px"}}
                    >
                        <p style={{fontSize:"12px", color:"#fff", margin:0, padding:0}}>{currentSlide+1}/{images.length}</p>
                    </div>
                )
            }
            {
                showDots && (
                    <div 
                    style={{
                        position:'absolute',
                        bottom:"1%",
                        left:"40%"
                    }}
                    >
                        {
                            images.map((item:any,index:number)=>{
                                return <button
                                key={Math.random().toString()} 
                                style={{
                                    width:'6px',
                                    height:'6px',
                                    borderRadius:"50%",
                                    marginRight:"10px",
                                    background: index === currentSlide ? currentImageDotsColor: otherDotColor,
                                    border: 'none'
                                }}
                                onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                                    setCurrentSlide(index)
                                }}
                                ></button>
                            })
                        }
                    </div>
                )
            }
        </div>
    )

}

export default Carousel
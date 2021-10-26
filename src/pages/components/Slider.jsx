import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { sliderItems } from '../data';
import { useState } from 'react';

const Slider = () => {
    
    const[slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        }else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }

    };

 
    return (
       <Container>
           <Arrow direction="left" onClick={()=>handleClick("left")}>
               <ArrowLeftOutlined/>
           </Arrow>
           <Wrapper slideIndex={slideIndex}>
               {sliderItems.map(item=>(
               <Slide bg= {item.bg}>
                   <Circle />
                    <ImgContainer>
                    <Image src={item.img} key={item.id} slideIndex={slideIndex}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
               ))}
           </Wrapper>
           <Arrow direction="right" onClick={()=>handleClick("right")}>
               <ArrowRightOutlined/>
           </Arrow>
       </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top:15px;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${(props)=>props.bg};
    position: relative;
`;

const Circle = styled.div`
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background-color: #0C797A;
    position: absolute;
    z-index: 0;
    margin:0px 0px 20px 40px;
`
const ImgContainer = styled.div`
    display: flex;
    align-items: center; 
    height: 100%;
    flex:1;
`;

const Image = styled.img`
    margin-left: ${props => props.slideIndex === 0 ?  100 : 0}px;
    height: 80%;
    z-index: 2;
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 50px 50px 50px 25px;
    
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;

`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  font-weight: 800;

`;

export default Slider

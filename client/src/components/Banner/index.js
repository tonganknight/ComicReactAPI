import React from "react";
import styled from 'styled-components'
import { Breakpoint } from "react-socks";

function Banner(){

const TitleFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
height: 125px;
border-bottom solid Black;
`
const Hero = styled.div`
background-position: 50%;
background-image: url("https://static.comicvine.com/uploads/original/11119/111192250/4118336-7614147183-The_M.png");
background-size: cover;
height: 300px;
border-bottom solid Black;
`
const Title = styled.div`
font-size: 50px;
font-weight: bold;
margin-left: 33%
`
const DarkmodeButton = styled.button`
margin-top: 20px;
margin-bottom-15px;
background-color: Transparent;
height: 50px;
width: 200px;
color: black;
border-radius: 17px;
font-weight: bold;
`







    return(
<div>
    <Breakpoint large up>
        <TitleFlex>
            <DarkmodeButton>Darkmode</DarkmodeButton>
            <Title>Comic Portal</Title>
        </TitleFlex>
            <Hero></Hero>
    </Breakpoint>
    
    
    </div>   
    )
}

export default Banner; 
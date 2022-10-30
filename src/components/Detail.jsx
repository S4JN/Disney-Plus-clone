import React from 'react'
import styled from 'styled-components'


function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' />
            </Background>
            <ImageTitle>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 • 7m • Family, Fantasy, Animation
            </SubTitle>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(180vh -70 px);
    padding : 0 calc(3.5vw -5px);
    position: relative;
    margin-left: 50px;
    margin-right: 5px;

`
const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;
    img{
        width:100%;
        height: 100%;
        object-fit: cover;

    }

`
const ImageTitle = styled.div`
    height: 20vh;
    width: 15vw;
    min-width: 250px;
    min-height: 250px;
    padding-top: 50px;
    padding-bottom: 20px;
    margin-top:20px;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;

        }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    

`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:14px;
    display: flex;
    align-items: center;
    height: 50px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer; 

        &:hover{
            background: rgb(198,198,198);
        }

`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0,0, 0.3);
    border: 1px solid rgb(249,249, 249);
    color: rgb(249,249,249);
    text-transform: uppercase;

`
const AddButton = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color:rgba(0, 0, 0, 0.6);
    cursor: pointer; 
    

    span{
        font-size: 30px;
    }

`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
    cursor: pointer; 

`
const SubTitle=styled.div`
    color: rgb(249,249,249);
    font-size: 14px;
    margin-top: 25px;
`
const Description=styled.div`
    line-height: 1.4;
    font-size: 18px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;

`
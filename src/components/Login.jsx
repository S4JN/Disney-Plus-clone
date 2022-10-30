import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>

            <CTA>

                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUP>GET ALL THERE</SignUP>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />

            </CTA>

        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
 
    &:before {
        background: url("/images/login-background.jpg") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
  }

`


const CTA = styled.div`
    max-width: 650px;
    padding: 88px 40px; 
    width: 80%;
    display:flex;
    flex-direction: column;
    align-item:center;

`
const CTALogoOne = styled.img`

`
const SignUP = styled.a`
    width:100%;
    background: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top:8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }
`

const Description= styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const CTALogoTwo= styled.img`
    
`
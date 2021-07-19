import React from 'react'
import styled from 'styled-components'
import CheckoutDetails from './Checkout/CheckoutDetails'
import CheckoutItems from './Checkout/CheckoutItems'

const CheckoutContent = () => {
    return (
        <Wrapper>
            <CheckoutDetails/>
            <CheckoutItems/>
        </Wrapper>
    )
}

const Wrapper = styled.main`
padding: 50px;
background-color: rgb(243, 243, 243);
display: flex;
flex-direction: column;
gap: 1rem;

`

export default CheckoutContent

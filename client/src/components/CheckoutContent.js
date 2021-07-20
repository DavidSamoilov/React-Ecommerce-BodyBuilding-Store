import React from 'react'
import styled from 'styled-components'
import CheckoutDetails from './Checkout/CheckoutDetails'
import CheckoutItems from './Checkout/CheckoutItems'

const CheckoutContent = () => {
    return (
        <Wrapper>
            <CheckoutItems/>
            <CheckoutDetails/>
        </Wrapper>
    )
}

const Wrapper = styled.main`
display: flex;
gap:2rem;

@media (max-width:1200px){
    flex-direction: column-reverse;
}
`

export default CheckoutContent

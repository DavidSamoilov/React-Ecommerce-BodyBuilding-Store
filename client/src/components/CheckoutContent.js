import React from 'react'
import styled from 'styled-components'
import CheckoutDetails from './Checkout/CheckoutDetails'
import CheckoutItems from './Checkout/CheckoutItems'

const CheckoutContent = () => {
    return (
        <div>
            <CheckoutDetails/>
            <CheckoutItems/>
        </div>
    )
}

const Wrapper = styled.main`
`

export default CheckoutContent

import React from 'react'
import styled from 'styled-components';
import { useCartContext } from '../../context/cart_context';
import CheckoutSingleItem from "./CheckoutSingleItem"
const CheckoutItems = () => {
    const { cart } = useCartContext();
    return (
        <Wrapper>
            {cart.map((product) => {
                return <CheckoutSingleItem key={product.id} product={product}/>
            })}
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
`

export default CheckoutItems

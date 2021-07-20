import React from 'react'
import styled from 'styled-components'
import Confirmation from '../components/Order/Confirmation'

const OrderPage = () => {
    return (
        <Wrapper className="page-100">
            <Confirmation/>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
`
export default OrderPage

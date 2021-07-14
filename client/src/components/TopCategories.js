import React from 'react'
import styled from 'styled-components'
import { homepage_categories as categories} from '../utils/constants'
import Category from "./Category"
const TopCategories = () => {
    return (
        <Wrapper className="section">
            {categories.map(category => {
                return <Category key={category.id} {...category}>1</Category>
            })}
        </Wrapper>
    )
}
const Wrapper = styled.section`

`
export default TopCategories

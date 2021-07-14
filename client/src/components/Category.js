import React from 'react'
import styled from 'styled-components'

const Category = ({image,name}) => {
    return (
        <Wrapper>
              <div  className="product-card">
                  <img src={image}></img>
              </div>
              <div>
                  {name}
              </div>
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    height: 100px;
    
    
`

export default Category

import React from 'react'
import styled from 'styled-components'
const Category = ({image,name}) => {
    // #TODO Add this images to database to avoid hard coded array
    const images = {}
    return (
        <Wrapper>
              <div class="">
          <div class="">
            <img src="//images.ctfassets.net/zfz8lw2kfnpv/66tQk54dfG09nuHzZC8BK2/e4bce43f369888ea4eef941f3e30f559/ezgif.com-webp-to-jpg__10_.jpg"></img>
          </div>

          <div class="shopby-content">
            <h2 class="shopby-title">Men </h2>
          </div>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    height: 100px;
    
    
`

export default Category

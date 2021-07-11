import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHero = ({title}) => {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>
                    <Link to="/">
                            Home
                    </Link>/ {title}
                </h3>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

`

export default PageHero

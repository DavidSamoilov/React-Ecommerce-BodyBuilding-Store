import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: black;
  background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%, #b82e1f 74%);

  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  /* color: var(--clr-primary-1); */
  color: #532020;
  a {
    /* color: var(--clr-primary-3); */
    color: black;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
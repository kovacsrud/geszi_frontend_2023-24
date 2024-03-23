import React from 'react'
import Image from './Image'
import { UserProvider } from '../context/UserContext'
import { ImageProvider } from '../context/ImageContext'

const path="valami";
const image={
  imageName:"valami.jpg",
  _id:1

}

describe('<Image />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
    <UserProvider>
      <ImageProvider>
    <Image path={path} image={image}/>
    </ImageProvider>
    </UserProvider>  
    )
  })
})
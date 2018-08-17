/* global */

import * as React from 'react'
import { compose } from 'recompose'

import {
  Main,
  Pad
} from './styles'

const enhance = compose()

const Category = enhance(props => {
  const { category } = props
  const { name, color } = category
  console.log(category)
  return (
    <Main style={{backgroundColor:'#'+color}}>
      <Pad >{name}</Pad>
    </Main>
  )
})

export default Category

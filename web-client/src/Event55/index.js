/* global */

import * as React from 'react'
import { compose } from 'recompose'

import {
  Main,
  Pad
} from './styles'

const parseDate = (dateNumber) => {
  const date = new Date(dateNumber)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const monthStr = month < 10 ? '0' + month : '' + month
  const day = date.getDate()
  const dayStr = day < 10 ? '0' + day : '' + day
  const hours = date.getHours()
  const hoursStr = hours < 10 ? '0' + hours : '' + hours
  const minutes = date.getMinutes()
  const minutesStr = minutes < 10 ? '0' + minutes : '' + minutes

  return year + '/' + monthStr + '/' + dayStr + ' ' + hoursStr + ':' + minutesStr
}

const enhance = compose()

const Event = enhance(props => {
  const { event } = props
  const { place, address, startDate, finishDate, isVirtual } = event
  console.log(event)
  return (
    <Main>
      <Pad>{place}</Pad>
      <br />
      <Pad>{address}</Pad>
      <br />
      <Pad>start: {parseDate(startDate)}</Pad>
      <Pad>End: {parseDate(finishDate)}</Pad>
      <Pad>{isVirtual}</Pad>
      <br />
      <Pad style={{color: '#' + event.category.color}}>{event.category.name}</Pad>
    </Main>
  )
})

export default Event

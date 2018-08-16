/* global */

import * as React from 'react'
import { compose } from 'recompose'

import {
  Main
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
  return (
    <Main>
      {place}
      {address}
      {parseDate(startDate)}
    </Main>
  )
})

export default Event

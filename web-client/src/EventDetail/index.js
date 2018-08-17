/* global */

import * as React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { withApollo } from 'react-apollo'

import {
  Main,
  InputContent,
  SelectItem,
  Form,
  SubmitButton,
  CancelButton
} from './styles'

const enhance = compose(
  withState('isLoading', 'setLoading', false),
  withState('place', 'setPlace', null),
  withState('address', 'setAddress', null),
  withState('startDate', 'setStartDate', null),
  withState('finishDate', 'setFinishDate', null),
  withState('isVirtual', 'setVirtual', false),
  withState('categoryId', 'setCategoryId', null),
  withApollo,
  withHandlers({
    submit: ({ setLoading, client, history }) => async () => {
      setLoading(true)
    },
    cancel: ({ setLoading, client, history }) => async () => {
      history.replace('home')
    }
  })
)

const EventDetail = enhance(({ isLoading, submit, cancel, categories, place, address, startDate, finishDate, isVirtual, categoryId }) => {
  return (
    <Main>
      <Form autocomplete='off' onSubmit={submit}>
        <InputContent
          type='text'
          name='place'
          placeholder='Lugar'
          value={place}
          required
          />
        <InputContent
          type='text'
          name='address'
          placeholder='Dirección'
          value={address}
          required
          />
        <InputContent
          type='date'
          name='startDate'
          placeholder='Inicio'
          value={startDate}
          required
          />
        <InputContent
          type='date'
          name='finishDate'
          placeholder='Fin'
          value={finishDate}
          required
          />
        <InputContent
          type='text'
          name='isVirtual'
          placeholder='EsVirtual'
          value={isVirtual}
          required
          />
        <SelectItem
          name='category'
          value={categoryId}
          required
        >
          { [{name: '2'}, {name: '44'}].map((name, id) => <option key={id} >{name.name}</option>) }
        </SelectItem>
        <SubmitButton type='submit' disabled={isLoading}
          onClick={(e) => {

          }}>
          Crear
        </SubmitButton>
        <CancelButton type='submit' disabled={isLoading}
          onClick={(e) => {
            e.preventDefault()
            cancel()
          }}>
          Cancelar
        </CancelButton>
      </Form>
    </Main>
  )
})

export default EventDetail

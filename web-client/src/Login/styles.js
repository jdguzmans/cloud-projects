
import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  background: green;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`

export const Form = styled.form.attrs({
  className: 'animated fadeInUp'
})`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  padding: 20px 30px;
  margin-top: 30px;
  width: 90%;
  max-width: 400px;
  border-radius: 5px;
`

export const Input = styled.input`
  && {
    background: white;
    min-height: 40px;
    border-radius: 4px;

    > div {
      &::after {
        background-color: green;
      }

      input {
        text-align: center;
        padding: 12px 30px;
        color: green;
        transition: all 0.3s;
      }
    }
  }
`

export const LoginButton = styled.button`
  background-color: blue;
  color: blue;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  &:hover {
    background-color: green;
  }
`

export const SignupButton = styled.button`
  background-color: red;
  color: blue;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  &:hover {
    background-color: green;
  }
`

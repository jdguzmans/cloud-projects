import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  background: #1a63ff;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`
export const FirstFormWrap = styled.div`
justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  transition: opacity 0.3s linear;
  display: none;
  opacity: 0;
  z-index: -1;
  min-width: auto;
  min-height: auto;
`
export const InputContent = styled.input`
  width: 85%;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  background: rgb(220, 220, 220);
  border: none;
  margin: 0.5rem 0;
  transition: all 0.3s;
  -webkit-appearance: none;
  `
export const SelectItem = styled.select`
  margin: 0;
  border-radius: 4px;
  background: transparent;
  color: #000;
  opacity: ${props => (props.focussing ? '1' : '0.5')};
  width: 100%;
  border: none;
  outline: none;
  display: inline-block;
  appearance: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    opacity: 1;
  }
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

export const SubmitButton = styled.button`
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

export const CancelButton = styled.button`
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

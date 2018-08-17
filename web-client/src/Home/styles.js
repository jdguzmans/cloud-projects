
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

export const Session = styled.button`
position: fixed;
top: 0;
left: 0;
z-index: 999;
width: 100%;
height: 23px;
color:white;
margin:20px
`
export const Button = styled.button`
  width:30px;
  height:30px;
  background-color:#5cd163;
  margin: 25px;
  padding:10px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  font-size:11px;
  line-height:32px;
  text-transform: uppercase;
  float:left;
  color:white;
  font-size:xx-large;
  text-align: center;
}
.boton:hover{
  opacity: 0.50;
  -moz-opacity: .50;
  filter:alpha (opacity=50);
}
`

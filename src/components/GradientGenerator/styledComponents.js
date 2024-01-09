import styled from 'styled-components'

export const UnOrderContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const GradientMainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 80vh;
  width: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Heading = styled.p`
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Label = styled.p`
  color: #ededed;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 10px;
  margin-top: 10px;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #1e293b;
  height: 24px;
  width: 70px;
  border-radius: 5px;
  border-width: 0px;
  margin-top: 10px;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const InputCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-between;
`

export const Input = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

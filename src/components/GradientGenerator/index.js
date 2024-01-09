import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  UnOrderContainer,
  GradientMainContainer,
  MainHeading,
  Heading,
  Label,
  GenerateButton,
  InputCard,
  InputCardContainer,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    left: '#8ae323',
    right: '#014f7b',
    activeId: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  onChangeColorLeft = event => {
    this.setState({left: event.target.value})
  }

  onChangeColorRight = event => {
    this.setState({right: event.target.value})
  }

  renderLeftColor = () => {
    const {left} = this.state
    return (
      <InputCard>
        <Label htmlFor="color">{left}</Label>
        <Input
          type="color"
          onChange={this.onChangeColorLeft}
          id="color"
          value={left}
        />
      </InputCard>
    )
  }

  renderRightColor = () => {
    const {right} = this.state
    return (
      <InputCard>
        <Label htmlFor="color">{right}</Label>
        <Input
          type="color"
          onChange={this.onChangeColorRight}
          id="color"
          value={right}
        />
      </InputCard>
    )
  }

  clickItem = tabValue => {
    this.setState({activeId: tabValue})
  }

  onClickBackground = () => {
    const {left, right, activeId} = this.state
    this.setState({gradientValue: `to ${activeId}, ${left}, ${right}`})
  }

  render() {
    const {activeId, gradientValue} = this.state
    return (
      <GradientMainContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Heading>Choose Direction</Heading>
        <UnOrderContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              directionDetails={eachItem}
              key={eachItem.directionId}
              clickItem={this.clickItem}
              isActive={eachItem.value === activeId}
            />
          ))}
        </UnOrderContainer>
        <Heading>Pick the Colors</Heading>
        <InputCardContainer>
          <div>{this.renderLeftColor()}</div>
          <div>{this.renderRightColor()}</div>
        </InputCardContainer>

        <GenerateButton type="button" onClick={this.onClickBackground}>
          Generate
        </GenerateButton>
      </GradientMainContainer>
    )
  }
}

export default GradientGenerator

import {ListCard, ListButton, ActiveButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, clickItem, isActive} = props
  const {displayText, value} = directionDetails

  const onClickListItem = () => {
    clickItem(value)
  }

  return (
    <ListCard>
      {isActive ? (
        <ActiveButton type="button" onClick={onClickListItem}>
          {displayText}
        </ActiveButton>
      ) : (
        <ListButton type="button" onClick={onClickListItem}>
          {displayText}
        </ListButton>
      )}
    </ListCard>
  )
}

export default GradientDirectionItem

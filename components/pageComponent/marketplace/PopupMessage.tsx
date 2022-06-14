import { Box, styled, Typography } from "@mui/material"
import { PRODUCT_DETAIL_ICON } from "../../../constants/marketplace"
import { Popup } from "../../popup"

interface IProps {
  title: string
  message?: string
  status: boolean
  handleToggleStatus: (status: boolean) => void
  titleCustomColor?: any
  titleButton: string
  popupType: 'success' | 'error'
}

export const PopupMessage: React.FC<IProps> = ({title, message, status, handleToggleStatus, titleCustomColor, titleButton, popupType}) => {
  const checkIcon = <TitleSuccess>
      <img src={PRODUCT_DETAIL_ICON.TICK} />
      {title}
    </TitleSuccess>
  
  return (
    <Popup status={status} handleToggle={() => handleToggleStatus(false)} 
      title={popupType === 'success' ? checkIcon : title} titleCustomStyle={titleCustomColor} titleButton={titleButton}
    >
      {message && <MessagePopup>{message}</MessagePopup>}
    </Popup>
  )
}

const MessagePopup = styled(Typography)({
  marginBottom: '24px',
  fontSize: '16px',
  fontWeight: '500',
  color: '#5A6178',
  textAlign: 'center'
})
const TitleSuccess = styled(Typography)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#31373E',
  fontSize: '24px',
  fontWeight: '500',
  '& img': {
    marginBottom: '21px',
  }
})
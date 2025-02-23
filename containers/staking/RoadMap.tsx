import { Box, BoxProps, Container, Stack, styled, Typography, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { ROAD_MAP, STAKING_ICON, STAKING_IMAGE } from "../../constants/staking"
import { TEXT_STYLE } from "../../styles/common/textStyles"
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export const RoadMap = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const isMobile991 = useMediaQuery('(max-width: 991px)');
  const isMobile767 = useMediaQuery('(max-width: 767px)')

  return (
    <Wrap>
      <Container sx={{ maxWidth: 1120 }}>
        <Inner>
          <Title>Road map</Title>
          <NavigationItem ref={navigationPrevRef} className="swiper-button-prev"><img src={STAKING_ICON.arrowLeftGray} /></NavigationItem>
          <NavigationItem ref={navigationNextRef} className="swiper-button-next"><img src={STAKING_ICON.arrowLeftGray} /></NavigationItem>
          <Swiper
            slidesPerView={isMobile767 ? 2 : isMobile991 ? 3 : 4}
            spaceBetween={32}
            slidesPerGroup={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation, Pagination]}
          >

            {ROAD_MAP.items?.map((item, index) => (
              <SwiperSlide key={index}>
                <Item active={item.status.toString()}>
                  <Image sx={{opacity: item.status ? '0.2' : '1'}}><img src={item.status ? item.image : STAKING_IMAGE.boxGray} /></Image>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '@media (min-width: 768px)': {
                      alignItems: 'flex-start'
                    }
                  }}>
                    <Name>{item.title}</Name>
                    <Status active={item.status.toString()}>{'UPCOMING'}</Status>
                  </Box>
                </Item>
              </SwiperSlide>
            ))}

          </Swiper>
        </Inner>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  '& img': {
    width: '100%',
  },
  marginBottom: 60,
  '@media (min-width: 768px)': {
    marginBottom: 150
  }
})
const Inner = styled(Box)({
  position: 'relative',
})
const Title = styled(Typography)({
  ...TEXT_STYLE(24, 500, '#000000'),
  marginBottom: 16
})
type itemProps = BoxProps & {
  active: string
}
const Item = styled(Box)((props: itemProps) =>({
  padding: 16,
  borderRadius: 12,
  backgroundColor: '#F8F9FB',
  display: 'flex',
  minHeight: 170,
  flexDirection: 'column',
  alignItems: 'center',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'unset',
    minHeight: 108,
  }
}))
const Image = styled(Box)({
  maxWidth: 80,
  marginBottom: 10,
  '& img': {
    height: 'auto !important'
  },
  '@media (min-width: 768px)': {
    marginRight: 16,
    marginBottom: 0
  }
})
const Name = styled(Typography)({
  ...TEXT_STYLE(14, 500, '#5A6178'),
  marginBottom: 10,
  '@media (min-width: 768px)': {
    marginBottom: 0
  }
})
const Status = styled(Typography)((props: itemProps) => ({
  padding: '4px 8px',
  ...TEXT_STYLE(14, 500, '#ffffff'),
  backgroundColor: '#A7ACB8',
  textTransform: 'uppercase',
  marginTop: 'auto',
  display: 'inline-block'
}))
const NavigationItem = styled(Box)({
  '&:after': {
    display: 'none',
  },
  '&.swiper-button-next': {
    top: '15px !important',
    transform: 'rotate(180deg)'
  },
  '&.swiper-button-prev': {
    top: '15px !important',
    right: '59px !important',
    left: 'unset !important'
  }
})

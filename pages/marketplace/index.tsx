import { Box, Container, Stack } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { ApproveToken } from "../../components/pageComponent/marketplace/ApproveToken";
import { Banner } from "../../components/pageComponent/marketplace/Banner";
import { Checkout } from "../../components/pageComponent/marketplace/Checkout";
import { ConnectWallet } from "../../components/pageComponent/marketplace/ConnectWallet";
import Filter from "../../components/pageComponent/marketplace/Filter";
import ListProduct from "../../components/pageComponent/marketplace/ListProduct";
import { ProductDetail } from "../../components/pageComponent/marketplace/ProductDetail";

const Marketplace: NextPage = () => {
  const [productDetailActive, setProductDetailActive] = useState<boolean>(false);
  const [currentProductDetail, setCurrentProductDetail] = useState<any>();
  const [popupConnectWallet, setPopupConnectWallet] = useState<boolean>(false);
  const [popupCheckout, setpopupCheckout] = useState<boolean>(false);
  const [popupApproveToken, setpopupApproveToken] = useState<boolean>(false)


  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Banner />
      <Box sx={{margin: '0 24px'}}>
        <Container disableGutters sx={container}>
          <Stack sx={body}>
            <Filter/>
            <ListProduct handleSetProductDetail={setCurrentProductDetail} handleToggleDrawer={setProductDetailActive} />
            <ProductDetail dataProduct={{}} drawerStatus={productDetailActive} handleToggleDrawer={setProductDetailActive} />
          </Stack>
        </Container>
      </Box>
      <ConnectWallet status={popupConnectWallet} handleToggleStatus={setPopupConnectWallet} />
      <Checkout status={popupCheckout} handleToggleStatus={setpopupCheckout} />
      <ApproveToken status={popupApproveToken} handleToggleStatus={setpopupApproveToken} />
    </MainLayout>
  )
}

export default Marketplace;

const container = {
  maxWidth: { xl: 1920 - 240 },
  marginTop: '25px'
} 

const body = {
  justifyContent: 'space-between',
  flexDirection: 'row',
  color: '#31373E'
}
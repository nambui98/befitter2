
import { Box, Stack, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
// import { BOX_IMAGE, BOX_LIST_ITEM } from "../constants/openIno";
import { keyframes } from '@mui/system';
const Mobile: React.FC<any> = () => {

	return (
		<Box display={'flex'} alignItems={'center'} justifyContent="center" flexDirection={"column"} rowGap={5} >

			<Box display={'flex'} width="100%" alignItems='flex-start' justifyContent={'center'} >
				<Box sx={{
					width: "68px",
					height: "102px",

					backgroundImage: `url(assets/bg_fiu1.png)`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					position: 'relative'
				}}>
					<BoxImageAnimation sx={{
						position: 'absolute',
						left: '10px'
					}}>

						<img width="75px" src="assets/fiu1.png" />
					</BoxImageAnimation>

				</Box>
				<Box display={'flex'} flexDirection='column' alignItems={'flex-start'} ml={4}>

					<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>

						<Typography
							fontSize={{ xs: 32, sm: 56 }}
							textTransform="uppercase"
							fontFamily='Electrofied'
							fontStyle={'italic'}
							fontWeight={800}
							color="#FF6D24"
							// mb={5}
							mr={{ xs: 1, sm: 2 }}
						>
							FIU
						</Typography>
						<Box width={{ xs: "20px", sm: "40px" }} sx={{ display: 'flex' }} >

							<img width={"100%"} src="assets/FIU.png" />
						</Box>
					</Box>
					<Typography
						fontSize={{ xs: 16, sm: 24 }}
						textTransform="uppercase"
						fontFamily='Electrofied'
						fontStyle={'italic'}
						fontWeight={800}
						color="#31373E"
						// mb={5}
						mr={2}
						width="250px"
					>
						SOCIAL TOKEN
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"

						mt={1}
					>
						Stake to earn interest and FitterPass
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"

						mt={1}
					>
						Level up shoe NFT at some levels & Mint
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"

						mt={1}
					>
						Governance
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"

						mt={1}
					>
						Pay rental commission fee
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"

						mt={1}
					>
						Pay for some in-app purchases
					</Typography>
					<Box sx={{
						mt: 1,
						display: 'flex',
						align: "center",
						justifyContent: "flex-start",
					}}
					>

						<Typography
							fontSize={{ xs: 12, sm: 16 }}
							fontWeight={500}
							color="#5A6178"

						>
							Earn
						</Typography>

						<Typography
							fontSize={{ xs: 12, sm: 16 }}
							fontWeight={800}
							color="#FF6D24"
							ml={1}
							mr={1}
						>
							FIU
						</Typography>

						<Typography
							fontSize={{ xs: 12, sm: 16 }}
							fontWeight={500}
							color="#5A6178"

						>
							in With Pet Mode,
						</Typography>
					</Box>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"

					>
						Challenges, Staking
					</Typography>

				</Box>
			</Box>
			<Box display={'flex'} width="100%" alignItems='flex-start' justifyContent={'center'} >
				<Box sx={{
					width: "68px",
					height: "102px",

					backgroundImage: `url(assets/bg_hee1.png)`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					position: 'relative'
				}}>
					<BoxImageAnimation sx={{
						position: 'absolute',
						left: '10px'
					}}>

						<img width="75px" src="assets/hee1.png" />
					</BoxImageAnimation>

				</Box>
				<Box display={'flex'} flexDirection='column' alignItems={'flex-start'} ml={4}>

					<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>


						<Typography fontSize={{ xs: 32, sm: 56 }}
							textTransform="uppercase"
							fontFamily='Electrofied'
							fontStyle={'italic'}
							fontWeight={800}
							mr={{ xs: 1, sm: 2 }} className="text_gadient_second">
							HEE
						</Typography>
						<Box width={{ xs: "20px", sm: "40px" }} sx={{ display: 'flex' }} >

							<img width={"100%"} src="assets/HEE.png" />
						</Box>
					</Box>
					<Typography
						fontSize={{ xs: 16, sm: 24 }}
						textTransform="uppercase"
						fontFamily='Electrofied'
						fontStyle={'italic'}
						fontWeight={800}
						color="#31373E"
						// mb={5}
						mr={2}
						width="250px"
					// textAlign={"right"}
					>
						HEALTH TOKEN
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"
						textAlign={"right"}
						mt={1}
					>
						Level up shoe NFT
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"
						textAlign={"right"}
						mt={1}
					>
						Repair shoe NFT
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"
						textAlign={"right"}
						mt={1}
					>
						Transaction fee
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"
						textAlign={"right"}
						mt={1}
					>
						Mint
					</Typography>

					<Box sx={{
						mt: 1,
						display: 'flex',
						align: "center",
						justifyContent: "flex-start",
					}}
					>

						<Typography
							fontSize={{ xs: 12, sm: 16 }}
							fontWeight={500}
							color="#5A6178"
							textAlign={"right"}
						>
							Earn
						</Typography>

						<Typography
							fontSize={{ xs: 12, sm: 16 }}
							fontWeight={800}
							color="#1DB268"
							ml={1}
							mr={1}
							textAlign={"right"}
						>
							HEE
						</Typography>

						<Typography
							fontSize={{ xs: 12, sm: 16 }}
							fontWeight={500}
							color="#5A6178"
							textAlign={"right"}
						>
							in With Pet Mode,
						</Typography>
					</Box>
					<Typography
						fontSize={{ xs: 12, sm: 16 }}
						fontWeight={500}
						color="#5A6178"
						textAlign={"right"}
					>
						in all game modes
					</Typography>

				</Box>
			</Box>
		</Box >
	);
};
const Section4: NextPage = () => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));


	return (
		<Wrap>
			<Box display={'flex'} mb={4} alignItems="center" flexDirection={"column"} sx={{

			}}>
				<Typography
					fontSize={{ xs: 32, sm: 56 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#FF6D24"
					mb={0.5}
				>
					TOKENS
				</Typography>
				<Typography
					fontSize={{ xs: 25, sm: 38 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#31373E"
					mb={0.5}
				>
					UTILITIES
				</Typography>
			</Box >
			{
				isSm ? <Mobile /> :
					<Box display={'flex'} alignItems={'flex-start'} justifyContent="space-between" >
						<Box flex={1} display={'flex'} flexDirection='column' alignItems={'flex-start'}>

							<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>

								<Typography
									fontSize={{ xs: 15, sm: 56 }}
									textTransform="uppercase"
									fontFamily='Electrofied'
									fontStyle={'italic'}
									fontWeight={800}
									color="#FF6D24"
									// mb={5}
									mr={2}
								>
									FIU
								</Typography>
								<img width="40px" src="assets/FIU.png" />
							</Box>
							<Typography
								fontSize={{ xs: 16, sm: 24 }}
								textTransform="uppercase"
								fontFamily='Electrofied'
								fontStyle={'italic'}
								fontWeight={800}
								color="#31373E"
								// mb={5}
								mr={2}
								width="250px"
							>
								SOCIAL TOKEN
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"

								mt={4}
							>
								Stake to earn interest and FitterPass
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"

								mt={1}
							>
								Level up shoe NFT at some levels & Mint
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"

								mt={1}
							>
								Governance
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"

								mt={2}
							>
								Pay rental commission fee
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"

								mt={2}
							>
								Pay for some in-app purchases
							</Typography>
							<Box sx={{
								mt: 2,
								display: 'flex',
								align: "center",
								justifyContent: "flex-start",
							}}
							>

								<Typography
									fontSize={{ xs: 16, sm: 16 }}
									fontWeight={500}
									color="#5A6178"

								>
									Earn
								</Typography>

								<Typography
									fontSize={{ xs: 16, sm: 16 }}
									fontWeight={800}
									color="#FF6D24"
									ml={1}
									mr={1}
								>
									FIU
								</Typography>

								<Typography
									fontSize={{ xs: 16, sm: 16 }}
									fontWeight={500}
									color="#5A6178"

								>
									in With Pet Mode,
								</Typography>
							</Box>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"

							>
								Challenges, Staking
							</Typography>

						</Box>


						<Box sx={{
							width: "800px",
							height: "100%",
							position: "relative",
						}}>
							<Box sx={{
								position: 'absolute',
								top: "70%",
								left: "00px",
								width: "300px",
								height: "303px",
								transform: 'translateY(-50%)',
								backgroundImage: `url(assets/bg_fiu1.png)`,
								// height: '100%',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain'

							}}>
								<BoxImageAnimation sx={{
									position: 'absolute',
									left: '50px'
								}}>

									<img width="226px" src="assets/fiu1.png" />
								</BoxImageAnimation>
							</Box>
							<Box sx={{
								position: 'absolute',
								top: "50%",
								right: "0",
								width: "258px",
								height: "292px",
								transform: 'translateY(-50%)',
								backgroundImage: `url(assets/bg_hee1.png)`,
								// height: '100%',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain'
							}}>
								<BoxImageAnimation sx={{
									position: 'absolute',
									right: '0'
								}}>

									<img width="226px" src="assets/hee1.png" />
								</BoxImageAnimation>
							</Box>
						</Box>
						<Box flex={1} display={'flex'} flexDirection='column' alignItems={'flex-end'}>

							<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>

								<img width="40px" src="assets/HEE.png" />
								<Typography fontSize="56px" className="text_gadient_second">
									HEE
								</Typography>
								{/* <Typography
							fontSize={{ xs: 15, sm: 56 }}
							textTransform="uppercase"
							fontFamily='Electrofied'
							fontStyle={'italic'}
							fontWeight={800}
							color="#FF6D24"
							// mb={5}
							mr={2}
						>
							HEE
						</Typography> */}
							</Box>
							<Typography
								fontSize={{ xs: 16, sm: 24 }}
								textTransform="uppercase"
								fontFamily='Electrofied'
								fontStyle={'italic'}
								fontWeight={800}
								color="#31373E"
								// mb={5}
								mr={2}
								width="250px"
								textAlign={"right"}
							>
								HEALTH TOKEN
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"
								textAlign={"right"}
								mt={4}
							>
								Level up shoe NFT
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"
								textAlign={"right"}
								mt={2}
							>
								Repair shoe NFT
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"
								textAlign={"right"}
								mt={2}
							>
								Transaction fee
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"
								textAlign={"right"}
								mt={2}
							>
								Mint
							</Typography>

							<Box sx={{
								mt: 2,
								display: 'flex',
								align: "center",
								justifyContent: "flex-start",
							}}
							>

								<Typography
									fontSize={{ xs: 16, sm: 16 }}
									fontWeight={500}
									color="#5A6178"
									textAlign={"right"}
								>
									Earn
								</Typography>

								<Typography
									fontSize={{ xs: 16, sm: 16 }}
									fontWeight={800}
									color="#1DB268"
									ml={1}
									mr={1}
									textAlign={"right"}
								>
									HEE
								</Typography>

								<Typography
									fontSize={{ xs: 16, sm: 16 }}
									fontWeight={500}
									color="#5A6178"
									textAlign={"right"}
								>
									in With Pet Mode,
								</Typography>
							</Box>
							<Typography
								fontSize={{ xs: 16, sm: 16 }}
								fontWeight={500}
								color="#5A6178"
								textAlign={"right"}
							>
								in all game modes
							</Typography>

						</Box>
					</Box >
			}
		</Wrap >
	)
}

export default Section4;

const Wrap = styled(Stack)({
	padding: '0 16px',
	maxWidth: '1120px',
	margin: '29px auto 50px',
	backgroundImage: `url(assets/bg_sec4.png)`,
	height: '100%',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	marginTop: "100px !important",
	'@media (max-width: 1100px)': {
		margin: '29px auto 80px',
	},
	'@media (min-width: 560px)': {
		margin: '29px auto 80px',
	}

})
const translate = keyframes`
  /* from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(-50%);
  } */
	  0%   {transform: translateY( 20px);}

  /* 25%  {transform: translateY(calc(-50% - 10px));} */
  75%  {transform: translateY(0);}
  100% {transform: translateY(20px)}
`;
const BoxImageAnimation = styled(Box)({
	animation: `${translate}`,
	animationDuration: '1.5s',
	animationTimingFunction: 'ease-out',
	// animationDelay: '1s',
	animationIterationCount: 'infinite'
})
const BoxOpenImage = styled(Box)({
	margin: '0 auto 56px',
	'@media (min-width: 560px)': {
		margin: '0 auto 86px',
	},
	'& img': {
		width: '100%',
	}
})
const ListBox = styled(Stack)({
	justifyContent: 'space-between',
	flexDirection: 'row',
	flexWrap: 'wrap',
})
const BoxItem = styled(Box)({
	textAlign: 'center',
	width: '100%',
	marginBottom: '30px',
	'@media (min-width: 560px)': {
		width: 'calc(50% - 30px)',
	},
	'@media (min-width: 992px)': {
		width: 'calc(25% - 16px)',
		marginBottom: '0'
	},
	'& img': {
		width: '68%',
		'@media (min-width: 560px)': {
			width: '60%',
			marginBottom: '23px',
		},
		'@media (min-width: 992px)': {
			width: '100%',
		},
	}
})
const BoxItemBody = styled(Typography)({
	'&, & a': {
		fontSize: '16px',
		fontWeight: '500',
		color: '#31373E',
		textAlign: 'center',
		lineHeight: '1.4'
	},
	'& a': {
		textDecoration: 'underline',
	}
})
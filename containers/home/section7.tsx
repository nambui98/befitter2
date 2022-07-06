import React from 'react';
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	InputBase,
	Button,
	IconButton,
	Icon,
	Theme,
	useMediaQuery,
} from '@mui/material';
import { TEAM } from '../../constants/common';

const Section7: React.FC<any> = ({ sxProps }) => {
	const data = [
		{
			name: 'thi truong',

		}
	]
	return (
		<Container sx={{ ...sxProps, }}>
			{/* <SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/> */}
			<Box display={'flex'} mb={10} alignItems="center" justifyContent="center">

				<Typography
					fontSize={{ xs: 20, sm: 56 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#FF6D24"
					textAlign="center"
				>
					ADVISORS
				</Typography>

			</Box>
			<Box display={'flex'} justifyContent="space-evenly" sx={{ flexDirection: { xs: "column", sm: 'row' } }}>

				<Box sx={{ flexDirection: { xs: "column", sm: 'row' }, width: { xs: "100%", sm: "320px" } }}>
					<Box sx={{
						display: "flex",
						justifyContent: "flex-start",
						flexDirection: { xs: "row", sm: "column" }
					}}>

						<Box sx={{ width: { xs: "104px", sm: '100%' } }}>

							<img width={"100%"} src="assets/partners/icetealabs_director.png" />
						</Box>
						<Typography
							fontSize={{ xs: 24, sm: 24 }}
							textTransform="uppercase"
							fontWeight={700}
							color="#31373E"
							textAlign="left"
							ml={{ xs: 2, sm: "0px" }}
							mt={{ xs: "0px", sm: 3 }}
						// sx={{ width: { xs: "104px", sm: '100%' } }}
						>
							THI TRUONG
						</Typography>
					</Box>
					<Typography sx={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: { xs: "13px", sm: '16px' },
						mt: { xs: 1, sm: '0px' }
					}}>
						This is the founder of <span style={{ color: '#55C8FC' }} >
							Icetea Labs
						</span> , the company behind Red Kite Launchpad and GameFi.org gaming hub. He is also the incubator, advisor or investor of a couple of blockchain projects such as Faraland, NFTrade, The Unfettered…
					</Typography>
					<br />
					<Typography sx={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: { xs: "13px", sm: '16px' },
						mb: { xs: 3, sm: '0px' }
					}}>
						Before founding Icetea Labs, Thi worked for Kyber Network and FPT Software.
					</Typography>

				</Box>
				<Box sx={{ flexDirection: { xs: "column", sm: 'row' }, width: { xs: "100%", sm: "320px" } }}>
					<Box sx={{
						display: "flex",
						justifyContent: "flex-start",
						flexDirection: { xs: "row", sm: "column" }
					}}>

						<Box sx={{ width: { xs: "104px", sm: '100%' } }}>

							<img width={"100%"} src="assets/partners/dao_director.png" />
						</Box>
						<Typography
							fontSize={{ xs: 24, sm: 24 }}
							textTransform="uppercase"
							fontWeight={700}
							color="#31373E"
							textAlign="left"
							ml={{ xs: 2, sm: "0px" }}
							mt={{ xs: "0px", sm: 3 }}
						// sx={{ width: { xs: "104px", sm: '100%' } }}
						>
							HATU SHEIKH
						</Typography>
					</Box>
					<Typography sx={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: { xs: "13px", sm: '16px' },
						mt: { xs: 1, sm: '0px' }
					}}>
						Hatu is the co-founder, chief marketing, and strategy in <span style={{ color: '#55C8FC' }} >
							Dao Maker
						</span>. He defines himself as an analyst with the business intuition necessary to analyze opportunities for growth.
					</Typography>
					<br />
					<Typography sx={{
						color: "#5A6178",
						fontWeight: "500",
						fontSize: { xs: "13px", sm: '16px' },
						mb: { xs: 3, sm: '0px' }
					}}>
						Before co-founding Dao Maker, he had years of experience in analytical roles, marketing, management, and entrepreneurial ventures.
					</Typography>

				</Box>
			</Box>
		</Container >
	);
};

export default Section7;

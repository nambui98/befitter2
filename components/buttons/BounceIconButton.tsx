import React from 'react';
import { Box, Stack } from '@mui/material';

export interface BounceIconButtonProps {
	icon: string;
	iconActive: string;
	href?: string;
	width?: number;
	height?: number;
}

// const BounceIconButton: React.FC<BounceIconButtonProps> = ({
const BounceIconButton: React.FC<any> = ({
	icon,
	iconActive,
	href = '#',
	width = 40,
	height = 40,
}) => (
	<Stack
		component="a"
		alignItems="center"
		href={href}
		target="_blank"
		sx={{
			borderRadius: '12px',
			py: 0.5,
			'&:hover': {
				'& span': {
					background: `url(${iconActive}) no-repeat center`,
					transition: '.3s all cubic-bezier(0.7, -0.4, 0.4, 1.4)',
					transform: `translateY(-8px)`,
				},
				'& div': {
					opacity: 0.8,
				},
			},
		}}
	>
		<Box
			component={'span'}
			sx={{
				cursor: 'pointer',
				width: width + 2,
				height: height + 2,
				background: `url(${icon}) no-repeat center`,
			}}
		></Box>
		<Box
			sx={{
				mt: 0.5,
				width: 32,
				height: 4,
				background: '#31373E',
				opacity: 0,
				filter: 'blur(8px)',
			}}
		></Box>
	</Stack>
);

export default BounceIconButton;
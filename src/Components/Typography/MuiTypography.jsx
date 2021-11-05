import React from 'react'

import { Typography } from '@mui/material';

function MuiTypography() {
	return (
		<div>
			<Typography variant="h1" component="div" gutterBottom>
				h1. Heading
			</Typography>

			<Typography variant="body1" gutterBottom>
				body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
				neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
				quasi quidem quibusdam.
			</Typography>
			<Typography variant="body2" gutterBottom>
				body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
				neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
				quasi quidem quibusdam.
			</Typography>
			<Typography variant="button" display="block" gutterBottom>
				button text
			</Typography>
			<Typography variant="caption" display="block" gutterBottom>
				caption text
			</Typography>
			<Typography variant="body2" display="block" gutterBottom >
				overline text
			</Typography>
		
		</div>
	)
}

export default MuiTypography

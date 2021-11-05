import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Icons from './Icons'

export default function Buttons() {
	return (
		<div>
			<Stack spacing={1} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained" >Contained</Button>
				<Button variant="outlined">Outlined</Button>
				<Button variant="contained" disableElevation>
					Disable elevation
				</Button>
			</Stack>
	
			<div>
				<Button variant="outlined" size="small">
					Small
				</Button>
				<Button variant="outlined" size="medium">
					Medium
				</Button>
				<Button variant="outlined" size="large">
					Large
				</Button>
			</div>
			<div>
				<h2>Buttons with icons </h2>
				<Stack direction="row" spacing={2}>
					<Button variant="outlined" startIcon={<DeleteIcon />}>
						Delete
					</Button>
					<Button variant="contained" endIcon={<SendIcon />}>
						Send
					</Button>
				</Stack>
			</div>
			<div>
				<h2>Button-icons</h2>
				<Icons/>
			</div>
		</div>
	)
}

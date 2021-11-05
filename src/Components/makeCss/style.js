/////////////////////////////////////////////////////////////////////

// *  https://mui.com/system/palette/#color
// * 1 = 8px `${8 * 2}px` = '16px' https://mui.com/customization/spacing/

/////////////////////////////////////////////////////////////////////


import { makeStyles } from '@material-ui/core/styles'
import { deepPurple, brown, deepOrange} from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.secondary.main,
		textAlign: "center",
		padding: theme.spacing(8, 1, 6, 2),
		[theme.breakpoints.down('md')]: {
			backgroundColor: theme.palette.primary.main,
		},
		[theme.breakpoints.up('md')]: {
			backgroundColor: deepPurple[700],
		},
		[theme.breakpoints.up('lg')]: {
			backgroundColor: brown[800],
			color: deepOrange[300]
		},
	},
	btn: {
		padding: "20px"
	}
}))
export default useStyles;
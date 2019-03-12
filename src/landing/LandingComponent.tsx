import React from 'react';
import { Paper, CssBaseline, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useLandingText } from './LandingHandler';
import { LandingContent } from './LandingContent';

const useStyles = makeStyles((theme: Theme) => ({
	main: {
		backgroundColor: theme.palette.primary.dark,

		width: '100%',

	},
	root: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2,
		[theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		minHeight: 400,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: 'linear-gradient(to bottom right, Gainsboro, SkyBlue, DarkSlateGrey)',
	},
	textArea: {
		flex: 'none',
	},
	text: {
		textShadow: '0px 0px 12px white, 1px 1px 3px grey',
		color: 'rgba(240,240,255,1)',
	}
}))

interface LandingPageProps {
	welcomeMessage: LandingContent;
}

export function LandingPage(props: LandingPageProps) {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<CssBaseline />
			<Paper className={classes.root}>
				<div className={classes.textArea}>
					<Typography align='center' variant='h1' classes={{ root: classes.text }}>{props.welcomeMessage.title}</Typography>
					<Typography align='center' variant='h5' className={classes.text}>{props.welcomeMessage.subtitle}</Typography>
				</div>
			</Paper>
		</div>
	)
}

export function LandingComponent() {
	const { error, loading, landingText } = useLandingText()

	const text = {title: 'Folio', subtitle: 'Development and Design'}

	// if (error) return (<div><h3>Something Terrible</h3></div>)
	// if (loading) return (<div><h3>Loading</h3></div>)
	// if (landingText) {
	// 	return <LandingPage welcomeMessage={landingText}/>
	// }
	// return null;
	return <LandingPage welcomeMessage={text} />

}
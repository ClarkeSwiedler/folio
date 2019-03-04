import React from 'react';
import { Paper, CssBaseline, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useLandingText } from './LandingHandler';

const useStyles = makeStyles((theme: Theme) => ({
	main: {
		backgroundColor: theme.palette.primary.dark,
	},
	root: {
		width: 900,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: theme.spacing.unit * 2,
	},
	text : {
		
	}
}))

interface LandingPageProps {
	welcomeMessage: string;
}

export function LandingPage(props: LandingPageProps) {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<CssBaseline />
			<Paper className={classes.root}>
				<Typography variant='h3' align='center' className={classes.text}>{props.welcomeMessage}</Typography>
			</Paper>
		</div>
	)
}

export function LandingComponent() {
	const {error, loading, landingText} = useLandingText()

	if (error) return (<div><h3>Something bad happened</h3></div>)
	if (loading) return (<div><h3>Loading</h3></div>)
	if (landingText) {
		console.log(landingText)	
		return <LandingPage welcomeMessage={landingText}/>
	}
	return null;
}
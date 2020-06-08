import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const MatchConfirm = () => {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleYes = () => {
		// Clicking "Yes"...
	};
	const handleNo = () => {
		// Clicking "No" ...
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description">
				<div style={modalStyle} className={classes.paper}>
					<h2 id="simple-modal-title">Are you sure?</h2>
					<p id="simple-modal-description">
						Are you sure you want to perform this action?
					</p>
				</div>
				<button type="button" onClick={handleYes}>
					Yes
				</button>
				<button type="button" onClick={handleNo}>
					No
				</button>
			</Modal>
		</div>
	);
};

export default MatchConfirm;
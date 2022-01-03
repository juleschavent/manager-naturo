import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn: {
        padding: 0,
        cursor: "pointer",
        transition: ".2s ease",
        "&:hover": {
            transform: "scale(1.1)",
        },
        "& path": {
            color: "#219ebc",
        },
    },
    link: {
        textDecoration: "none",
    },
});

const AddEntry = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AddCircleIcon onClick={handleClick} className={classes.btn} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <a className={classes.link} href="https://server-manager-naturo.herokuapp.com/admin/content-manager/collectionType/api::systeme.systeme/create" target="_blank" rel="noreferrer"><MenuItem onClick={handleClose}>Systeme</MenuItem></a>
                <a className={classes.link} href="https://server-manager-naturo.herokuapp.com/admin/content-manager/collectionType/api::organe.organe/create" target="_blank" rel="noreferrer"><MenuItem onClick={handleClose}>Organe</MenuItem></a>
                <a className={classes.link} href="https://server-manager-naturo.herokuapp.com/admin/content-manager/collectionType/api::maladie.maladie/create" target="_blank" rel="noreferrer"><MenuItem onClick={handleClose}>Maladie</MenuItem></a>
                <a className={classes.link} href="https://server-manager-naturo.herokuapp.com/admin/content-manager/collectionType/api::traitement.traitement/create" target="_blank" rel="noreferrer"><MenuItem onClick={handleClose}>Traitement</MenuItem></a>
            </Menu>
        </div>
    );
}

export default AddEntry;
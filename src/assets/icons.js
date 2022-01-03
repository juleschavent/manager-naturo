import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        cursor: "pointer",
        backgroundColor: "#219ebc",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        transition: ".2s ease",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    icon: {
        width: "18px !important",
        "& path": {
            color: "#fff",
        },
    },
});


export const Edit = ({ id, collection }) => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <a href={`https://server-manager-naturo.herokuapp.com/admin/content-manager/collectionType/api::${collection}.${collection}/${id}`} target="_blank" rel="noreferrer">
                <EditIcon className={classes.icon} />
            </a>
        </div>
    );
}

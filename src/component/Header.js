import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import background from "../assets/img/background.svg"
import Cat from "../assets/img/cat-solid.svg"

const useStyles = makeStyles({
  title: {
    position: "relative",
    color: "white",
    marginRight: 10,
  },
  background: {
    background: `no-repeat url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    width: "100vw",
    height: 150,
    position: "absolute",
    top: 0,
    left: 0,
  },
  cat: {
    transform: "scaleX(-1)",
  },
  miou: {
    color: "white",
  },
  animate: {
    animation: "$"
  }
  // "@keyframes": {
  //   "100%": {

  //   }
  // }
});


const Header = () => {
  const classes = useStyles()
  return (
    <Box mt="50px" mb="100px" textAlign="center">
      <Box display="flex" justifyContent="center" zIndex="4" position="relative">
        <h1 className={classes.title}>Wiki-Naturopathie</h1>
        <img src={Cat} alt="" className={classes.cat} />
        <p className={classes.miou}>miou</p>
      </Box>
      <div className={classes.background} />
    </Box>
  )
}

export default Header;
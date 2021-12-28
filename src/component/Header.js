import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    marginBottom: 15,
    textAlign: "right",
    fontSize: 32,
    "&:first-letter": {
      textTransform: "uppercase",
    },
  },
  description: {
    lineHeight: 1.8,
  },
});


const Header = () => {
  const classes = useStyles()
  return (
    <Box my="50px" textAlign="center" textDecoration="underline">
      <h1>Wiki-Naturopathie</h1>
    </Box>
  )
}

export default Header;
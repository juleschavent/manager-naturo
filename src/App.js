import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Header from './component/Header';
import Container from '@mui/material/Container';
import Systeme from './component/Systeme';
import Organe from './component/Organe';
import Maladie from './component/Maladie';
import Traitement from './component/Traitement';
import { useContext, useState } from 'react';
import { StateContext } from './Context/StateContext';
import Grid from '@mui/material/Grid';
import CurrentDetails from './component/CurrentDetails';
import { makeStyles } from '@mui/styles';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box } from '@mui/material';
import ResetDropdown from './component/ResetDropdown';
import SearchToggle from './component/SearchToggle';
import AddEntry from './component/AddEntry';

const useStyles = makeStyles({
  title: {
    marginLeft: 15,
    fontSize: 24,
  },
});


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // uri: "http://localhost:1337/graphql",
    uri: "https://server-manager-naturo.herokuapp.com/graphql",
  });

  const classes = useStyles()
  const { currSysteme, currOrgane, currMaladie, currDetails, currTab } = useContext(StateContext)

  return (
    <ApolloProvider client={client}>
      <Container maxWidth="lg">
        <Header />
        <SearchToggle />
        {currTab === "parcourir" ?
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Systeme />
              {currSysteme !== "false" && <Organe />}
              {currOrgane !== "false" && <Maladie />}
              {currMaladie !== "false" && <Traitement />}
              <Box mt="10px" display="flex" alignItems="center" justifyContent="space-between">
                <AddEntry />
                {currSysteme !== "false" && < ResetDropdown />}
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              {currDetails !== "false" ? <CurrentDetails /> :
                <Box display="flex" alignItems="center" justifyContent="end" mt="15px">
                  <ArrowCircleLeftIcon sx={{ fill: "#219ebc" }} />
                  <h2 className={classes.title}>S??lectionnez un syst??me pour commencer votre recherche</h2>
                </Box>
              }
            </Grid>
          </Grid>
          : ""}
      </Container>
    </ApolloProvider >
  );
}

export default App;

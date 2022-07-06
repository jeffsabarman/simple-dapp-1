import { Button, Grid, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { UseAccount } from "../hooks/useAccount";
import { useConnect } from "../hooks/useConnect";

export const MetamaskConnector = () => {
  const theme = useTheme();
  const { onClickConnect, onClickConnectMoralis } = useConnect();

  const { address, balance } = UseAccount();

  console.log(onClickConnect, "<< onClickcoNNECT");

  return (
    <Grid
      container
      // direction="column"
      spacing={3}
      // alignItems="center"
      style={{
        padding: theme.spacing(12),
        height: "100vh",
        backgroundColor: grey[800],
      }}
    >
      {address ? (
        <>
          <Grid item>
            <Typography color="white">Address: {address}</Typography>
          </Grid>
          <Grid item>
            <Typography color="white">|</Typography>
          </Grid>
          <Grid item>
            <Typography color="white">Balance: {balance}</Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <Button onClick={onClickConnect} variant="contained">
              Connect Vanilla JS
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={onClickConnectMoralis}
              variant="contained"
              color="secondary"
            >
              Connect Moralis
            </Button>
          </Grid>
          <Grid item>
            <Button color="success" variant="contained">
              Connect useDApp
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

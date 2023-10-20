import { Box, Grid, Typography } from "@mui/material";
import CardWrapper from "../CardWrapper";
import SettingsCard from "./SettingsCard";
import ButtonWrapper from "../ButtonWrapper";

const Settings = () => {
  return (
    <Grid container spacing={2}>
      < Grid item md={12}>
        <Typography variant="h3">
          Settings
        </Typography>
      </Grid >
      <Grid item md={12}>
        <CardWrapper>
          <Typography variant="body">Login/Logoff Settings</Typography>
          <Box sx={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            mt: 2
          }}>
            <SettingsCard title="Unsuccessful Login Attempts" content="5 Per Hour" />
            <SettingsCard title="Unsuccessful Login Lock-out period" content="5 Per Hour" />
            <ButtonWrapper text="Edit" />
          </Box>
        </CardWrapper>
      </Grid>
      <Grid item md={12}>
        <CardWrapper>
          <Typography variant="body">Password Criteria Setup</Typography>
          <Box sx={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            mt: 2
          }}>
            <SettingsCard title="Password Length" content="8" />
            <SettingsCard title="Number of unique password required" content="7" />
            <SettingsCard title="Acceptable range of characters" content="Uppercase, Lowercase, Number" />
            <ButtonWrapper text="Edit" />
          </Box>
        </CardWrapper>
      </Grid>
      <Grid item md={12}>
        <CardWrapper>
          <Typography variant="body">Setup/Edit Bank Account</Typography>
          <Box sx={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            mt: 2,
          }}>
            <SettingsCard title="Setup / Edit Bank Account" content="*** *** *** 43521" />
            <ButtonWrapper text="Edit" />
          </Box>
        </CardWrapper>
      </Grid>
    </Grid >
  )
}

export default Settings;

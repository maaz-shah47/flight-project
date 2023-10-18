import { Box, Typography } from "@mui/material";
import CardWrapper from "./CardWrapper";
import SettingsCard from "./SettingsCard";
import SettingsButton from "./SettingsButton";

const Settings = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    }}>
      <Typography variant="h4">
        Settings
      </Typography>
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
          <SettingsButton text="Edit" />
        </Box>
      </CardWrapper>
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
          <SettingsButton text="Edit" />
        </Box>
      </CardWrapper>
      <CardWrapper>
        <Typography variant="body">Setup/Edit Bank Account</Typography>
        <Box sx={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          mt: 2,
        }}>
          <SettingsCard title="Setup / Edit Bank Account" content="*** *** *** 43521" />
          <SettingsButton text="Edit" />
        </Box>
      </CardWrapper>
    </Box>
  )
}

export default Settings;

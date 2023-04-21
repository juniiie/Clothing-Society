import { Box, Alert, AlertTitle } from "@mui/material";

export const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfuly made an Order - <strong>Thank you for mak</strong>
      </Alert>
    </Box>
  );
};

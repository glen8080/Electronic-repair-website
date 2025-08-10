import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Message() {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={true}
        autoHideDuration={4000}
        message="The message was sent successfully"
        action={action}
        ContentProps={{
          style: {
            backgroundColor: 'green',
            color: 'white'
          }
        }}
      />
    </div>
  );
}

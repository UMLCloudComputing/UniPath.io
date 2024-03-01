import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Authenticator } from '@aws-amplify/ui-react';

/**
 * A dialog box for user sign up.
 * It includes a title, a close button, and an Amplify Authenticator component for user sign up.
 *
 * @param {Object} props - The properties passed to this component.
 * @param {boolean} props.open - The state of the dialog (open or closed).
 * @param {Function} props.handleClose - The function to handle the closing of the dialog.
 *
 * @returns {ReactElement} The React Element created by this function.
 */
export default function CustomizedDialogs({ open, handleClose }) {
    const menuId = 'primary-search-account-menu';

    return (
        <React.Fragment>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Sign Up
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Authenticator initialState="signUp" socialProviders={['google']}>
                        {({ signOut, user }) => (
                            <main>
                                <h1>Hello {user.username}</h1>
                                <button onClick={signOut}>Sign out</button>
                            </main>
                        )}
                    </Authenticator>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

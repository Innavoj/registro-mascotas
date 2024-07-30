import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';




export default function EnviaAlertas ({ severity, texto, alerta }) {
   
        const [open, setOpen] = React.useState({alerta});

        const handleClick = () => {
        setOpen(true);
        };

        const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        };

    return (
        <>
        <Snackbar sx={{ m: 4, width: '75%' }} open={open} autoHideDuration={3000} onClose={handleClose}>
            <Stack  spacing={2}>
                <Alert variant='filled' severity={severity}>
                    <AlertTitle> {severity} </AlertTitle>
                    {texto}
                </Alert>
            </Stack>
        </Snackbar>
        </>
    );
}
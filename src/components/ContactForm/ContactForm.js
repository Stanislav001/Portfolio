import { useRef, useState } from "react";
import { Container, TextField, TextareaAutosize, Typography, Box, Grid, Button, Avatar, Alert, AlertTitle } from "@mui/material";

import { checkValidInput } from "../../services/checkValidInput";

export default function ContactForm() {
    const [formIsValid, setFormIsValid] = useState(true);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameRef.current.value;
        const enteredLastName = lastNameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredMessage = messageRef.current.value;
        const formIsValid = checkValidInput(enteredFirstName, enteredLastName, enteredEmail, enteredMessage);

        if (!formIsValid) {
            setFormIsValid(false);
        }

        // Logic to send request to server
    }

    return (
        formIsValid ?
            <Container component="main" maxWidth="xs">
                < Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                    }
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Contact Page
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={submitFormHandler}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    inputRef={firstNameRef}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    inputRef={lastNameRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    inputRef={emailRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    style={{ width: '100%' }}
                                    minRows={3}
                                    required
                                    placeholder='Enter your message'
                                    ref={messageRef}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Send Message </Button>
                    </Box>
                </Box >
            </Container >
            :
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Please fill all fields and try again!
            </Alert>
    );
}
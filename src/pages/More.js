import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import homeBanner from "../images/S8.png";
import Paper from '@mui/material/Paper';
import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {styled} from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import NotesTwoToneIcon from '@mui/icons-material/NotesTwoTone';
import SoupKitchenTwoToneIcon from '@mui/icons-material/SoupKitchenTwoTone';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#FED489' : 'rgb(79,101,55)',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 0, // Remove elevation shadow
    boxShadow: 'none',
}));

function More() {
    return (


        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: {xs: 0, sm: 0},
            pb: {xs: 0, sm: 15},

        }}>
            <div
                style={{
                    backgroundImage: `url(${homeBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '55vh', // Adjust as needed
                    textAlign: 'left'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pt: {xs: 14, sm: 14},
                        pb: {xs: 8, sm: 10},

                    }}
                >
                    <Stack direction=" row " spacing={{xs: 5, sm: 2}}>
                        <Typography>
                            ......................
                        </Typography>
                        <Typography
                            component="h1"
                            variant="h0"
                            style={{color: '#ecfae5', fontFamily: 'Poppins', fontSize: '10.0rem', textAlign: 'left'}}>
                            Ayurveda
                        </Typography>

                    </Stack>
                </Box>

        </div>
            <Stack direction={"column"}>

                <Container sx={{padding: 10}}>

                    <Typography variant="h4" // Predefined variant for larger font size
                                sx={{
                                    fontFamily: 'Times New Roman', // Custom font family
                                    fontWeight: 'light', // Custom font weight
                                    fontStyle: 'normal', // Custom font style
                                }}>
                        <b>Ayurveda,the ancient Indian system of holistic healthcare, </b> <br/>
                        offers a range of natural treatments and remedies for a variety of diseases. These remedies
                        often
                        utilize <b>herbs, spices, and natural compounds</b> to address the root causes of ailments,
                        promoting
                        overall wellness and restoring balance in the body.
                        <br/>
                        <br/>
                        Ayurvedic practitioners utilize a personalized approach, considering an individual's unique
                        constitution,
                        or <b>dosha,</b> to develop tailored treatment plans. <br/>These plans may include herbal
                        supplements,
                        specialized diet recommendations, and lifestyle adjustments to support the body's natural
                        healing processes.
                    </Typography>

                </Container>

                <Container sx={{padding: 5}}>
                    <Box sx={{flexGrow: 2}}>
                        <Grid container spacing={2}>
                            <Grid xs={5}>
                                <Item>
                                    <Stack direction={"column"} spacing={3} alignItems="center">
                                        <Avatar align="center">
                                            <SoupKitchenTwoToneIcon/>
                                        </Avatar>
                                        <Typography
                                            variant="h4" // Custom font size for the title
                                            sx={{fontFamily: 'Arial', fontWeight: 'bold', marginBottom: 1}}
                                            style={{color: '#ecfae5', fontFamily: 'Poppins'}}
                                        >
                                            Preparation
                                        </Typography>

                                        <Typography
                                            variant="body1" // Custom font size for the body
                                            sx={{fontFamily: 'Arial', fontSize: '16px'}}
                                        >
                                            Step-by-step instructions for mixing, grinding, and combining ingredients.
                                        </Typography>
                                    </Stack>
                                </Item>
                            </Grid>


                            <Grid xs={7}>
                                <Item>
                                    <Stack direction={"column"} spacing={3} alignItems="center">
                                        <Avatar align="center">
                                            <StarRateTwoToneIcon/>
                                        </Avatar>
                                        <Typography
                                            variant="h4" // Custom font size for the title
                                            sx={{fontFamily: 'Arial', fontWeight: 'bold', marginBottom: 1}}
                                            style={{color: '#ecfae5', fontFamily: 'Poppins'}}
                                        >
                                            Application
                                        </Typography>
                                        <Typography
                                            variant="body1" // Custom font size for the body
                                            sx={{fontFamily: 'Arial', fontSize: '16px'}}
                                        >
                                            Guidance on how to properly apply or consume the<br/> recommended remedies.
                                        </Typography>
                                    </Stack>
                                </Item>
                            </Grid>


                            <Grid xs={7}>
                                <Item>
                                    <Stack direction={"column"} spacing={3} alignItems="center">
                                        <Avatar align="center">
                                            <AccessTimeTwoToneIcon/>
                                        </Avatar>
                                        <Typography
                                            variant="h4" // Custom font size for the title
                                            sx={{fontFamily: 'Arial', fontWeight: 'bold', marginBottom: 1}}
                                            style={{color: '#ecfae5', fontFamily: 'Poppins'}}
                                        >
                                            Timing
                                        </Typography>
                                        <Typography
                                            variant="body1" // Custom font size for the body
                                            sx={{fontFamily: 'Arial', fontSize: '16px'}}
                                        >
                                            Information on the optimal frequency and <br/>duration of remedy use.
                                        </Typography>
                                    </Stack>
                                </Item>
                            </Grid>


                            <Grid xs={5}>
                                <Item>
                                    <Stack direction={"column"} spacing={3} alignItems="center">
                                        <Avatar align="center">
                                            <NotesTwoToneIcon/>
                                        </Avatar>
                                        <Typography
                                            variant="h4" // Custom font size for the title
                                            sx={{fontFamily: 'Arial', fontWeight: 'bold', marginBottom: 1}}
                                            style={{color: '#ecfae5', fontFamily: 'Poppins'}}
                                        >
                                            Tracking
                                        </Typography>
                                        <Typography
                                            variant="body1" // Custom font size for the body
                                            sx={{fontFamily: 'Arial', fontSize: '16px'}}
                                        >
                                            Tools to monitor your progress and make adjustments as needed.
                                        </Typography>
                                    </Stack>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>

            </Stack>

        </Box>


    );
}

export default More;

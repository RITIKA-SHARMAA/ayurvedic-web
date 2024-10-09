import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import homeBanner from "../images/S6.png";
import Paper from '@mui/material/Paper';
import * as React from "react";


function About() {
    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: {xs: 0, sm: 0},
            pb: {xs: 0, sm: 0},
        }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{
                    flex: '1', // Take up remaining space
                    display: 'flex',
                    backgroundImage: `url(${homeBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 880, // Adjust as needed
                    maxWidth: 480,
                }}>
                </div>
                <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                position: 'relative', // Set position to relative
                                '& > :not(style)': {
                                    m: 1,
                                    width: 900,
                                    height: 400,
                                },
                            }}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    backgroundColor: '#212c1c',
                                    position: 'absolute', // Set position to absolute
                                    top: 0,
                                    left: 0,
                                    borderTopLeftRadius: '40px',
                                    borderBottomRightRadius: '40px',
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    position: 'relative', // Set position to relative
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 800,
                                        height: 350,
                                    },
                                }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        backgroundColor: '#4D5D43',
                                        position: 'absolute', // Set position to absolute
                                        top: 15, // Adjust top position as needed
                                        left: 40, // Adjust left position as needed
                                        borderTopLeftRadius: '40px',
                                        borderBottomRightRadius: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white', // Text color
                                        padding: '20px',

                                    }}
                                >
                                    <Typography variant="h4" // Predefined variant for larger font size
                                                sx={{
                                                    fontFamily: 'Times New Roman', // Custom font family
                                                    fontWeight: 'light', // Custom font weight
                                                    fontStyle: 'normal', // Custom font style
                                                }}>
                                        Discover the ancient wisdom of Ayurvedic medicine and learn how to harness the
                                        power of natural ingredients to address a variety of health concerns.
                                        <br/>This comprehensive platform offers a personalized approach to wellness,
                                        guiding you through the selection and application of time-tested Ayurvedic home
                                        remedies.</Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </Box>

                </div>
            </div>

        </Box>


    );
}

export default About;

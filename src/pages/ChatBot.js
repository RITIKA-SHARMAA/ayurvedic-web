import Box from "@mui/material/Box";
import homeBanner from "../images/S7.png";
import Paper from '@mui/material/Paper';
import * as React from "react";


function ChatBot() {
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
                    <Box sx={{
                        bottom: 0,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'auto',
                        padding: 4, // Optional padding to give some space around the content

                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                position: 'relative', // Set position to relative
                                '& > :not(style)': {
                                    m: 1,
                                    width: 1000,
                                    height: 800,
                                },
                            }}
                        >
                            <Paper elevation={0}
                                   sx={{
                                       backgroundColor: 'rgb(248,233,200)',
                                       borderRadius: '20px',

                                   }}/>

                        </Box>
                    </Box>

                </div>
            </div>

        </Box>


    );
}

export default ChatBot;

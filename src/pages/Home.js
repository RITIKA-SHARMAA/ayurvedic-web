import * as React from 'react';
import {Box, Stack} from "@mui/material";

/*import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
dependencies to add >> //"react-swipeable-views": "^0.14.0",
"react-swipeable-views-utils": "^0.14.0",
*/
import Typography from "@mui/material/Typography";
import axios from "axios";
import Button from "@mui/material/Button";
import homeBanner from '../images/S3.png';


//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Main() {

    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        new Promise(r => setTimeout(r, 100)).then(r => {
            setActiveStep(step);
        })

    };

    const [response, setResponse] = React.useState([])


    React.useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + "users/diseases")
            .then(res => {
                console.log(res.data.diseases)
                setResponse(res.data.diseases)
            })
    }, [])


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
                            variant="h1"
                            style={{color: '#fff3e0', fontFamily: 'Poppins', fontSize: '10.0rem', textAlign: 'left'}}>
                            Holistic Heal
                        </Typography>

                    </Stack>
                </Box>

                <Box>

                    <Typography variant="body1" textAlign="center" color="#fff3e0" fontFamily='Poppins'
                                fontSize='1.5rem'>
                        Discover a holistic path to wellness with our personalized Ayurvedic remedy suggestions <br/>
                        tailored to your unique needs.
                    </Typography>

                </Box>
            </div>

            {/*<div
            style={{
                backgroundImage: `url(${homeBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '40vh', // Adjust as needed
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        pt: {xs: 14, sm: 20},
                        pb: {xs: 8, sm: 15},
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pt: {xs: 4, sm: 6},
                        pb: {xs: 2, sm: 2},
                    }}>
                    <Typography
                        component="h1"
                        variant="h1"
                        style={{ color: '#fff3e0', fontFamily: 'Poppins' ,  fontSize: '9.0rem'}}
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                           // alignSelf: 'left',
                            // textAlign: 'left',
                        }}
                    >Holistic Heal

                    </Typography>
                    </Box>
                        <Typography variant="body1" textAlign="center" color="#fff3e0"  fontFamily='Poppins' fontSize= '1.5rem'>
                            Discover a holistic path to wellness with our personalized Ayurvedic remedy suggestions
                            tailored to your unique needs.
                        </Typography>
                </Box>
            </Box>
        </div>*/}


            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>
                <Button variant="outlined" href="/Start" align={"center"}>
                    Get Started!
                </Button>
            </Box>

        </Box>

    );
}

export default Main;


{/*



                     <Autocomplete
                        getOptionLabel={(option) => option.diseases}
                        options={response}
                        onChange={(e, value, reason) => {
                            //setSelectedShopType(value)
                            console.log(value)
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search..."
                                InputProps={{
                                    ...params.InputProps,
                                }}
                            />
                        )}
                    />


                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{pt: 2, width: {xs: '100%', sm: 'auto'}}}
                    >
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Enter your email address"
                            placeholder="Your email address"
                            inputProps={{
                                autocomplete: 'off',
                                ariaLabel: 'Enter your email address',
                            }}
                        />
                        <Button variant="contained" color="primary">
                            Start now
                        </Button>
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{opacity: 0.8}}>
                        By clicking &quot;Start now&quot; you agree to our&nbsp;
                        <Link href="#" color="primary">
                            Terms & Conditions
                        </Link>
                        .
                    </Typography>
                    */}

{/* <Box
                    id="image"
                    sx={(theme) => ({
                        mt: {xs: 8, sm: 10},
                        alignSelf: 'center',
                        height: {xs: 200, sm: 700},
                        width: '100%',
                        backgroundImage:
                            theme.palette.mode === 'light'
                                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                                : 'url("/static/images/templates/templates-images/hero-dark.png")',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                />*/}

import * as React from 'react';
import {Box, Stack, TextField} from "@mui/material";

/*import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';


dependencies to add >> //"react-swipeable-views": "^0.14.0",
"react-swipeable-views-utils": "^0.14.0",
*/
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";


//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: './Images/A1.png'
    },
    {
        label: 'Bird',
        imgPath: 'https://img.freepik.com/free-vector/watercolor-nature-background-with-leaves_52683-59449.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=ais',
    },
    {
        label: 'Bali, Indonesia',
        imgPath: 'https://static.vecteezy.com/system/resources/thumbnails/022/399/950/original/green-watercolor-background-with-leaves-animation-for-wedding-invitation-free-video.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath: 'https://daadiplanet.in/wp-content/uploads/2024/02/2996978.jpg'
    },
];

function Main() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        new Promise(r => setTimeout(r, 100)).then(r => {
            setActiveStep(step);
        })

    };

    const [response, setResponse] = React.useState([])


    React.useEffect(() => {
        axios.get("http://localhost:3003/users/diseases")
            .then(res => {
                console.log(res.data.diseases)
                setResponse(res.data.diseases)
            })
    }, [])


    return (

        <Box>
            {/* Slider */}
            {/*
            <AutoPlaySwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box>
                                <Box
                                    component="img"
                                    sx={{
                                        height: '100%',
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            </Box>

                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            */}

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: {xs: 14, sm: 20},
                    pb: {xs: 8, sm: 12},
                }}
            >
                <Stack spacing={4} useFlexGap sx={{width: {xs: '100%', sm: '70%'}}}>

                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >Holistic&nbsp;

                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >Heal
                        </Typography>
                    </Typography>

                    <Typography variant="body1" textAlign="center" color="text.secondary">
                        Life or Existence is not a rigid compartment but a harmonious flow<br/>
                        Find the right path to live a healthy life

                    </Typography>


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


                    {/*
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
                </Stack>
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
            </Container>


        </Box>


    );
}

export default Main;

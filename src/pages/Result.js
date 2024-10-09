import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect} from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {useLocation} from "react-router-dom";
import homeBanner from "../images/S5.png";

function Result() {
    console.log('Result component rendering'); // Check if component is rendering

    const [diseasesName, setDiseasesName] = React.useState(null);
//remove this for project to work properly also Result routes
    const search = useLocation().search;
    const diseas = new URLSearchParams(search).get("diseases");
    const diseasId = new URLSearchParams(search).get("id");
    const [responseData, setResponseData] = React.useState([])
    const [selectedIngredient, setSelectedIngredient] = React.useState(null); // State to hold selected ingredient

    useEffect(() => {
        setDiseasesName(diseas)
        axios.get(process.env.REACT_APP_BASE_URL + "users/getIngredientAndTreatmentOfDiseasesId?id=" + diseasId)
            .then(res => {
                console.log(res.data)
                setResponseData(res.data.responseData)

            })

    }, [diseas, diseasId])





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
                    maxWidth: 450,
                }}>
                </div>


                <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                    <Container>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
                            <Stack>

                                <Typography> {diseasesName} </Typography>


                                <Typography> {'Select an ingredient'} </Typography>
                                <Autocomplete
                        getOptionLabel={(option) => option.ingredient}
                        options={responseData}
                        onChange={(e, value, reason) => {
                            setSelectedIngredient(value); // Update selected ingredient
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
                                <Typography> {selectedIngredient ? 'Treatment Using: ' + selectedIngredient.ingredient : ''} </Typography>
                                <Typography> {selectedIngredient ? selectedIngredient.treatments : ''} </Typography>
                </Stack>
            </Box>
        </Container>
                </div>
            </div>

        </Box>
    );

}

export default Result;
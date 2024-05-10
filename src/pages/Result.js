import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {useParams} from "react-router-dom";

function Result() {
    console.log('Result component rendering'); // Check if component is rendering

//remove this for project to work properly also Result routes
    const params = useParams();
    console.log("use params hook", params)
    const diseasesName = params.diseasesName;
    console.log('diseases:', diseasesName);


    const [ingredient, setIngredient] = React.useState([])
    const [selectedIngredient, setSelectedIngredient] = React.useState(null); // State to hold selected ingredient

    React.useEffect(() => {
        axios.get("http://localhost:3003/users/ingredient")
            .then(res => {
                console.log(res.data.ingredient)
                setIngredient(res.data.ingredient)

            })
    }, [])


    return (
        <Container>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
                <Stack>


                    <Typography> {diseasesName} </Typography>


                    <Typography> {selectedIngredient ? selectedIngredient.ingredient : 'Select an ingredient'} </Typography>
                    <Autocomplete
                        getOptionLabel={(option) => option.ingredient}
                        options={ingredient}
                        onChange={(e, value, reason) => {
                            //setSelectedShopType(value)
                            setSelectedIngredient(value); // Update selected ingredient

                            console.log(value)
                            // window.open("http://localhost:3000/More?ingredient=" + value.ingredient)
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

                </Stack>
            </Box>
        </Container>
    );

}

export default Result;
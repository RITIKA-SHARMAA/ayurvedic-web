import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import homeBanner from "../images/S4.png";


function Start() {


    const [diseases, setDiseases] = React.useState([])

    // State to hold selected ingredient

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + "users/diseases")
            .then(res => {
                console.log(res.data.diseases)
                setDiseases(res.data.diseases)
            })
    }, [])

    const [ingredient, setIngredient] = React.useState([])

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + "users/ingredient")
            .then(res => {
                console.log(res.data.ingredient)
                setIngredient(res.data.ingredient)
            })
    }, [])


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            pt: {xs: 0, sm: 0},
            pb: {xs: 0, sm: 21},

        }}>
            <div
                style={{
                    backgroundImage: `url(${homeBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '50vh', // Adjust as needed
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pt: {xs: 14, sm: 16},
                        pb: {xs: 0, sm: 0},

                    }}
                >
                    <Stack direction=" row " spacing={{xs: 5, sm: 2}}>
                        <Typography>
                            .............................................
                        </Typography>
                        <Typography component="h1"
                                    variant="h1"
                                    style={{
                                        color: '#EEFFFF',
                                        fontFamily: 'Poppins',
                                        fontSize: '5.0rem',
                                        textAlign: 'left'
                                    }}>
                            Welcome to the
                        </Typography>
                    </Stack>

                    <Stack direction=" row " spacing={{xs: 5, sm: 2}}>
                        <Typography>
                            .......
                        </Typography>
                        <Typography component="h1"
                                    variant="h1"
                                    style={{
                                        color: '#EEFFFF',
                                        fontFamily: 'Poppins',
                                        fontSize: '5.4rem',
                                        textAlign: 'left'
                                    }}>
                            Disease Prediction System
                        </Typography>
                    </Stack>


                </Box>
            </div>


            <Container>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>


                    <Stack direction={"column"} spacing={1}>

                        <Typography align={"center"}>
                            Search your diseases
                        </Typography>

                        <Autocomplete
                            getOptionLabel={(option) => option.diseases}
                            options={diseases}
                            onChange={(e, value, reason) => {
                                //setSelectedShopType(value)
                                console.log(value)
                                window.open("http://localhost:3000/Result?diseases=" + value.diseases + "&id=" + value.id)

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


                        {/*<Autocomplete
                        getOptionLabel={(option) => option.ingredient}
                        options={ingredient}
                        onChange={(e, value, reason) => {
                            //setSelectedShopType(value)
                            console.log(value)
                            window.open("http://localhost:3000/More?ingredient=" + value.ingredient)
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
*/}

                    </Stack>
            </Box>
        </Container>
        </Box>


    )
}

{/*<Stack direction =" row " spacing={{ xs: 5, sm: 2 }}>
                    <Typography >
                        ..............................................................
                    </Typography>
                    <Typography component="h1"
                                variant="h1"
                                style={{ color: '#EEFFFF', fontFamily: 'Poppins' ,  fontSize: '5.0rem', textAlign: 'left'}} >
                       System
                    </Typography>
                    </Stack>*/
}

export default Start;


/*
const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
    const [value, setValue] = React.useState(null);

    return (
        <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <Stack direction={"column"} spacing={3}>
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                    setValue({
                        title: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                        title: newValue.inputValue,
                    });
                } else {
                    setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.title);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                    return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                    return option.inputValue;
                }
                // Regular option
                return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label="Free solo with text demo" />
            )}
        />
                </Stack>
        </Box>
        </Container>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },];

 */
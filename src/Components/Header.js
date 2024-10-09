import * as React from 'react';
import {Avatar, PaletteMode, Stack} from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "@mui/material/Link";
import {ReactComponent as YourSvg} from '../images/logo.svg';
import {createTheme, ThemeProvider} from "@mui/material/styles";

// import App.theme from '../LandingPage/mainPage';

interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

function AppAppBar({mode, toggleColorMode}: AppAppBarProps) {

    const defaultTheme = createTheme({
        typography: {
            fontFamily: 'Josefin Sans', color: '#fff3e0',
            allVariants: {
                color: '#4D5D43',
            }
        }
    });


    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({behavior: 'smooth'});
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <AppBar
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 2,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    variant="regular"
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        borderRadius: '999px',
                        //backdropFilter: 'blur(10px)',

                        maxHeight: 400,
                        borderColor: 'divider'
                    })}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            ml: '-200px',
                            px: 0,
                        }}
                    >
                        <Stack direction="row" spacing={6}>

                            <Avatar alt="Logo"
                                    sx={{width: 50, height: 50, bgcolor: '#fff3e0'}}>
                                <YourSvg/>
                        </Avatar>


                            <Box sx={{display: {xs: 'none', md: 'flex'}}}>

                                <Stack direction="row" spacing={6}>
                            <Link
                                style={{textDecoration: 'none'}}
                                color="inherit"
                                href="/Home"
                                sx={{display: "block"}}
                            >
                                <MenuItem
                                    onClick={() => scrollToSection('testimonials')}
                                    sx={{py: '6px', px: '12px'}}
                                >
                                    <Typography variant="body2" style={{
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: 'bold',
                                        fontSize: '1.7rem'
                                    }}>
                                        Home
                                    </Typography>

                                </MenuItem>
                            </Link>

                            <Link
                                style={{textDecoration: 'none'}}
                                color="inherit"
                                href="/Start"
                                sx={{display: "block"}}
                            >
                                <MenuItem
                                    onClick={() => scrollToSection('testimonials')}
                                    sx={{py: '6px', px: '12px'}}
                                >
                                    <Typography variant="body2" style={{
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: 'bold',
                                        fontSize: '1.7rem'
                                    }}>
                                        Start
                                    </Typography>

                                </MenuItem>
                            </Link>

                                    <ThemeProvider theme={window.location.pathname === "/Result" ? defaultTheme : ''}>
                                        <ThemeProvider
                                            theme={window.location.pathname === "/About" ? defaultTheme : ''}>
                                            <ThemeProvider
                                                theme={window.location.pathname === "/ChatBot" ? defaultTheme : ''}>


                                                <Link
                                                    style={{textDecoration: 'none'}}
                                color="inherit"
                                href="/About"
                                sx={{display: "block"}}
                            >
                                <MenuItem
                                    onClick={() => scrollToSection('testimonials')}
                                    sx={{py: '6px', px: '12px'}}
                                >
                                    <Typography variant="body2" style={{
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: 'bold',
                                        fontSize: '1.7rem'
                                    }}>
                                        About
                                    </Typography>

                                </MenuItem>
                            </Link>


                            <Link
                                style={{textDecoration: 'none'}}
                                color="inherit"
                                href="/More"
                                sx={{display: "block"}}
                            >
                                <MenuItem
                                    onClick={() => scrollToSection('testimonials')}
                                    sx={{py: '6px', px: '12px'}}
                                >
                                    <Typography variant="body2" style={{
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: 'bold',
                                        fontSize: '1.7rem'
                                    }}>
                                        More
                                    </Typography>

                                </MenuItem>
                            </Link>

                            <Link
                                style={{textDecoration: 'none'}}
                                color="inherit"
                                href="/ChatBot"
                                sx={{display: "block"}}
                            >
                                <MenuItem
                                    onClick={() => scrollToSection('testimonials')}
                                    sx={{py: '6px', px: '12px'}}
                                >
                                    <Typography variant="body2" style={{
                                        fontFamily: 'Josefin Sans',
                                        fontWeight: 'bold',
                                        fontSize: '1.7rem'
                                    }}>
                                        Chatbot
                                    </Typography>

                                </MenuItem>
                            </Link>
                                            </ThemeProvider>
                                        </ThemeProvider>
                                    </ThemeProvider>

                                </Stack>
                        </Box>
                        </Stack>

                    </Box>

                    <Box sx={{display: {sm: '', md: 'none'}}}>
                        <Button
                            variant="text"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{minWidth: '30px', p: '4px'}}
                        >
                            <MenuIcon/>
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppAppBar;
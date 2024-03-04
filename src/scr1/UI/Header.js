import * as React from 'react';
import {PaletteMode} from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

function AppAppBar({mode, toggleColorMode}: AppAppBarProps) {
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
                        bgcolor:
                            theme.palette.mode === 'light'
                                ? 'rgb(236,250,229)'                  //color scheme
                                : 'rgb(63,84,41)',
                        backdropFilter: 'blur(24px)',
                        maxHeight: 400,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 1px rgba(221,243,209), 1px 1.5px 2px -1px rgba(236,250,229), 4px 4px 12px -2.5px rgba(236,250,229)`
                                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                    })}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            ml: '-18px',
                            px: 0,
                        }}
                    >
                        <img
                            src={
                                'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                            }
                            style={logoStyle}
                            alt="logo of sitemark"
                        />
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <MenuItem
                                onClick={() => scrollToSection('features')}
                                sx={{py: '6px', px: '12px'}}

                                // TODO change with the other pages
                            >
                                <Typography variant="body2" color="text.primary">
                                    Features
                                </Typography>
                            </MenuItem>

                            <MenuItem
                                onClick={() => scrollToSection('testimonials')}
                                sx={{py: '6px', px: '12px'}}
                            >
                                <Typography variant="body2" color="text.primary">
                                    Testimonials
                                </Typography>
                            </MenuItem>

                            <MenuItem
                                onClick={() => scrollToSection('highlights')}
                                sx={{py: '6px', px: '12px'}}
                            >
                                <Typography variant="body2" color="text.primary">
                                    Highlights
                                </Typography>
                            </MenuItem>

                            <MenuItem
                                onClick={() => scrollToSection('pricing')}
                                sx={{py: '6px', px: '12px'}}
                            >
                                <Typography variant="body2" color="text.primary">
                                    Pricing
                                </Typography>
                            </MenuItem>

                            <MenuItem
                                onClick={() => scrollToSection('faq')}
                                sx={{py: '6px', px: '12px'}}
                            >
                                <Typography variant="body2" color="text.primary">
                                    FAQ
                                </Typography>
                            </MenuItem>
                        </Box>
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
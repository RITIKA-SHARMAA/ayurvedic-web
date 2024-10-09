import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color='#F9F5D3'>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'block',
            }}
        >

            <Box
                component="footer"
                sx={{
                    backgroundColor: '#4D5D43'
                }}
            >
                <Container>
                    <Typography color='#F9F5D3'>
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </Box>
    );
}





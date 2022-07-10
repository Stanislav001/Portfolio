import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';

import errorPageImage from '../images/errorPageImage.jpg';

export default function NotFoundPage() {
    const navigate = useNavigate();

    function goToHomePage() {
        navigate('/')
    }

    return (
        <Card sx={{ maxWidth: 500, margin: 'auto', width: '50%', marginTop: '10%', boxShadow: '0px 0px 15px 7px #9B9B9B' }}>
            <CardMedia
                component="img"
                alt="Error Image"
                image={errorPageImage}
            />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h3" component="div">
                    404
                </Typography>
                <Typography variant="h3" color="text.secondary" sx={{ fontSize: '25px' }}>
                    Something went WRONG!
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                    sx={{ color: 'white' }}
                    className='marker-drawer-time-btn'
                    size="small"
                    onClick={goToHomePage}
                >Back to home page</Button>
            </CardActions>
        </Card>
    )
}
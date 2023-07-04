import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Fluride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services =[
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum slkk dkgigisd dsklmaro gosf dosgo dsjskd dkjflkds dksoalewp lspwf',
        img : Fluride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum slkk dkgigisd dsklmaro gosf dosgo dsjskd dkjflkds dksoalewp lspwf',
        img : Cavity
    },
    {
        name: 'Whetening',
        description: 'Lorem ipsum slkk dkgigisd dsklmaro gosf dosgo dsjskd dkjflkds dksoalewp lspwf',
        img : Whitening
    },
]

const Services = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{fontWeight:500, m:5, color: 'success.main'}} color="text.secondary">
                OUR SERVICES
            </Typography>
            <Typography variant="h4" sx={{fontWeight:600}} color="text.secondary">
                Services we provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <Service
                    service={service}
                    ></Service>
                </Grid>
                ))}
            </Grid>
    </Box>
        </Container>
    );
};

export default Services;
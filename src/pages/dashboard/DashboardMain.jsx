import React, { useEffect, useState } from 'react';
import {  Box, Grid } from '@mui/material';
import ActorCard from './components/ActorCard';
import { styled } from '@mui/system';
import FilterSidebar from './components/FilterSidebar';
import backgroundImage1 from '../../assets/images/appbar_background.png';
import { getActors } from '../../services/authService';
import { toast } from 'react-toastify';

const DashboardContainer = styled(Box)({
    display: 'grid',
    borderRadius: '16px',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.6)), url(${backgroundImage1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    // minHeight: '100vh',
    boxSizing: 'border-box'
});



const CardContainer = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(2)
}));

const Dashboard = () => {
    const [filter, setFilter] = useState({
        name: '',
        appearance: '',
        height: '',
        weight: ''
    });

    const [actors, setActors] = useState([]);

    useEffect(() => {
        getActors() .then((data) => {
            console.log(data);
            setActors(data);
          })
          .catch((err) => {
            console.log('error : ' + err.message);
            toast.error(err.message);
          });
    }, []);

    // const actors = [
    //     { id: 1, name: 'Adam Smith', appearance: 'Blonde', height: '5\'9"', weight: '150lbs', image: 'https://source.unsplash.com/random?portrait_male' },
    //     { id: 2, name: 'Anna Hannah', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?portrait_female' },
    //     { id: 3, name: 'David Joseph', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?portrait_man' },
    //     { id: 4, name: 'Janah George', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?portrait_woman' },
    //     { id: 5, name: 'Carlos Rowe', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?portrait_boy' },
    //     { id: 6, name: 'Robert Berry', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?portrait_girl' },
    //     { id: 7, name: 'Wilbert Day', appearance: 'Blonde', height: '5\'9"', weight: '150lbs', image: 'https://source.unsplash.com/random?portrait_old' },
    //     { id: 8, name: 'Anna Hannah', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?portrait_color' },
    //     { id: 9, name: 'Ed Flowers', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?actor' },
    //     { id: 10, name: 'Reginald Bowers', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?actress' },
    //     { id: 11, name: 'Roxanne Rhodes', appearance: 'Brunette', height: '5\'5"', weight: '130lbs', image: 'https://source.unsplash.com/random?man' }
    // ];

    return (
        <div>
            <DashboardContainer style={{justifyContent: 'center'}}>
                <FilterSidebar filter={filter} setFilter={setFilter} style={{minHeight: '10vh',}} />
                <Box sx={{
                    padding: '16px',
                    flex: 1,
                }}>
                    <CardContainer container>
                    {actors
                            .filter(actor =>
                                (!filter.name || actor.firstName.toLowerCase().includes(filter.name.toLowerCase())) &&
                                (!filter.appearance || actor.appearance.toLowerCase().includes(filter.appearance.toLowerCase())) &&
                                (!filter.height || actor.height.toLowerCase().includes(filter.height.toLowerCase())) &&
                                (!filter.weight || actor.weight.toLowerCase().includes(filter.weight.toLowerCase()))
                            )
                            .map(actor => <ActorCard key={actor.id} actor={actor} />)
                        }
                      
                    </CardContainer>
                </Box>
            </DashboardContainer>
        </div>
    );
};

export default Dashboard;
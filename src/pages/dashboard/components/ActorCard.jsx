import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 18px 0 rgba(0, 0, 0, 0.1)'
  }
}));

const StyledCardMedia = styled(CardMedia)({
  width: 150,
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '4px 0 0 4px'
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

const ActorName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(1)
}));

const ActorDetail = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(0.5),
  '& span:first-child': {
    fontWeight: 500
  }
}));

const ActorCard = ({ actor }) => (
  <StyledCard elevation={2}>
    <StyledCardMedia component="img" src={actor.profileImage} title={actor.firstName} />
    <StyledCardContent>
      <ActorName variant="h6">{actor.firstName+" "+actor.lastName}</ActorName>
      <ActorDetail>
        <span>ProfessionalSkills : {actor.professionalSkills}</span>
      </ActorDetail>
      <ActorDetail>
        <span>Height:</span>
        <span>{actor.height}</span>
      </ActorDetail>
      <ActorDetail>
        <span>Weight:</span>
        <span>{actor.weight}</span>
      </ActorDetail>
    </StyledCardContent>
  </StyledCard>
);

export default ActorCard;

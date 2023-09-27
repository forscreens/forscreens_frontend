import { Input, InputAdornment, Paper, TextField, Typography, Divider, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

const FilterSidebar = ({ setFilter, filter }) => {
    return (
        <Paper md={4} elevation={3} style={{ maxWidth: '750px', padding: '16px', background: 'transparent', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <div style={{ marginRight: '16px' }}>
        <Typography variant="h6 " gutterBottom>
            Filter Actors
        </Typography>
        <Divider light />
    </div>

    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Box m={2} mb={2}>
            <TextField
                fullWidth
                variant="outlined"
                size="medium"
                label="Name"
                value={filter.name}
                onChange={e => setFilter({ ...filter, name: e.target.value })}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>

        <Box mb={2} mt={2}>
            <TextField
                fullWidth
                variant="outlined"
                size="medium"
                label="Appearance"
                value={filter.appearance}
                onChange={e => setFilter({ ...filter, appearance: e.target.value })}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>

        {/* ... other filters */}
    </div>
</Paper>

    );
};

export default FilterSidebar;

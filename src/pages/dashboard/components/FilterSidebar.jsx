import { Input, InputAdornment, Paper, TextField, Typography, Divider, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

const FilterSidebar = ({ setFilter, filter }) => {
    return (
        <Paper elevation={3} style={{ width: '250px', padding: '16px', background: 'transparent' }}>
            <Typography variant="h6" gutterBottom>
                Filter Actors
            </Typography>
            <Divider light />

            <Box mt={2} mb={2}>
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

            <Box mb={2}>
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

        </Paper>
    );
};

export default FilterSidebar;

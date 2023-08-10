import React from 'react';
import { Tab, Tabs, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Define the CSS-in-JS styled components
const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 8rem;
`;

const Header = styled.h4`
  /* Add your styles here */
`;

const JobTileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px; 
`;

const JobTile = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    max-width: 550px;
    flex: 1 0 250px; /* Previously defined flex properties */
    flex-grow: 1;    /* New property */
`;

function FeaturedJobs() {
    const jobs = [
        {
          title: 'Job Title 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.'
        },
        {
          title: 'Job Title 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.'
        },
        {
          title: 'Job Title 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.'
        }
      ];

  return (
    <Container>
      <Header>Featured jobs</Header>
      <Tabs defaultActiveKey="actors" id="featured-jobs">
        <Tab eventKey="actors" title="Actors">
          <JobTileContainer>
            {jobs.map((job, index) => (
              <JobTile key={index}>
                <h5>{job.title}</h5>
                <p>{job.description.substring(0, 250)}...</p>
                <Button variant="primary" href="/apply">View and apply</Button>
              </JobTile>
            ))}
          </JobTileContainer>
        </Tab>
        <Tab eventKey="crew" title="Crew">
          <JobTileContainer>
            {jobs.map((job, index) => (
              <JobTile key={index}>
                <h5>{job.title}</h5>
                <p>{job.description.substring(0, 250)}...</p>
                <Button variant="primary" href="/apply">View and apply</Button>
              </JobTile>
            ))}
          </JobTileContainer>
        </Tab>        
        {/* Repeat <Tab> component for each category */}
      </Tabs>
    </Container>
  );
}

export default FeaturedJobs;

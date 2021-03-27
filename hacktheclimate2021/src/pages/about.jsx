import React, { useContext, useEffect } from 'react';
import Navi from "../components/navi";
import { Box, Grid, ResponsiveContext } from 'grommet';
import TeamMemberCard from '../components/teamMembers/teamMemberCard';
import Team from '../components/teamMembers';

const AboutPage = () => {
    useEffect(() => {
    document.title = "About"
}, [])
    const size = useContext(ResponsiveContext);

    return (
        <>
            <Navi />
            <Box pad='xlarge' margin='xxsmall' >
            <Grid columns={size !== 'small' ? 'small' : '100%' } alignSelf='center' pad='small' margin="xxsmall">
                {
                    Team.map((member, index) => <TeamMemberCard key={ index } member={ member }/>)
                }
            </Grid>
            </Box>
        
        </>
    );
};

export default AboutPage;
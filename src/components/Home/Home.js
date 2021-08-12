import { Grid } from '@material-ui/core';
import List from './List';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div>
            <Grid>
                <Sidebar />
                <List/>
            </Grid>
        </div>
    );
};

export default Home;

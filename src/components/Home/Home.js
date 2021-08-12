import { Grid } from '@material-ui/core';
import List from './List';
import Sidebar from './Sidebar';
import Carousel from './carousel'

const Home = () => {
    return (
        <div>
            <Grid>
                <Carousel />
                <Sidebar />
                <List/>
            </Grid>
        </div>
    );
};

export default Home;

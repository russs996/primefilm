import { Grid } from '@material-ui/core';
import List from './List';
import { Pagination } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import Sidebar from './Sidebar';
import Carousel from './carousel'

const Home = () => {
    const history = useHistory()
    const [page, setPage] = useState(1, getPage())
    const { getProducts, paginatedPages } = useContext(clientContext)
    function getPage() {
        const search = new URLSearchParams(history.location.pathname)
        return search.get("_page")
    }
    useEffect(() => {
        getProducts(history)
    }, [])

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?_page=8&${search.toString()}`)
        setPage(page)
        getProducts(history)

    }

    return (
        <div>
            <Grid>
                <Carousel />
                <Sidebar />
                <List />
            </Grid>
            <Pagination count={paginatedPages} page={+page} onChange={handlePage} shape="rounded" style={{ marginBottom: '80px', display: 'flex', justifyContent: 'center' }} />
        </div>
    );
};

export default Home;

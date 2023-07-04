
import './App.css';
import { styled } from 'styled-components';
import { Card, Divider, Space } from 'antd';
import Filter from './components/Filter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ListCustomer from './components/ListCustomer';


const Wrapper = styled.div`
    padding: 8px;
`;
const App = () => (
    <Wrapper>
        <Filter />
        {/* <Divider style={{margin:'10px 0'}} /> */}
        <Header />
        {/* <Divider style={{margin:'10px 0'}} /> */}
        <div className='body'>
            <Sidebar />
            <ListCustomer />
        </div>
    </Wrapper>
);
export default App;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListCard from '../ListCard/ListCard';

const ListTabs = ({readList, wishList}) => {
    console.log(readList, wishList)
    return (
    <Tabs>
        <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
            <div className='grid grid-cols-1 gap-6 mt-6'>
                {
                    readList?.map((list, idx) => <ListCard list={list} key={idx}/>)
                }
            </div>
        </TabPanel>

        <TabPanel>
            <div className='grid grid-cols-1 gap-6 mt-6'>
                {
                    wishList?.map((list, idx) => <ListCard list={list} key={idx}/>)
                }
            </div>
        </TabPanel>
    </Tabs>
    );
};

export default ListTabs;
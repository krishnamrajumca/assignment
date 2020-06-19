import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector } from "react-redux";
import {fetchPosts,selectedUser} from './reducers/actions'
import {TabView,TabPanel} from 'primereact/tabview';
import Users from './users'
import UserProfile from './userProfile'
const Home = () =>{
   const [activeIndex,setIndex] = useState(0)
   const user = useSelector(state => state.postsReducer.selectedUser)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    const userCallback =(user) =>{
        console.log(user);
        setIndex(1);
        dispatch(selectedUser(user))
        
    }
    const isUserNotSelected = user ? false:true;
    console.log(isUserNotSelected)
    return(
        <div>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setIndex(e.index)}>
                <TabPanel header="Users" contentClassName="tab-panel">
                    <Users callback={userCallback}/>
                </TabPanel>
                <TabPanel header="User Profile"  contentClassName="tab-panel" disabled={isUserNotSelected}>
                    <UserProfile/>
                </TabPanel>
                
            </TabView>
        </div>
    )
}

export default Home
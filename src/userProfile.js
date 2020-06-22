import React,{useState} from 'react';
import {useDispatch,useSelector } from "react-redux";
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {updateUser} from './reducers/actions'

const UserProfile = ()=>{
    const user = useSelector(state => state.postsReducer.selectedUser);
    const [first_name,setFirstName] = useState(user.first_name)
    const [last_name,setLastName] = useState(user.last_name)
    const [email,setEmail] = useState(user.email)
    const [address1,setAddress1] = useState('')
    const [address2,setAddress2] = useState('')
    const [city,setCity] = useState('')
    const dispatch = useDispatch();
   
    const submit =()=>{
        const data = {
            first_name,
            last_name,
            email,
            address1,
            address2,
            city
        }
        console.log(data);
        dispatch(updateUser(data,user.id))
    }
    return(
        <div>
            <div className="p-grid p-col-12">
                <div className="p-col-4 p-md-4 p-sm-6">
                   <InputText id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                </div>
                <div className="p-col-3 p-md-4 p-sm-6">
                    <InputText value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                </div>
                <div className="p-col-3 p-md-4 p-sm-6">
                    <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                </div>
            </div>
            <div className="p-grid p-col-12">
                <div className="p-col-3 p-md-4 p-sm-6">
                    <InputText value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Address 1"/>
                </div>
                <div className="p-col-3 p-md-4 p-sm-6">
                    <InputText value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Address 2"/>
                </div>
                <div className="p-col-3 p-md-4 p-sm-6">
                    <InputText value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"/>
                </div>
            </div>
            <div className="p-col-12 p-grid  p-align-end p-justify-end">
            <Button label="Submit" onClick={submit} />
            </div>
        </div>
    )
}

export default UserProfile
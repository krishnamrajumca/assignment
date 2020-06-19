import React from 'react'
import { useSelector } from "react-redux";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column'

const Users = ({callback}) =>{
    const users = useSelector(state => state.postsReducer.users);
    return(
        <div>
           <DataTable value={users} selectionMode="single" onSelectionChange={e => callback(e.value)} responsive={true} header="Responsive">
                <Column field="first_name" header="First Name" sortable={true} />
                <Column field="last_name" header="Last Name" sortable={true}  />
                <Column field="email" header="email" />
                
            </DataTable>
        </div>
    )
}

export default Users
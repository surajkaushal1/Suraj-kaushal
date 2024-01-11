import React from 'react';
import MainDash from './admin/components/MainDash/MainDash';
import Sidebar from './admin/components/Sidebar'

const AdminDashboard = () => {
    return (
        <>
            <div className="App mt-5">
                <div className='AppGlass'>
                    <Sidebar/>
                    <MainDash/>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
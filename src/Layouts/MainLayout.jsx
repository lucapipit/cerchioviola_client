import React from 'react';
import _Navbar from '../components/_Navbar';

const MainLayout = ({ children }) => {
    return (

        <>
            <_Navbar />
            <main className='w-100' style={{height: "calc(100vh - 66px"}}>
                {children}
            </main>
        </>

    )
}

export default MainLayout
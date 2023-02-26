import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';

function Layout({children}) {
    return (
        <div className="h-screen flex flex-row justify-start ">
            {/* <TopBar/> */}
            <SideBar/>
            <main className="flex-1 p-4 pt-0 text-white main">
                {children}
            </main>
        </div>
    );
}

export default Layout;
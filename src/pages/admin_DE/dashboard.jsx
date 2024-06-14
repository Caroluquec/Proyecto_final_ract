import React from 'react'

import Sidebar from "./sidebar";
import Topbar from './topbar';
import Heading from './heading';
import Rowone from './rowone';
import Rowtwo from './rotwo';
import Rowthree from './rowtrhee';
import Footer from './Footer';

function Dashboard() {
    return(
        <>

            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar/>
                        <div class="container-fluid">
                        <Heading/>
                        <Rowone/>
                        <Rowtwo/>
                        <Rowthree/>
                        </div>
                        <Footer/>
                    

                    </div>
                </div>
            </div>
            
            
        </>
    )

}

export default Dashboard;
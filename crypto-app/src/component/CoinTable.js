
import React, { Suspense } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Main from './Main';
import NavBar from './NavBar';


// const Main = React.lazy(()=>import('./Main'))
function CoinTable() {
    console.log(Main);

   
    return (
        <div>
            <NavBar/>
            
            <Main/>
          
            

            {/* <Test/> */}
        </div>
    )
}

export default CoinTable
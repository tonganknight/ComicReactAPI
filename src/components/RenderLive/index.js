import React, {useState} from 'react';
import FirstView from '../FirstView';
import SecondView from '../SecondView';
import Nav from '../Nav';


function Renderlive() {
    const [currentPage, handlePageChange] = useState('FirstView');

    const renderPage =() =>{
        switch (currentPage) {
            case 'FirstView':
                return <FirstView />;
            case 'SecondView':
                return <SecondView />;
            default: 
                return <FirstView />;
        }
    };

    return (
        <div> 
           <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
    )
}

export default Renderlive;




import React from 'react';

function Nav({currentPage, handlePageChange}) {

const tabs = ['FirstView', 'SecondView']
return(
    <nav>
        {tabs.map(tab => (
                    <div key={tab} ><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlePageChange(tab) }
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link'
                    } >{tab}</a></div>
                ))}
        </nav>
)
}
export default Nav
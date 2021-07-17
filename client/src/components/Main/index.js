import React from 'react';
import { Breakpoint } from 'react-socks';
import styled from 'styled-components';

class Main extends React.Component{



    render(){

    const Searchbar = styled.input`
    height: 25px;
    width: 500px;
    margin-left: 12%;
    margin-top: 25px;
    `
    const SearchAndIfno = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;`

    const SearchButton = styled.button`
    height: 40px;
    width: 80px;
    font-weight: bold;
    font-size: large;
    color: white;
    background-color: #007bff;
    border-radius: 12px;
    margin-left:10px;
    margin-top: 18px;
    `

    const PageInfoFlex = styled.div`
    display: Flex;
    flex-direction: column;
    margin-left: 12%;
    `
    const ResultsUI = styled.div`
     display: flex;
     width: 75%;
     border: solid black;
     height: 700px;
     margin-left: 10%;`

     const Resultpic = styled.div`
     height: 95%;
     width: 40%;
     margin: 15px;
     border: solid black`
    

        return(
        <div>
        <Breakpoint large up>
            <SearchAndIfno>
            <Searchbar/>
            <SearchButton>Search</SearchButton>
            <PageInfoFlex>
                <h1>About Comic Portal</h1>
                <p>Search for a Comic Book Character. 
                    They can be: Hero, villain, Boy, Girl, Angry Robot, or Zombie.
                    <br>
                    </br>
                    You can search of obscure characters, or well known Legends.
                    <br>
                    </br>
                    Below you will see your search results displayed. You see some info that 
                    you didn't know!  
                </p>
            </PageInfoFlex>
            </SearchAndIfno>

            <ResultsUI>
                <Resultpic/>
            </ResultsUI>


          
        </Breakpoint>
        </div>

        
    )
 }
}

export default Main
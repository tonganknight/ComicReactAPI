import React from 'react';
import { Breakpoint } from 'react-socks';
import styled from 'styled-components';


function Main(){

    function Search() {
        var SearchInput = document.getElementById("SearchText").value;
        SearchInput = SearchInput.trim();
        console.log("the search was for " + SearchInput)

        const apiCallComicVine = "https://comicvine.gamespot.com/api/characters/?api_key=5db77536d2105f1cd093dac32687fb4614aa9165&filter=name:" + SearchInput

        fetch(apiCallComicVine).then(function(response) {
            if (response.ok) {
                response.json().then(function(data){
                    console.log(data);
                })
            }
        })
     
    }



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
            <Searchbar id="SearchText"/>
            <SearchButton id="SearchBtn" onClick={Search}>Search</SearchButton>
            <PageInfoFlex>
                <h1>About Comic Portal</h1>
                <p>Search for a Comic Book Character. 
                    They can be: Hero, villain, Boy, Girl, Angry Robot, or Zombie.
                    <br>
                    </br>
                    You can search of obscure characters, or well known Legends.
                    <br>
                    </br>
                    Below you will see your search results displayed. You might see some info that 
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



export default Main
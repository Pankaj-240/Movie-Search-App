const key=1;



const title =document.querySelector("#title");
const rating =document.querySelector("#rating");
const genre=document.querySelector("#genre");
const actors=document.querySelector("#actors");
const plot=document.querySelector("#plot");
const poster = document.querySelector("#poster");
const search_Btn =document.querySelector("#search_Btn");
const search_Input =document.querySelector("#search_Input");



search_Btn.addEventListener("click",()=>{
    let movie_name= search_Input.value;
    const url=`https://www.omdbapi.com/?t=${movie_name}&plot=full&apikey=7f47f75b`;
    getData(url)
})
async function getData(url) {
    try{
    let req= await fetch(url);
    let data=await req.json();

    title.innerText=data.Title +`(${data.Year})`;
    rating.innerHTML="Rating : "+data.imdbRating;
       
    genre.innerText=data.Genre;
    
    actors.innerText=data.Actors; 
    
    plot.innerText=data.Plot;  

    poster.setAttribute("src",data.Poster)
    console.log(data.Poster);        
      
    }

    catch(err){
        console.log(err);
    }
}



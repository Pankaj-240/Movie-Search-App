const key=1;

const url="https://www.omdbapi.com/?t=avengers&plot=full&apikey=7f47f75b";

async function getData() {
    try{
    let req= await fetch(url);
    let data=await req.json();
    console.log(data);        
    console.log(data.Poster);        
    console.log(data.Title);        
    console.log(data.imdbRating);        
    console.log(data.Year);        
    console.log(data.Runtime);        
    console.log(data.Genre);        
    console.log(data.Actors);        
    console.log(data.Plot);        
    }

    catch(err){
        console.log(err);
    }
}

getData();


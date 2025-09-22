const title = document.querySelector("#title");
const rating = document.querySelector("#rating");
const genre = document.querySelector("#genre");
const actors = document.querySelector("#actors");
const plot = document.querySelector("#plot");
const poster = document.querySelector("#poster");
const search_Btn = document.querySelector("#search_Btn");
const search_Input = document.querySelector("#search_Input");
const fav_btn = document.querySelector(".fav_btn");
const movie_Card = document.querySelector(".movie_Card");
const heart = document.querySelector("#heart");

movie_Card.style.display = "none";

if (!localStorage.getItem("movies_list")) {
  localStorage.setItem("movies_list", JSON.stringify([]));
}

let currentMovie = null;
let heart_btn = null;

search_Btn.addEventListener("click", () => {
  let movie_name = search_Input.value;
  if (movie_name == "") {
    alert("Enter a Movie name");
  } else {
    const url = `https://www.omdbapi.com/?t=${movie_name}&apikey=7f47f75b`;
    getData(url);
  }
});
async function getData(url) {
  try {
    let req = await fetch(url);
    let data = await req.json();

    title.innerText = data.Title + `(${data.Year})`;

    rating.innerHTML = "<b>imdb Rating :</b> " + data.imdbRating;

    genre.innerHTML = "<b>Genre :</b> " + data.Genre;

    actors.innerHTML = "<b>Actors :</b> " + data.Actors;

    plot.innerHTML = "<b>Plot : </b>" + data.Plot;

    poster.setAttribute("src", data.Poster);

    currentMovie = data.Title;
    check_fav();
    movie_Card.style.display = "inline-block";
  } catch (err) {
    console.log(err);
  }
}

fav_btn.addEventListener("click", () => {
  push_fav_movie(currentMovie);
});

function push_fav_movie(movie_name) {
  let arr = JSON.parse(localStorage.getItem("movies_list")) || [];
  if (!arr.includes(movie_name)) {
    arr.push(movie_name);
    localStorage.setItem("movies_list", JSON.stringify(arr));
  } else {
    console.log(movie_name + " is already in favorites!");
  }
  check_fav();
}

function check_fav(){
    let arr = JSON.parse(localStorage.getItem("movies_list"));
    if(arr.includes(currentMovie) && !heart_btn){
      heart.style.fill="red";
      heart_btn=true;
    }
    else{
      heart.style.fill="whitesmoke";
      arr = arr.filter(item => item !== currentMovie);
      localStorage.setItem("movies_list",JSON.stringify(arr));
      heart_btn=null;
    }
}
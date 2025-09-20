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

movie_Card.style.display = "none";

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

    console.log(data);

    title.innerText = data.Title + `(${data.Year})`;

    rating.innerHTML = "<b>imdb Rating :</b> " + data.imdbRating;

    genre.innerHTML = "<b>Genre :</b> " + data.Genre;

    actors.innerHTML = "<b>Actors :</b> " + data.Actors;

    plot.innerHTML = "<b>Plot : </b>" + data.Plot;

    poster.setAttribute("src", data.Poster);

    fav_btn.addEventListener("click", () => {
    
    });
    movie_Card.style.display = "inline-block";
  } catch (err) {
    console.log(err);
  }
}

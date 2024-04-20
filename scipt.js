// $(".searchButton").on("click", function () {
//   $.ajax({
//     url: `http://www.omdbapi.com/?apikey=8a3bed7e&s=${$(".input-key").val()}`,
//     success: (respon) => {
//       const movie = respon.Search;

//       const movies = movie
//         .map((el) => {
//           return cardTemplate(el);
//         })
//         .join("");
//       document.querySelector(".cards").innerHTML = movies;

//       $(".detail-button").on("click", function () {
//         $.ajax({
//           url: `http://www.omdbapi.com/?apikey=8a3bed7e&i=${$(this).data(
//             "imdbid"
//           )}`,
//           success: (respon) => {
//             const detailMovie = movieDetailTemplate(respon);
//             $(".modal-body").html(detailMovie);
//           },
//           error: (error) => {
//             console.log(error.responseText);
//           },
//         });
//       });
//     },
//     error: (error) => {
//       console.log(error.responseText);
//     },
//   });
// });

function cardTemplate(el) {
  return `
        <div class="col-md-4 my-4">
            <div class="card">
              <img src="${el.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${el.Title}</h5>
                <h5 class="card-year">${el.Year}</h5>
                <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal"
                data-bs-target="#detailButton" data-imdbid="${el.imdbID}">Show Detail</a>
              </div>
            </div>
          </div>
        `;
}

function movieDetailTemplate(respon) {
  return `
                              <div class="container-fluid">
                              <div class="row">
                              <div class="col-md-3">
                                      <img src="${respon.Poster}" class="img-fluid" />                                 
                                  </div>

                                  <div class="col-md">
                                    <ul class="list-group">
                                      <li class="list-group-item"><h5>${respon.Title} (${respon.Year})</h5></li>
                                      <li class="list-group-item">
                                        <strong>Director : </strong> ${respon.Director}
                                      </li>
                                      <li class="list-group-item">
                                        <strong>Actors : </strong> ${respon.Actors}
                                      </li>
                                      <li class="list-group-item">
                                        <strong>Writer : </strong> ${respon.Writer}
                                      </li>
                                      <li class="list-group-item">
                                        <strong>Plot : </strong> <br />
                                        ${respon.Plot}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                </div>
            `;
}
function getMovie(data) {
  return fetch(`http://www.omdbapi.com/?apikey=8a3bed7e&s=${data}`)
    .then((respon) => respon.json())
    .then((respon) => respon.Search);
}

// document.querySelector(".searchButton").addEventListener("click", function () {
//   fetch(
//     `http://www.omdbapi.com/?apikey=8a3bed7e&s=${
//       document.querySelector(".input-key").value
//     }`
//   )
//     .then((respon) => respon.json())
//     .then((respon) => {
//       const movie = respon.Search;
//       const movies = movie
//         .map((el) => {
//           return cardTemplate(el);
//         })
//         .join("");

//       document.querySelector(".cards").innerHTML = movies;

//       document.querySelectorAll(".detail-button").forEach((el) => {
//         el.addEventListener("click", function () {
//           fetch(
//             `http://www.omdbapi.com/?apikey=8a3bed7e&i=${this.dataset.imdbid}`
//           )
//             .then((respon) => respon.json())
//             .then((respon) => {
//               const movieDetail = movieDetailTemplate(respon);

//               document.querySelector(".modal-body").innerHTML = movieDetail;
//             })
//             .catch((respon) => console.log(respon));
//         });
//       });
//     })
//     .catch((respon) => console.log(respon));
// });

document
  .querySelector(".searchButton")
  .addEventListener("click", async function () {
    const movie = await getMovie(document.querySelector(".input-key").value);
    console.log(movie);
  });

function reverseString(s) {
    return s.split("").reverse().join("");
  }
  
  window.onload = function () {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
            const bodyElement = document.querySelector("body")
            if (xhr.status == 200) {
                const profInfo = JSON.parse(xhr.responseText);
  
  
  
  
            for (let count = 0; count <  profInfo.length; count++){
  
  
                const articleElement = document.createElement("article")
                const imgElement = document.createElement("img")
                const h1ElementTitle = document.createElement("h1")
                const editButton = document.createElement("Button")              
                const pElementEditButton = document.createElement("p")
  
                const pElement = document.createElement("p")
                const pElementpForDescription = document.createElement("p")
                const pElementpElementForGenre = document.createElement("p")
  
                const h2ElementpForDirectorsTitle = document.createElement("h2")
                const listElementlistOfDirectors = document.createElement("ul")
  
                const h2ElementpForWritersTitle = document.createElement("h2")
                const listElementlistOfWriters = document.createElement("ul")
  
                const h2ElementpForActorsTitle = document.createElement("h2")
                const listElementlistOfActors = document.createElement("ul")
  
  
                const spanElementRuntime = document.createElement("span")
                const spanElementReleaseDate = document.createElement("span")
  
                const movieTitle = moviesInfo[count].Title;
                const movieReleased = moviesInfo[count].Released;
                const movieRuntime = moviesInfo[count].Runtime;
                const movieGenres = moviesInfo[count].Genres;
                const movieDirectors = moviesInfo[count].Directors;
                const movieWriters = moviesInfo[count].Writers;
                const movieActors = moviesInfo[count].Actors;
                const moviePlot = moviesInfo[count].Plot;
                const moviePoster = moviesInfo[count].Poster;
                const movieMetascore = moviesInfo[count].Metascore;
                const movieimdbRating = moviesInfo[count].imdbRating;
            
        
  
  
  
        /* Part 2: Build the HTML elements here and append them to the body */ 
                //bodyElement.append(movieTitle)
  
                imgElement.src = moviePoster
                articleElement.appendChild(imgElement)
                h1ElementTitle.append(movieTitle)
                editButton.textContent = "Edit";
                editButton.setAttribute("type", "button")
                editButton.addEventListener("click", function () {
                  location.href = "edit.html?imdbID=" + moviesInfo[count].imdbID;
                });
        
                pElementEditButton.append(editButton)
                articleElement.appendChild(h1ElementTitle)
                articleElement.appendChild(pElementEditButton)
                articleElement.setAttribute("id", moviesInfo[count].imdbID)
  
  
                const totalMinutes = parseInt(movieRuntime, 10);
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                let spanElementRuntimetextContent = "Runtime " + hours + "h " + minutes + "m";
                spanElementRuntime.append(spanElementRuntimetextContent)
                pElement.append(spanElementRuntime)
  
                const delimiter = document.createElement("span");
                delimiter.textContent = "•";
                pElement.appendChild(delimiter);
  
                const releaseDate = new Date(movieReleased);
  
                const releaseFormatted =  (releaseDate.getMonth() + 1).toString() + '/' + releaseDate.getDate().toString() + '/' + releaseDate.getFullYear();
                spanElementReleaseDate.textContent = `Released on ${releaseFormatted}`;
                pElement.append(spanElementReleaseDate)
                articleElement.appendChild(pElement)
  
                movieGenres.forEach(movieGenre => {
                    const spanElementGenre = document.createElement("span")
                    spanElementGenre.append(movieGenre)
                    spanElementGenre.setAttribute("class", "genre")
                    pElementpElementForGenre.append(spanElementGenre)
  
                });
                articleElement.appendChild(pElementpElementForGenre)
  
  
                pElementpForDescription.append(moviePlot)
                articleElement.appendChild(pElementpForDescription)
  
                h2ElementpForDirectorsTitle.append("Director")              
                articleElement.appendChild(h2ElementpForDirectorsTitle)
                movieDirectors.forEach(movieDirector => {
                    const listElementlistOfDirector = document.createElement("li")
                    listElementlistOfDirector.append(movieDirector)
                    listElementlistOfDirector.setAttribute("class", "director")
                    listElementlistOfDirectors.append(listElementlistOfDirector)
                });
                articleElement.appendChild(listElementlistOfDirectors)
  
                h2ElementpForWritersTitle.append("Writers")
                articleElement.appendChild(h2ElementpForWritersTitle)
                movieWriters.forEach(movieWriter => {
                    const listElementlistOfWriter = document.createElement("li")
                    listElementlistOfWriter.append(movieWriter)
                    listElementlistOfWriter.setAttribute("class", "writer")
                    listElementlistOfWriters.append(listElementlistOfWriter)
                });
                articleElement.appendChild(listElementlistOfWriters)
  
                h2ElementpForActorsTitle.append("Actors")
                articleElement.appendChild(h2ElementpForActorsTitle)
                movieActors.forEach(movieActor => {
                    const listElementlistOfActor = document.createElement("li")
                    listElementlistOfActor.append(movieActor)
                    listElementlistOfActor.setAttribute("class", "actors")
                    listElementlistOfActors.append(listElementlistOfActor)
                });
                articleElement.appendChild(listElementlistOfActors)
  
                
                
         bodyElement.append(articleElement)
                console.log(articleElement)
            }
        } else {
            bodyElement.append("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
        }
    }
    xhr.open("GET", "/movies")
    xhr.send()
  }
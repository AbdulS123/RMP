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
  
  
                const upMostOuterDiv = document.createElement("div")
                const imgDiv = document.createElement("div")
                const img = document.createElement("img")

                const ratingDiv = document.createElement("div")
                const ratingP = document.createElement("p")

                const nameDiv = document.createElement("div")              
                const subjectDiv = document.createElement("div")
                const commentDiv = document.createElement("div")

                const profName = profInfo[count].ProfName;
                const profImage = profInfo[count].ProfImage;
                const profSubject = profInfo[count].ProfSubject;
                const profComment = profInfo[count].ProfComment;
                const profRatingCollection = profInfo[count].ProfRatingCollection;
                const profRatingResult = profInfo[count].ProfRatingResult;

                img.scr = profImage;
                imgDiv.appendChild(img)
                upMostOuterDiv.appendChild(imgDiv)
  
                ratingP.append(profName)
                ratingDiv.appendChild(ratingP)
                upMostOuterDiv.appendChild(ratingDiv)
                
         bodyElement.append(upMostOuterDiv)
                console.log(upMostOuterDiv)
                console.log(profImage)

            }
        } else {
            bodyElement.append("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
        }
    }
    xhr.open("GET", "/profs")
    xhr.send()
  }
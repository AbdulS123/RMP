function reverseString(s) {
    return s.split("").reverse().join("");
  }
  
  window.onload = function () {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
            const bodyElement = document.querySelector("body")
            if (xhr.status == 200) {
                const profInfo = JSON.parse(xhr.responseText);
  
  
  
  
                for (let count = 0; count < profInfo.length; count++) {
                    const upMostOuterDiv = document.createElement("div");
                    const imgDiv = document.createElement("div");
                    const img = document.createElement("img");
                
                    const textContainer = document.createElement("div"); 
                
                    const ratingDiv = document.createElement("div");
                    const ratingP = document.createElement("p");
                
                    const nameDiv = document.createElement("div");
                    const nameH1 = document.createElement("h1");
                
                    const subjectDiv = document.createElement("div");
                    const subjectP = document.createElement("p");
                
                    const commentDiv = document.createElement("div");
                    const commentP = document.createElement("p");
                
                    const profName = profInfo[count].ProfName;
                    const profImage = profInfo[count].ProfImage;
                    const profSubject = profInfo[count].ProfSubject;
                    const profComment = profInfo[count].ProfComment;
                    const profRatingCollection = profInfo[count].ProfRatingCollection;
                //  const profRatingResult = profInfo[count].ProfRatingResult;
                    const profRatingResult = (profRatingCollection.reduce((accumulator, currentValue) => accumulator + currentValue,0))/profRatingCollection.length;
                    
                    const profRatingResultForCSS = profRatingResult*20

                    document.documentElement.style.setProperty('--profRatingResult', `${profRatingResultForCSS}%`);

                    img.setAttribute("id", "imgId");
                    imgDiv.setAttribute("class", "divClass");
                    img.src = profImage;
                    img.title = "an image of " + profName;
                    imgDiv.appendChild(img);
                    upMostOuterDiv.appendChild(imgDiv);
                
                    textContainer.setAttribute("class", "text-container"); // Set class for text container
                
                    ratingP.setAttribute("id", "ratingId");
                    ratingDiv.setAttribute("class", "divClass");
                    ratingP.innerHTML = '&#9733;'+'&#9733;'+'&#9733;'+'&#9733;'+'&#9733;';



                    // Your CSS as text
var styles = `
#ratingId {        
    margin: 0;
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(to right, gold 20%, black 0%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.body.appendChild(styleSheet)

                    ratingDiv.appendChild(ratingP);
                    textContainer.appendChild(ratingDiv);
                
                    nameH1.setAttribute("id", "nameId");
                    nameDiv.setAttribute("class", "divClass");
                    nameH1.append(profName);
                    nameDiv.appendChild(nameH1);
                    textContainer.appendChild(nameDiv);
                
                    subjectP.setAttribute("id", "subjectId");
                    subjectDiv.setAttribute("class", "divClass");
                    subjectP.append(profSubject);
                    subjectDiv.appendChild(subjectP);
                    textContainer.appendChild(subjectDiv);
                
                    commentP.setAttribute("id", "commentId");
                    commentDiv.setAttribute("class", "divClass");
                    commentP.append(profComment[profComment.length -1]);
                    commentDiv.appendChild(commentP);
                    textContainer.appendChild(commentDiv);
                
                    upMostOuterDiv.appendChild(textContainer); // Add text container to outer div
                
                    upMostOuterDiv.setAttribute("class", "upMostOuterClass");
                
                    bodyElement.append(upMostOuterDiv);
                    console.log(upMostOuterDiv);
                    console.log(profRatingResultForCSS);

                
            }
        } else {
            bodyElement.append("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
        }
    }
    xhr.open("GET", "/profs")
    xhr.send()
  }
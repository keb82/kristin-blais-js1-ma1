//question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

//question 2
const heading = document.querySelector("h3");

//question 3
heading.style.fontSize = "2em";

//question 4
heading.classList.add("subheading");

//question 5
var paragraphs = document.querySelectorAll("p");

//question 6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>" 

//question 7
function logCatNames(catArray) {
    for(var i = 0; i < catArray.length; i++) {
        
        console.log(catArray[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold"
    },
    {
        name: "Blurt",
        age: 21
    }
];

logCatNames(cats);

//question 8
function listCatNames(catArray) {
    var catsHTML = "";
    for(var i = 0; i < catArray.length; i++) {
        catsHTML += "<h5>" + catArray[i].name+ "</h5>";
    }

    return catsHTML;
}

//question 9
resultsContainer.innerHTML = listCatNames(cats);

//question 10
function listCatInfo(catArray) {
    var catsHTML = "";
    for(var i = 0; i < catArray.length; i++) {
        catsHTML += "<h5>" + catArray[i].name+ "</h5>";
        if(catArray[i].age === undefined)
            catsHTML += "<p>Age unknown</p>";
        else
            catsHTML += "<p>" + catArray[i].age+ "</p>";
    }

    return "<div>" + catsHTML + "</div>";
}


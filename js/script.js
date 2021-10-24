// question 1 
const cat = {
    complain: function() {
        console.log("Meow!")
    }
}

cat.complain();

// question 2
let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3 
heading.style.fontSize = "2em";

// question 4 
heading.className += "subheading";

// question 5 
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    console.log(i, paragraphs[i]);

    paragraphs[i].style.color = "red";
}

// question 6 
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "yellow";

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(i,list[i].name);
    }
}

catList(cats);

// question 8 
function createCats(cats) {

    let catInfo = "";

    for(let i = 0; i < cats.length; i++) {
        console.log(i, cats[i]);

        const catName = cats[i].name; 
        const catAge = cats[i].age; 

        let ageOfPet = "Age unknown";

        if(catAge) {
            ageOfPet = catAge; 
        }

        catInfo += `
        <div>
        <h5>${catName}</h5>
        <p>${ageOfPet}</p>
        </div>
        `;
    }

    const catDiv = catInfo;

    return catDiv;
}

const newCatHtml = createCats(cats); 

console.log(newCatHtml);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newCatHtml; 

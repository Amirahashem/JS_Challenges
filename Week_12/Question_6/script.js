let result = document.querySelector(".results");
// console.log(result);

let numberOfElements = document.querySelector('[name="elements"]');
// console.log(numberOfElements);

let texts = document.querySelector('[name="texts"]');
// console.log(texts);

let createBtn = document.querySelector('[name="create"]');
// console.log(createBtn);

let selectElement = document.querySelector("select.input");
// console.log(selectElement);

createBtn.onclick = function (e) {
    //Check old value 
    if(result.children.length > 0) {
        result.innerHTML = "";
    }


    for (let i = 0; i < numberOfElements.value; i++) {
        // Create Elements
        let myElement;

        if (selectElement.value === "Div") {
            myElement = document.createElement("div");
        } else {
            myElement = document.createElement("option");
        }

        let myText = document.createTextNode(texts.value);
        // console.log(myText);

        myElement.appendChild(myText);
        result.appendChild(myElement);

        myElement.className = "box";
        myElement.title = "Element";
        myElement.id = `id-${i + 1}`;

        //Styling
        myElement.style.color = "white";
        myElement.style.backgroundColor = "orange";
        result.style.display = "flex";
        myElement.style.padding = "10px";
        myElement.style.margin = "10px";
        myElement.style.width = "100px";
        result.style.flexWrap = "wrap";
        myElement.style.fontSize = "20px";
        myElement.style.fontWeight = "bold";
        myElement.style.borderRadius = "10px";
        myElement.style.textAlign = "center";
    }

    e.preventDefault();
}


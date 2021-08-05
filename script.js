let div = document.querySelector("#content");
let firstPerson = document.querySelector("#first");
let secondPerson = document.querySelector("#second");
let thirdPerson = document.querySelector("#third");
let fourthPerson = document.querySelector("#fourth");



let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        // Person #2
        firstName: "Aliou",
        lastName: "Barry",
        heightFeet: "5",
        heighInches: "7",
        favoriteFood: "Pizza",
        favoriteColor: "blue",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    2: {
        // Person #3
        firstName: "Lebron",
        lastName: "James",
        heightFeet: "6",
        heighInches: "8",
        favoriteFood: "Steak",
        favoriteColor: "Gold",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    3: {
        // Person #4
        firstName: "Muhammad",
        lastName: "Barry",
        heightFeet: "4",
        heighInches: "11",
        favoriteFood: " French Fries",
        favoriteColor: "Red",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
}


firstPerson.onclick = function(event){

    content.innerHTML ="";


    event.preventDefault();
    let diver = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let button = document.createElement("button");
    
    diver.appendChild(p1);
    diver.appendChild(p2);
    diver.appendChild(p3);
    div.appendChild(diver);
    diver.appendChild(button);
   
    
    diver.style.color = "white";
    diver.style.fontSize = "50px";
    diver.style.margin = "5% 20% 5% 20%";
    diver.style.padding = "30px";
    diver.style.border = "solid black 5px";
    


    p1.innerHTML = 'My name is ' + info[0].firstName + " " + info[0].lastName;
    p2.innerHTML = 'I am ' + info[0].heightFeet + "' " + info[0].heighInches;
    p3.innerHTML = 'My favorite food is ' + info[0].favoriteFood + ' and my favorite color is ' + info[0].favoriteColor;
    button.innerHTML = "Who's this?";
    
      button.onclick = function (){
    info[0].sayFullName ();
        }
}

secondPerson.onclick = function(event){


    content.innerHTML ="";

    event.preventDefault();
    let diver = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let button = document.createElement("button");

    diver.appendChild(p1);
    diver.appendChild(p2);
    diver.appendChild(p3);
    div.appendChild(diver);
    diver.appendChild(button);
   
    
    diver.style.color = "white";
    diver.style.fontSize = "50px";
    diver.style.margin = "5% 20% 5% 20%";
    diver.style.padding = "30px";
    diver.style.border = "solid black 5px";
    


    p1.innerHTML = 'My name is ' + info[1].firstName + " " + info[1].lastName;
    p2.innerHTML = 'I am ' + info[1].heightFeet + "' " + info[1].heighInches;
    p3.innerHTML = 'My favorite food is ' + info[1].favoriteFood + " and my favorite color is "+ info[1].favoriteColor;
    button.innerHTML = "Who's this?";

           button.onclick = function (){
    info[1].sayFullName ();
        }
}

thirdPerson.onclick = function(event){

    content.innerHTML ="";


    event.preventDefault();
    let diver = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let button = document.createElement("button");
    
    diver.appendChild(p1);
    diver.appendChild(p2);
    diver.appendChild(p3);
    div.appendChild(diver);
    diver.appendChild(button);
   
    
    diver.style.color = "white";
    diver.style.fontSize = "50px";
    diver.style.margin = "5% 20% 5% 20%";
    diver.style.padding = "30px";
    diver.style.border = "solid black 5px";
    


    p1.innerHTML = 'My name is ' + info[2].firstName + " " + info[2].lastName;
    p2.innerHTML = 'I am ' + info[2].heightFeet + "' " + info[2].heighInches;
    p3.innerHTML = 'My favorite food is ' + info[2].favoriteFood + " and my favorite color is "+ info[2].favoriteColor;
    button.innerHTML = "Who's this?";

    button.onclick = function (){
        info[2].sayFullName ();
        }
}

fourthPerson.onclick = function(event){


    
    content.innerHTML ="";

    event.preventDefault();
    let diver = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let button = document.createElement("button");
    
    diver.appendChild(p1);
    diver.appendChild(p2);
    diver.appendChild(p3);
    div.appendChild(diver);
    diver.appendChild(button);
   
    
    diver.style.color = "white";
    diver.style.fontSize = "50px";
    diver.style.margin = "5% 20% 5% 20%";
    diver.style.padding = "30px";
    diver.style.border = "solid black 5px";
    


    p1.innerHTML = 'My name is ' + info[3].firstName + " " + info[3].lastName;
    p2.innerHTML = 'I am ' + info[3].heightFeet + "' " + info[3].heighInches;
    p3.innerHTML = 'My favorite food is ' + info[3].favoriteFood + " and my favorite color is " + info[3].favoriteColor;
    button.innerHTML = "Who's this?";
     
       button.onclick = function (){
   info[3].sayFullName ();
    }
}
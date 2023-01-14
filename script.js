const userData = [
    {id:1, Name:"John", age: "18", profession:"developer"},
    {id:2, Name:"Jack", age: "20", profession:"developer"},
    {id:3, Name:"Karen", age: "19", profession:"admin"}
 ]
 
 // create a card to add to the filter compinents
 function createCard(item){
    let span1 = document.createElement("spam");
    spam1.innerText = item.id + ".";

    let span2 = document.createElement("span");
    span2.innerText = "Name : " + item.Name[0].toUpperCase()+item.Name.slice(1);
    
    let span3 = document.createElement("span");
    span3.innerText ="Profession : " + item.profession[0].toUpperCase()+ item.profession.slice(1);
    //  let span1 = document.createElement("span");

    let span4 = document.createElement("spam"); 
    span4.innertext = "Age : " + item.age;

    let newCard = document.createElement("div");
    newCard.append(span1,span2,span3,span4);
    newCard.setAttribute ("class","card");
 }
    //  span1.innerText = item.id+". ";
 
    //  let span2 = document.createElement("span");
    //  span2.innerText = "Name: "+item.Name[0].toUpperCase()+item.Name.slice(1);
 
    //  let span3 = document.createElement("span");
    //  span3.innerText = "Profession: "+ item.profession[0].toUpperCase()+item.profession.slice(1);
 
    //  let span4 = document.createElement("span");
    //  span4.innerText = "Age: "+ item.age;
 
    //  let newCard = document.createElement("div");
    //  newCard.append(span1,span2,span3,span4);
    //  newCard.setAttribute("class","card");
 
    //  return newCard;
 
 

 let cardsection = document.getElementById("cards");
 
 let inputName = document.getElementById("nameInput");
 let inputProfession = document.getElementById("professionInput");
 let inputAge = document.getElementById("ageInput");
 
 let addUserBtn = document.getElementById("addUserBtn");
 
 addUserBtn.onclick = addUser;
 
 function addUser(){
     let cName = inputName.value;
     let cProfession = inputProfession.value;
     let cAge = inputAge.value;
 
     if(cName=="" || cProfession=="" || cAge==""){
        let add=document.getElementById("#no");
        console.log(add)
 
     }
     else{
        //  alert(" employee was added successfully!!");
        document.getElementById("#yes");
         let user = {
             id:userData.length+1,
             Name:cName,
             age:cAge,
             profession:cProfession,
         }
         userData.push(user);
 
         let newCard = createCard(user);
         cardsection.append(newCard);
         console.log(userData);
   
 
     }
   
 
 }
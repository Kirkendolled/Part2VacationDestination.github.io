(function(){
"use strict";


const detailsForm = document.querySelector('#destination_details_form'); // using # sign here because of querySelector
detailsForm.addEventListener('submit', handleFormSubmit); //handleFormSubmit is a NAMED FUNCTION

//I put a funtion diagram in with the saved notes to show each step to take 
//and how to set up a flow chart

function handleFormSubmit (event){
  event.preventDefault();
   let destName =event.target.elements["name"].value;
   let destLocation=event.target.elements["location"].value;
   let destPhoto=event.target.elements["photo"].value;
   let destDesc=event.target.elements["description"].value;

   //this loop clears the form when it's submitted
   for (let i=0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value="";
   }

   let destCard=createDestinationcard(destName, destLocation, destPhoto, destDesc);

   let wishListContainer=document.getElementById('destinations_container');

   if (wishListContainer.children.length === 0) { //if there is nothing in the container then 
   document.getElementById('title').innerHTML = "My Wish List";
   }
   document.querySelector("#destinations_container").appendChild(destCard);
}


function createDestinationcard(name,location, photoURL, description){
  let card = document.createElement("div");
  card.className = 'card';
  let img=document.createElement('img');
  img.setAttribute('alt', name);

  let constantPhotoURL="images/signpost.jpg";

  if(photoURL.length === 0) {
    img.setAttribute('src', constantPhotoURL);
  }
  else {
    img.setAttribute('src', photoURL)
  }

  card.appendChild(img);

  const cardBody=document.createElement('div')
  cardBody.className = "card-body";

  const cardTitle=document.createElement('h3');
  cardTitle.innerHTML=name;
  cardBody.appendChild(cardTitle);

  const cardSubtitle=document.createElement('h4');
  cardSubtitle.innerText= location;
  cardBody.appendChild(cardSubtitle);

  if(description.length !== 0) {
    let cardText=document.createElement('p');
    cardText.className="card-text";
    cardText.innerText=description;
    cardBody.appendChild(cardText);
  }

  let cardDeleteBtn=document.createElement('button');
  cardDeleteBtn.innerText="Remove"

  cardDeleteBtn.addEventListener('click', removeDestination);
  cardBody.appendChild(cardDeleteBtn);
  card.appendChild(cardBody);
  return card;
}

function removeDestination(event){
  let card=event.target.parentElement.parentElement;
  card.remove();
}
})();

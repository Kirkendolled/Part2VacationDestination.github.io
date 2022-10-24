let detailsForm=document.querySelector('#destination_details_form"'); // using # sign here because of querySelector
detailsForm.addEventListener('submit', handleFormSubmit); //handleFormSubmit is a NAMED FUNCTION

//I put a funtion diagram in with the saved notes to show each step to take and how to set up a flow chart

function handleFormSubmit (event){
  event.preventDefault();
   let destName =event.target.elements["name"].value;
   let destLocation=event.target.elements["location"].value;
   let destPhoto=event.target.elements["photo"].value;
   let destDesc=event.target.elements["description"].value;

   //this loop clears the form when it's submitted
   for (var i=0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value="";
   }

   //create card here...

   var wishListContainer=document.getElementById('destinations_container');
   if (wishListContainer.children.length === 0) //if there is nothing in the container then 
   document.getElementById('title').innerHTML = "My Wish List";
}
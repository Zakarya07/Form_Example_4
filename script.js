// Catch the Span Element in HTML in which we are gonna insert date later
let copyright_year= document.querySelector("#year_copyright");

// Creation of variable containing the date (created with the 'new Date' method)
let date= new Date;

// Specifying what date we want (the year, month, day, etc ..) => in our case just the Year == ex: 2020
let year= date.getFullYear();
let month= date.getMonth();
month+=1;

if(month<=9){
    month=`0${month}`;
}

// Innner the result of the Date we created in the span element with innerHTML
copyright_year.innerHTML=`${month}/${year}`;


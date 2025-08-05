const reviews = [
{
    id: 1, 
    name: 'Jeff Palmere',
    job: 'Web Developer',
    img: 'IMG_1137 (2).jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',

},
{
    id: 2, 
    name: 'Eve Abraha',
    job: 'Teacher',
    img: '#',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',

},
{
    id: 3, 
    name: 'Peter Jones',
    job: 'Intern',
    img: '#',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',

},
];
//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = Document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
   const item = reviews [currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.info;

});

function showPerson(person){
   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.info;
}

nextBtn.addEventListener( 'click', function (){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});


prevBtn.addEventListener( 'click', function (){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});















// // console.log("Hello World");

// // let myString = "a2b3c";
// // console.log(myString);

// // let myNumVar = 123;
// // console.log(typeof myNumVar);

// // console.log(10 + "eggs");
// // console.log(10 + 7 + "eggs");
// // console.log("eggs" + 10 + 7);
// // console.log(2==10);

// // //Both Conditions Need to be true
// // console.log(7>3)&&(5<10);

// // //Only One condition must be true
// // console.log(10>3)|| (10>12);

// // //If the statement is logical or not
// // console.log(!5>3);

// // function introduction (name, age) { 
// //     console.log("Hello, my name is " + name + "and I am" + age + "years old".)
// // }

// // introduction("Brihanna", 105);

// const hour = new Date ().getHours();
// let greeting = "";

// if (hour<12){ 
//     greeting = "Good Morning";
// }else if (hour<18){
//     greeting = "Good Afternoon";
// }else {
//     greeting = "Good Evening";
// }

// document.getElementById("greeting").innerText = greeting;
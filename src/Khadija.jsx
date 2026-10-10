// function List() {
//   const items = ['Item 1', 'Item 2', 'Item 3'];
// const listItems= items.map(name => <li>{name}</li>)

// return(listItems)


// // const names=[
// // {id:1, name:"khaled", age:25},
// // {id:2, name:"ahmed", age:30},
// // {id:3, name:"ali", age:35},


// // ]
// // const ListItems=names.map(name=> <li key={name.id}> {name.id} {name.name} {name.age}</li>)
// // return(
// // <ul>
// // {ListItems}
// // </ul>
// // )


// }



// usin sorted list
// ------------------26------------

// function List() {
//   const names = [
//     { id: 1, name: "khaled", age: 25 },
//     { id: 2, name: "ahmed", age: 30 },
//     { id: 3, name: "ali", age: 35 },
//     { id: 4, name: "mohamed", age: 20 },
//     { id: 5, name: "sara", age: 28 },
//   ];
//   const fil_age = names.filter(filter => filter.age < 30);



// //   names.sort((a, b) => a.name.localeCompare(b.name));
// //   names.sort((a, b) =>  b.name.localeCompare(a.name));
// //   names.sort((a, b) => a.age - b.age);



//   const ListItems = fil_age.map(fil_age => 
//   <li key={fil_age.id}> {fil_age.id} {fil_age.name} {fil_age.age}</li>);
//   return (
//     <ul>
//       {ListItems}
//     </ul>
//   );
// }



// -----------------27------------
// using useState from react
// returns n array with tow element
// 1 the current state value
// 2 a function to update the state value
// import  { useState } from 'react';
// function List() {
// const [count, setCount] = useState(0);
// return(
// <div>
//     <p>Count: {count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     <button onClick={() => setCount(count - 1)}>Decrement</button>

// </div>// )}


// --------------28-------------- 


// using useEffect from react
// Get data from an API and display it in a list
//  Update page title with the number of items in the list
// Deal with events listeners and subscriptions
// Set timers like setTimeout and setInterval
// Clean up resources when a component unmounts
// import {useEffect } from 'react';
// function List() {

// useEffect(() => {
    
// return () => {


// };
// },[]);


// }



// export default List;

// -------------------29------
// GET data from an API and display it in a list
// import { useEffect, useState } from 'react';
// function FetchUserUesEffect() {

// const[users, setUsers] = useState([]);
// const[loading, setLoading] = useState(true);
//     useEffect(() => {

// fetch("https://jsonplaceholder.typicode.com/users")

// .then(res => res.json())
// .then(data => {
//     setUsers(data);
//     setLoading(false);
// })
// .catch(error => {
//     console.error("Error fetching users:", error);

// });
// ;
//     },[]);
//     return (
// <div>
//     <h2>Users list</h2>

// {
// loading  ? <p>Loading...</p>
//  :(

// <ul>

// {users.map(user =>
//  ( <li key={user.id}>{user.name} - {user.email}</li>))

// }

// </ul>

// )


// }

// </div>


//     );



// } export default FetchUserUesEffect;




// =============30============================

// using page Title (document.title)
// import { useState ,useEffect } from 'react';
// function UpdatePageTitleUseEffect() {
// // هون ببلش نعرف متغير count و دالة setCount لتحديث قيمة count
// const [count, setCount] = useState(0);
//  useEffect(() => {document.title = `Count: ${count}`;},[count]);


// return ( 

// <div>
// <p>Count: {count}</p>
// <button onClick={() => setCount(count + 1)} className='btn btn-info'>Increment</button> 
// <button onClick={() => setCount(count - 1)} className='btn btn-danger'>Decrement</button>  
// </div>


// );
// }
// export default UpdatePageTitleUseEffect;






// ----------------------31---------------------
// using UseEffect
// deal with events listeners and subscriptions
//  import { useState,useEffect } from 'react';
//   function EventListenerUseEffect() {

// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// useEffect(() => {
//     const handleResize = () => 
//         setWindowWidth(window.innerWidth);

//     window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
    
//     },[]);
//     return (
//         <div>
//             <h2>Window Width: {windowWidth}px</h2>
//         </div>
//     );

//   }export default EventListenerUseEffect;



// =================32============================
// using UseEffect
// Set timers like setTimeout and setInterval
//  import { useState,useEffect } from 'react';
// function TimerUseEffect() {
//     const [count, setCount] = useState(0);
// useEffect(() => {
// const interval = setInterval(() => {
// setCount(prevCount => prevCount + 1);


// },1000);

// return () => {
//     // هي دالة التنظيف التي يتم استدعاؤها عند إلغاء تركيب المكون أو عند إعادة تشغيل التأثير. في هذه الحالة، نستخدمها لإيقاف المؤقت عند إلغاء تركيب المكون.
//     clearInterval(interval);
// };


// },[]);

// return <h1 className="text-center bg-primary text-white p-3"> {count}</h1>

// }
// export default TimerUseEffect;






// ====================33=================
// اخر استخدام ل useEffect
//   بعد فترة من  زمن بدي وقف عمليه  العد التناقص للعداد
// import { useState,useEffect } from 'react';
// function ClearUpUseEffect() {
// const [masig, setmasig] = useState("Hello , I am a message");
//     useEffect(() => {
// const timeout= setTimeout(() => {
//     setmasig("");
// },3000);
//         return () => {
//             clearTimeout(timeout);
         
//         };
//     },[]);

// return <p>{masig}</p>;

// }export default ClearUpUseEffect;






// ---------------34--------------------
// click event


// import { useRef, useState } from 'react';
// import "./ButenStyle.css";
// function ButtonClick() {
// const quotes=[

//     {
//         quote:"The best way to get started is to quit talking and begin doing.",
//         author: "Walt Disney"
//     },
//      {
//         quote:"The best way to get started is to quit talking and begin doing.",
//         author: "Walt Disney"
//     }, {
//         quote:"The best way to get started is to quit talking and begin doing.",
//         author: "Walt Disney"
//     }
    
// ];
// const shuffleQuotes = ( e) => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     e.target .innerText =`____${quotes[randomIndex].quote}" - ${quotes[randomIndex].author}`;
//     e.target .style.backgroundColor = "red";

// }
// return (

// <div className="container text-center mt-5">
//     <button className="btn btn-primary botn" onClick={shuffleQuotes}>Shuffle Quotes</button>
//     <button className="btn btn-danger botn" onClick={shuffleQuotes}>Shuffle Quotes</button>
// </div>


// )
// ;


// }export default ButtonClick;


// ---------------------35--------------------
// مشروع بسيط على oon click هي مجموعه صور بحيث كل ضغطه يقلب ع تاني 
import { useState } from 'react';

// هي صفحا انشاءيه لتغيير الصور عند الضغط على الزر
import "./ButenStyle.css";

function ChangeImage() {
const images = [
 {id: 1, src: "../src/assets/fott.jpg", alt: "Image 1"},
 {id: 2, src: "../src/assets/colth.jpg", alt: "Image 2"},
 {id: 3, src: "../src/assets/coll.jpg", alt: "Image 3"},
 {id: 4, src: "../src/assets/fot.jpg", alt: "Image 4"},




]

const [currentImageIndex, setCurrentImageIndex] = useState(0);
const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

}
const PreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex=== 0 ? images.length - 1 : prevIndex - 1));

}
const randomImage = () => {
let randomIndex;
do { randomIndex = Math.floor(Math.random() * images.length); } while (randomIndex === currentImageIndex);
setCurrentImageIndex(randomIndex);

}


return (

<div className="profilecontainer text-center mt-5">
  
    <h1 className="text-primary">Image Gallery</h1>
   
    <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="img-fluid"
    
    onClick={handleClick}
    />
   < div className="mt-3">
        <button className="btn btn-primary me-2 rounded-circle" onClick={PreviousImage}>Previous</button>
        <button className="btn btn-success me-2 rounded-circle" onClick={handleClick}>Next</button>
        <button className="btn btn-warning rounded-circle" onClick={randomImage}>Random</button>
    </div>
</div>



);









}export default ChangeImage;

// // let bgColor=document.querySelectorAll(".bgColor");
// // [...bgColor].map(element=>{
// //     // console.log(element);
// //     element.addEventListener("mouseover",()=>{
// //         // console.log(element.innerText);
// //         element.style.backgroundColor=element.innerText;
// //     })
// //     element.addEventListener("mouseleave",()=>{
// //         // console.log(element.innerText);
// //         element.style.backgroundColor="transparent";
// //     })
// // })
// let ele = document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// // ele.id = "demo"
// ele.setAttribute("id" , "demo")
// console.log(ele);

// //ele.removeAttribute("id")
// document.body.appendChild(ele);


// let image = document.createElement("img");
// image.src= "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_640.jpg";
// console.log(image);

// document.body.appendChild(image)

let mainEle = document.createElement("div");
mainEle.setAttribute("id" , "mainBlock");

console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class" , "topBlock");

let image = document.createElement('img');
image.src="https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_640.jpg";
image.width="500";
image.height="500";
image.style.objectFit="cover"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class" , "botttomBlock");
// console.log(bottomEle);
let h1 = document.createElement("h1");
h1.innerText="PIZZA";

let btn = document.createElement("button");
btn.innerText="View More";

bottomEle.append(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);

document.body.appendChild(mainEle)
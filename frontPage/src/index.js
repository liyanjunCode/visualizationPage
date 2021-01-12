import { aa } from "./aa/index.js"
import "./aa/a.css";
import imgsrc from "../assets/111.png";
const img = new Image()
img.src = imgsrc;

// console.log("front")

// function* bb () {
//   yield 1;
//   console.log("a");
//   yield 2;
//   console.log("b");
//   yield 3;
//   console.log("c");
// }

// aa();
// const c = bb();
// c.next()

const createDom = () => {
    // const dom = document.createElement("div");
    // const img = document.createElement("img");
    const body = document.querySelector("body");
    // console.log(dom)
    // img.src = imgsrc;
    // dom.classList.add("red")
    // body.appendChild(dom);
    body.appendChild(img)
}
createDom()
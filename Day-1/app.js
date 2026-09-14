// Mujhe ek heading banani hein

const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);
    element.innerText = children;
    for (let key in styles) {
      element.style[key] = styles[key];
    }
    return element;
  },
};

// const heading1 = document.createElement("h1");
// heading1.innerText = "Hello Kaise ho";
// heading1.style.backgroundColor = "orange";
// heading1.style.fontSize = "30px";
// heading1.style.color = "black";
// console.log(heading1);

// const heading2 = document.createElement("h1");
// heading2.innerText = "React ka Introduction";
// heading2.style.backgroundColor = "yellow";
// heading2.style.fontSize = "30px";
// heading2.style.color = "black";
// console.log(heading2);

const heading1 = React.createElement(
  "h1",
  { backgroundColor: "orange", fontSize: "25px" },
  "Hello Kaise ho",
);
const para = React.createElement(
  "p",
  { backgroundColor: "green" },
  "React bekar hein",
);

const ReactDOM = {
  render: function (ele, root) {
    root.append(ele);
  },
};

// const root = document.getElementById("root");
// root.append(heading1);
// root.append(para);

ReactDOM.render(heading1, document.getElementById("root"));

ReactDOM.render(para, document.getElementById("root"));

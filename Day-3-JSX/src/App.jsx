// JSX is combination of HTML+JS

// JSX ka matlab hai JavaScript XML. Yeh JavaScript ka ek syntax extension hai jo HTML jaisa dikhta hai.

// Iska use React mein UI (User Interface) ka structure likhne ke liye kiya jata hai.

//Browser JSX ko directly nahi samajh sakta. Isliye Babel jaisa compiler JSX ko standard JavaScript function calls (React.createElement()) mein convert karta hai.

//Isse HTML aur JavaScript ko ek hi file mein likhna bohot aasan ho jata hai.

// Some Rules of JSX

/**
 *
 1. Single Root Element (Ek hi main parent hona chahiye)
 *JSX expression hamesha sirf ek single parent element return kar sakta hai.

 Agar multiple sibling tags hain, to unhe ek parent tag ke andar wrap karna zaroori hai.

 Hum <div> ka use kar sakte hain, ya bina extra DOM node add kiye React Fragment (<> ... </>) ka use kar sakte hain. 

 2.Close All Tags
  JSX mein har ek tag ko close karna compulsory hai.

  Jo tags HTML mein self-closing hote the (jaise <img>, <input>, <br>), unke aage JSX mein slash (/) lagana zaroori hai.

 3.camelCase Attributes
  JSX jab JavaScript mein convert hota hai, to uske attributes JS object ki keys ban jaate hain. Isliye attributes ko camelCase mein likha jata hai.

  class ban jata hai className (kyunki class JS ka reserved keyword hai).

  for ban jata hai htmlFor.

  Event handlers jaise onclick ban jaate hain onClick

  4. JavaScript Expressions in Curly Braces
  JSX ke andar agar aapko koi bhi JavaScript variable, logic, ya function call use karna hai, to use curly braces {} ke andar likhna hoga.

  Example: const name = "Rahul";
          <h1>Hello, {name}!</h1>

5. Inline Styles as Objects

JSX mein inline style ko string ke roop mein nahi, balki ek JavaScript object ke roop mein diya jata hai. Isliye isme double curly braces {{ }} ka use hota hai.
  style={{ color: 'red', fontSize: '16px' }}
 */

const App = () => {
  const email = "abc@gmail.com";
  function Greet() {
    console.log("welcome");
  }
  const age = 19;
  const languages = ["HTML", "CSS", "JS"];
  return (
    <div>
      <h1>hello,Kaise ho {2 + 2}</h1>
      <p>Email : {email}</p>
      <Greet />
      {/* {
      if(age>18){
        console.log("Eligible")
      }else{
        console.log("Not eligible")
      }
     } */}

      {age > 18 ? "Eligible" : "Not eligble"}

      {/* {
        for(let i=0;i<languages.length;i++){
        console.log(languages[i])
      }
      } */}

      {languages.map((language) => {
        console.log(language);
      })}

      <img className="" src="" alt="" />
    </div>
  );
};

export default App;

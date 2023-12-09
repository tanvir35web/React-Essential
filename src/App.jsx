
// import './App.css'
// import reactImg from './assets/android2.svg'


// const operatingSystem = ['Windows', 'Mac', 'Linux', 'TV', 'Android', 'Watch'];

// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

// const randomSelect = operatingSystem[getRandomInt(5)];

// // const addSpace = operatingSystem.map((item) => item + ' ');

// function App() {

//   return (
//     <div>
     
//     <img src={reactImg} alt="demo image" />
//     <h1> {randomSelect} Operating System</h1>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis impedit sequi consectetur repellat vel. Magni suscipit obcaecati facilis minus architecto repellat fugiat. Facilis porro ipsa aliquid voluptate ducimus provident minima. Illo, nostrum perferendis provident delectus nulla esse dolorum vero alias fugiat, officia excepturi eius, non consequuntur illum voluptate corporis?</p>
      
//     </div>
//   )
// }

// export default App


import atomImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data'


// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

function Header() {
  return (
    <header>
      <img src={atomImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
// Using props

// function CoreComponent(props) {
//   return (
//     <li>
//       <img src={props.image} alt="Component Image" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }


//Using Destructuring method
function CoreComponent({image, title, description}) {
  return (
    <li>
      <img src={image} alt="Component Image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>

          <CoreComponent
          {...CORE_CONCEPTS[0]}
          />

          <CoreComponent          
          {...CORE_CONCEPTS[1]}
          />

          <CoreComponent          
          {...CORE_CONCEPTS[2]}
          />

          <CoreComponent
          title = {CORE_CONCEPTS[3].title}
          description = {CORE_CONCEPTS[3].description}
          image = {CORE_CONCEPTS[3].image}
          />

        </ul>
        </section> 
      </main>
    </div>
  );
}

export default App;

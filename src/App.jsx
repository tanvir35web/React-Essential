
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


// const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

import { CORE_CONCEPTS } from './data'
import Header from './Components/Header';
import CoreComponent from './Components/CoreComponent';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>

          <CoreComponent {...CORE_CONCEPTS[0]} />

          <CoreComponent {...CORE_CONCEPTS[1]} />

          <CoreComponent {...CORE_CONCEPTS[2]} />

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


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

import componentsImg from './assets/android2.svg'


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreComponent(props) {
  return (
    <li>
      <img src={props.image} alt="Component Image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
          image = {componentsImg}
          title = "Component"
          description = "The core UI building block"
          />
          <CoreComponent/>
          <CoreComponent/>
          <CoreComponent/>
        </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;

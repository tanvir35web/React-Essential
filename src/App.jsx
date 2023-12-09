import { CORE_CONCEPTS } from './data'
import Header from './Components/Header';
import CoreComponent from './Components/CoreComponent';
import TabButton from './Components/TabButton';


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

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Component</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;

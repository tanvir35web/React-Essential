import { CORE_CONCEPTS } from './data'
import Header from './Components/Header';
import CoreComponent from './Components/CoreComponent';
import TabButton from './Components/TabButton';
import { useState } from 'react';
import {EXAMPLES} from './data-with-examples';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selected Button => 'component', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>

          {CORE_CONCEPTS.map((item)=>(<CoreComponent key={item.title} {...item} />))}
             
        </ul>
        </section> 

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
         
    {/* Conditionally check first with ternary operator */}

         {!selectedTopic ? (<p> Please Select a topic </p>) : 
         ( <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> )}
          
        </section>
      </main>
    </div>
  );
}

export default App;

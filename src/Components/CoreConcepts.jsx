import { CORE_CONCEPTS } from "../data";
import CoreComponent from "./CoreComponent";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreComponent key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

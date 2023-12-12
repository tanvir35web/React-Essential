import "./CoreComponent.css";

//Using Destructuring props method
export default function CoreComponent({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="Component Image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


// Using props method
// export default function CoreComponent(props) {
//   return (
//     <li>
//       <img src={props.image} alt="{props.title}" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

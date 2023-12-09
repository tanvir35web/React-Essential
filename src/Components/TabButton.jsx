
export default function TabButton({children}) {
    function handleClick() {
        console.log("Hello, I am a Button!");
    }
    return (
        <li>
            <button onClick={handleClick}> {children} </button>
        </li>
        );
}
import { useState } from "react";

// Write your Color component here
const Color = (props) => {
  
  const className = props.color === props.selectedColor ? `${props.color} selected` : `${props.color} color`;

  return (  <div 
              className={className}
              onClick={() => {
                props.setSelectedColor (props.color);
                
              }}>
            </div>
          )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <h1 className={`${selectedColor} title`}>🎨 Color Picker</h1>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`${selectedColor} navColor`}>{selectedColor.toUpperCase()}</div>
      </div>
      <div id="colors-list">
        {/* colors go here */}
        <Color color="yellow" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="orange" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;

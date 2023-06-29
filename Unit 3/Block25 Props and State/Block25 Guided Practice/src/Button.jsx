

function Button (props) {

   console.log("Props: ", props)
   function handleClick () {
    props.setCount(props.count + 1);
  }
    return <button onClick={handleClick}>{props.count}</button>

  }

  export default Button
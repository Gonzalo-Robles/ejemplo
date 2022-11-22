const Button = (props) =>{
    return (
    <button onClick={props.cliqueo} style={{color: props.colorText}}> {props.text} </button>   
    )
}
export default Button 

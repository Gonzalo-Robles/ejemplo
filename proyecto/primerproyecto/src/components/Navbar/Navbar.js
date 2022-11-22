import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) =>{
    const handleOnClick = ()=>{
        alert('hice click')
    }

    console.log(props)
    return (
        <nav className='navbar'>
            <h1 style={{color: props.colorTitle}}> GDR-PRODUCTOS</h1>
            <Button text= 'Producto 1' colorText= 'red' cliqueo={handleOnClick}/>
            <Button text= 'Producto 2' colorText= 'green'/>
            <Button text= 'Producto 3' colorText= 'blue'/>
            <Button text= 'Contact'/>             
            <Button text= 'Login'/>
            <CartWidget/>
        </nav>
    )
    
}

export default Navbar
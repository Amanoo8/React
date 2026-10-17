export default function Navbar({isLog,name}){
    return (
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>{isLog?name:"Login"}</li>
    </ul>
    );
}
// export default Navbar;
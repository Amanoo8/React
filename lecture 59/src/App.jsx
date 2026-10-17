import './App.css'
import Nav from './components/Navbar'
import { Footer as Ft} from './components/Footer'
import Flowers from './components/Flowers';

let user={
  name:"Aman",
  isLog:true
}
const flowers =[
  {
    title : "Rose",
    price : 120
  },{
    title:"Sun flower",
    price : 150
  },{
    title:"Genda",
    price: 100
  }
]
function App() {
  return (
    <div>
     <Nav user={user}/>
     <Flowers flowers={flowers}/>
     <Ft/>
    </div>
    );
}

export default App

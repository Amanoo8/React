import { Flower } from "./Flower"

export default function Flowers({flowers}) {
  return (
     <div style={{backgroundColor:"white", color:"green"}}>
          {flowers.map(({title,price},i)=>{
         return (<Flower key={i} title={title} price={price}/>)
        })}
         </div>
  )
}

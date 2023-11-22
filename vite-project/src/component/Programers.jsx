
import Companies from './Companies'
import Services from './Services'

function Programers(props) {
  return (
    <div >
        
        <p>Name is : {props.name},</p>
       <p> Programming Languge is :{props.lang},</p>
       <p> Expirince Years is :{props.exper},</p>
      <p>  company name is :{props.company}</p>
        
        
    </div>
  )
}

export default Programers
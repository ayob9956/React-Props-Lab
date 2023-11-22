import Programers from "./Programers"
import Services from "./Services"

function Companies(props) {
  return (
    <div className="aa">
       <h1> company name is:  {props.name}</h1>
       <p>number of empolyees is: {props.employees}</p>
        <p>year start is :   {props.yearstart}</p>
        
        <div className={props.name == "twuaiq"?"twuaiq":"non"}>    
        <Programers name={props.employeeName} lang = {props.employeeLang} exper={props.employeeexper}/>
        </div>
        <div className={props.name == "twuaiq"?"twuaiq":"non"}>
        
        <Programers name={props.employeeName1} lang = {props.employeeLang1} exper={props.employeeexper1}/>
        </div>
        <div className={props.name == "twuaiq"?"twuaiq":"non"}>
                <Programers name={props.employeeName2} lang = {props.employeeLang2} exper={props.employeeexper2}/>

        </div>
        <Services list = {props.service} price ={props.price}/>
        </div>
    
    
  )
}

export default Companies
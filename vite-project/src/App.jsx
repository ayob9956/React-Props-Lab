import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'
import Services from './component/Services'
function App() {
  

  return (
    <>
    <Companies name="twuaiq" employees={3000} yearstart={2000}
    employeeName="Ayoub" employeeLang="java" employeeexper={14}
    employeeName1="Ahmad" employeeLang1="C++" employeeexper1={8}
    employeeName2="Ali" employeeLang2="Python" employeeexper2={3}
    service="programming ,Softwears" price={3000}
    />

<Companies name="Nokia" employees={15000} yearstart={1900}
    employeeName="Saad" employeeLang="java" employeeexper={14}
    employeeName1="Khalid" employeeLang1="C++" employeeexper1={8}
    employeeName2="Ali" employeeLang2="Python" employeeexper2={3}
    service="programming ,Softwears" price={3000}
    />

<Companies name="Samsung" employees={12000} yearstart={1970}
    employeeName="Ayoub" employeeLang="java" employeeexper={14}
    employeeName1="Ahmad" employeeLang1="C++" employeeexper1={8}
    employeeName2="Ali" employeeLang2="Python" employeeexper2={3}
    service="programming ,Softwears" price={3000}
    />
    


    </>
  )
}

export default App

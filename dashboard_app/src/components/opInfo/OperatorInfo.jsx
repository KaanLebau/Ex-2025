import {useState, useEffect} from 'react'
import './operatorInfo.scss'
import {getCurrentShift} from '../../util/shiftUtil'



export function OperatorInfo(props) {
     const[shift, setShift] = useState(getCurrentShift())
     const line = window.appModel.getOrganisation('line')
    
     useEffect(() => {
          const interval = setInterval(() => {
               setShift(getCurrentShift());
          }, 600000);
          return () => clearInterval(interval);
  }, []);
    return (
        <div className="operatorInfoContainer">
           <div className="operatorInfoRow">
                <span className="infoLabel">Role : </span>
                <span className="infoData">{props.role}</span>
               
           </div>
           <div className="operatorInfoRow">
                <span className="infoLabel">Shift : </span>
                <span className="infoData">{shift}</span>
           </div>
           <div className="operatorInfoRow">
                <span className="infoLabel">Line : </span>
                <span className="infoData">{line}</span>
           </div>
        </div>
    )
}

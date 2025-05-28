import './navbar.scss'
import {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';



export function Navbar(props) {


    const [isLineOpen, setLineOpen] = useState(false);
    const [isMachineOpen, setMachineOpen] = useState(false);


    const lineRef = useRef(null);
    const machineRef = useRef(null);
  
    // Machine options
    const machines = ['DOOSAN', 'FMS', 'UNIOR', 'WMZ', 'LIEBHERR', 'DOOSAN'];
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          lineRef.current &&
          !lineRef.current.contains(event.target) &&
          !event.target.closest('.lineButton')
        ) {
          setLineOpen(false);
        }
  
        if (
          machineRef.current &&
          !machineRef.current.contains(event.target) &&
          !event.target.closest('.machineLink')
        ) {
          setMachineOpen(false);
        }
      }
  
      if (isLineOpen || isMachineOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isLineOpen, isMachineOpen]);
    return (
        <div className='navbarContainer'>
         <div className="lineButton" title='Välj line' onClick ={()=>{setLineOpen(!isLineOpen)}}>
          Line
         {isLineOpen &&
         (
          <div className="lineList" ref={lineRef}>
            {props.lines.map(line =>{
              return (<div className="theLine" title={line}>{line}</div>)
            })}
           
          </div>
         )}
         </div>
         <div className="dashboardLink" title="Dashboard">
          Dashboard
         </div>
         
         
         
         
         
         <div className="machineLink"title="Välj en maskin" onClick={()=>{setMachineOpen(!isMachineOpen)}}>
          Machine
          {isMachineOpen&&(
            <div className="machineList" ref={machineRef}>
            {props.machines.map(machine=>{return ( <div className="theMachine" 
                                                        id={Object.keys(machine)[0]}
                                                        title={Object.values(machine)[0]}
                                                        onClick={e=>{console.log(e.target.id)}}
                                                         >{Object.values(machine)[0]}</div>  ) })}
            </div> ) }
         </div>
        </div>
    )
}

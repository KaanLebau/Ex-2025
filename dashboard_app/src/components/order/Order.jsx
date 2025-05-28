import './order.scss'

export function Order(props) {


    return (
        <div className="orderContainer">
            <div className="currentOrder">
                
            <label htmlFor="order">Order : {props.order.number}</label>
            <label htmlFor="order">Kvar : {props.order.left}</label>
            </div>
  
            <div className="nextOrder"> <label htmlFor="order">Nästa : {props.order.next}</label></div>
            
        </div>
    )
}

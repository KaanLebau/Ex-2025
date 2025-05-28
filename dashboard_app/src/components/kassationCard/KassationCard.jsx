import './kassationCard.scss'

export function KassationCard(props) {
    

    return (
        <div className="kassationCardContainer">
            <h1 className="numberOfKassationer">{props.kassation}</h1>
            <p className="kassationText"> Kasserad</p>
        </div>
    )
}

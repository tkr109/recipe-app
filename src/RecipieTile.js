import './RecipieTIle.css'

const RecipieTile = ({recipe}) => {
    return ( 
        <div className="recipieTile">
            <img className="recipieTile__img" src={recipe["recipe"]["image"]} alt="img"/>
            <p className="recipieTile__name">{recipe["recipe"]["label"]}</p>
        </div>      
    );
}
 
export default RecipieTile;
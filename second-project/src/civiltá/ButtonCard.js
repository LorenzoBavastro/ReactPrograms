export default function ButtonCard(props)
{
    return(
        <button className="button" onClick={props.moreInfo}> {props.buttonName}</button>
         )
}
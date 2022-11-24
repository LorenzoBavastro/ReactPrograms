function ButtonCard(props)
{
    
    return(

        <button className="button" onClick={props.flip}><span>{props.buttonName}</span> </button>

         )
}

export default ButtonCard;

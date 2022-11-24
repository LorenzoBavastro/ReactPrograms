import DescrizioneCard from "./DescrizioneCard";
import ImmagineCard from "./ImmagineCard";
import TitoloCard from "./TitoloCard";
import listaCivs from "../listaCiviltá";
import MetadatoCard from "./MetadatoCard";
import ButtonCard from "./ButtonCard";
import { useState } from "react";

function Civiltá ()
{
    const[currentCard, changeCard] = useState(true)
    const[contatore, incrementa] = useState(0)
    function flipCard ()
    {
        changeCard(!currentCard)
    }

    function increase ()
    {
        incrementa(contatore + 1)

        return incrementa;
    }
    
    function changelist ()
    {

    }
    
    return(
            <div className="cardContainer">
                {listaCivs.map((elemento) =>
                {
                    return(
                        <div>
                        {currentCard ? <> <li className="card" key = {elemento.id}>
                        <div className="borderCard">
                            <TitoloCard  titolo = {elemento.titolo}/>
                            {currentCard? <div className="bold"> <MetadatoCard metadato = {elemento.metadato}/></div>: <MetadatoCard metadato = {elemento.fondazione}/>}
                            <div className="innerCard">
                            <ImmagineCard  immagine = {elemento.immagine}/>
                            </div>
                            <div className="descriptionBox">
                            <DescrizioneCard descrizione = {elemento.descrizione}/>
                            </div>  
                            <ButtonCard buttonName = {elemento.buttonName} flip = {flipCard} ></ButtonCard>
                            </div>
                            </li>
                            </> 
                            : 
                            <> <li className="cardLarge" key = {elemento.id}>
                            <div className="borderCard">
                            <TitoloCard  titolo = {elemento.titolo}/>
                            {currentCard? <div className="bold"> <MetadatoCard metadato = {elemento.metadato}/></div>: <MetadatoCard metadato = {elemento.fondazione}/>}
                            <div className="innerLargerCard">
                            <ImmagineCard  immagine = {elemento.immagine}/>
                            </div>
                            <div className="descriptionBox">
                            <DescrizioneCard descrizione = {elemento.descrizione}/>
                            </div>  
                            <ButtonCard buttonName = {elemento.buttonName} flip = {flipCard} ></ButtonCard>
                        </div>
                        </li> 
                        </>}
                    </div>
                    );
                })}
            </div>
        
    );
}

export default Civiltá;
import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";


function Romani ()
{

    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
    modificaStatoCiv(!statoCiv)}

    return (
        <div className="card">
            <TitoloCard titolo="Impero Romano"></TitoloCard> 
            <MetadatoCard metadato="È perdurato per circa 1500 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/800px-Roman_Empire_Trajan_117AD.png"></ImmagineCard>
            <DescrizioneCard  description="Un impero che è riuscito a conquistare e a mantenere il controllo su gran parte dell'odierna Europa, del Nord-Africa e delle regioni del vicino Oriente."></DescrizioneCard>
            <div><br></br></div>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
        </div>
    );
}

export default Romani;
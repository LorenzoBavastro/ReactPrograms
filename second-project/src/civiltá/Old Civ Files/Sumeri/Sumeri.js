import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";

function Sumeri ()
{

    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
    modificaStatoCiv(!statoCiv)}

    return(
        <div className="card">
            <TitoloCard titolo="Sumeri"></TitoloCard> 
            <MetadatoCard metadato="Sono perdurati per circa 1000 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Ciudades_de_Sumeria.svg/390px-Ciudades_de_Sumeria.svg.png"></ImmagineCard>
            <DescrizioneCard  description="Sviluppatisi nel territorio mesopotamico, il loro regno, suddiviso in cittá stato, si rese protagonista della creazione di alcune delle piú emblematiche invenzioni dell'umanitá... ad esempio gli scacchi"></DescrizioneCard>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
            </div>
    );
}

export default Sumeri;
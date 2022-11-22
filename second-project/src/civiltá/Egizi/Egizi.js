import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";




function Egizi()
{

    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
        modificaStatoCiv(!statoCiv)}
        

    return(
        <div className="card">
            <TitoloCard titolo="Antico Egitto"></TitoloCard>
            <MetadatoCard metadato="È perdurato per circa 4000 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Egypt_1450_BC.svg/800px-Egypt_1450_BC.svg.png"></ImmagineCard>
            <div>
            <br></br>
            <DescrizioneCard description="Un regno che assume a tratti la dimensione di impero. Centro vitale per lo sviluppo della civiltá umana nonchè costante di tutta l'antichitá."></DescrizioneCard>
            <br></br>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
         </div>
         </div>
    );
}

export default Egizi;
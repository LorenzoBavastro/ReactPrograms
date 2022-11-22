import TitoloCard from "../TitoloCard";
import MetadatoCard from "../MetadatoCard";
import DescrizioneCard from "../DescrizioneCard";
import ButtonCard from "../ButtonCard";
import ImmagineCard from "../ImmagineCard";
import { useState } from "react";

function Cartaginesi()
{

const [statoCiv, modificaStatoCiv] = useState(true)
function MoreInfo(){
    modificaStatoCiv(!statoCiv)}
    
    return(
      
      <div className="card">
            <TitoloCard titolo="Cartagine"></TitoloCard> 
            <MetadatoCard metadato="È perdurata per circa 700 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CarthageMap.png/260px-CarthageMap.png"></ImmagineCard>
            <DescrizioneCard  className="description" description="Cartagine, colonia prospera dei fenici, si impose tramite il commercio come signora del mediterraneo occidentale, nonchè come principale contendente alla sicilia greca ed alla nuova potenza romana nelle guerre puniche."></DescrizioneCard>
           <div><br></br></div>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
        </div>

    );
}

export default Cartaginesi;
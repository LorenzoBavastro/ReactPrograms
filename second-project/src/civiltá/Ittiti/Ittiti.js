import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";


function Ittiti()
{

    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
    modificaStatoCiv(!statoCiv)}

    return(
        <div className="card">
            <TitoloCard titolo="Ittiti"></TitoloCard> 
            <MetadatoCard metadato="È perdurato per circa 700 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/8/84/Hittite_Empire.png"></ImmagineCard>
            <DescrizioneCard  className="description" description="Civiltá che occupó il territorio compreso fra Anatolia e mezzaluna fertile, che rivoluzionó l'uso del cavallo come animale tramite le staffe. Il conflitto con il vicino Egitto rimase scolpito nella storia"></DescrizioneCard>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
        </div>
    );
}

export default Ittiti;
import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";

function Han()
{
    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
    modificaStatoCiv(!statoCiv)}

    return(
        <div className="card">
            <TitoloCard titolo="Han"></TitoloCard>
            <MetadatoCard metadato="È perdurato per circa 400 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Han_commanderies_and_kingdoms_CE_2.jpg/400px-Han_commanderies_and_kingdoms_CE_2.jpg"></ImmagineCard>
            <div>
            <br></br>
            <DescrizioneCard description="Un impero che ha mantenuto stabilmente il potere su tutta l'odierna cina centro-settentrionale, al cui interno si ebbero grandi innovazioni tecnologiche"></DescrizioneCard>
            <br></br>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
         </div>
         </div>
    );
}

export default Han;
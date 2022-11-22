import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";


function Persiani ()
{
    
    
    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
    modificaStatoCiv(!statoCiv)}

    return(
        <div className="card">
            <TitoloCard titolo="Persiani"></TitoloCard> 
            <MetadatoCard metadato="È perdurato per circa 250 anni"></MetadatoCard>
            <ImmagineCard url ="https://upload.wikimedia.org/wikipedia/commons/5/5f/Achaemenid_Empire_500_BCE.jpg"></ImmagineCard>
            <DescrizioneCard  className="description" description="Un impero multiculturale che ha saputo estendersi in tutto il vicino oriente antico ed anche gli odierni Iran, Pakistan, Egitto e Afghanistan"></DescrizioneCard>
            <div><br></br></div>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
        </div>
    );
}

export default Persiani;
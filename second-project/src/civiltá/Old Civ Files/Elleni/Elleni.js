import { useState } from "react";
import ButtonCard from "../ButtonCard";
import DescrizioneCard from "../DescrizioneCard";
import ImmagineCard from "../ImmagineCard";
import MetadatoCard from "../MetadatoCard";
import TitoloCard from "../TitoloCard";


function Elleni()
{
    const [statoCiv, modificaStatoCiv] = useState(true)
    function MoreInfo(){
    modificaStatoCiv(!statoCiv)}
    return (
        <div className="card">
            <TitoloCard titolo="Elleni"></TitoloCard>
            <MetadatoCard metadato="Perdurarono per oltre 2000 anni"></MetadatoCard>
            <ImmagineCard url ="https://www.fattiperlastoria.it/wp-content/uploads/2021/12/1-5-600x375.jpg"></ImmagineCard>
            <div>
            <br></br>
            <DescrizioneCard description="Un regno che assume a tratti la dimensione di impero. Centro vitale per lo sviluppo della civiltá umana nonchè costante di tutta l'antichitá."></DescrizioneCard>
            <br></br>
            <ButtonCard buttonName ="More Info" moreInfo={MoreInfo}></ButtonCard>
            </div>
            </div>
    );
}

export default Elleni;
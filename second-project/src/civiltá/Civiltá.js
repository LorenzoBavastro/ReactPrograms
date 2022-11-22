import DescrizioneCard from "./DescrizioneCard";
import ImmagineCard from "./ImmagineCard";
import TitoloCard from "./TitoloCard";
import listaCivs from "../listaCiviltá";
import MetadatoCard from "./MetadatoCard";


function Civiltá ()
{
    return(
            <div >
                {listaCivs.map((elemento) =>
                {
                    return(
                        <li className="card" key = {elemento.id}>

                            <TitoloCard  titolo = {elemento.titolo}/>
                            <MetadatoCard metadato = {elemento.metadato}/>
                            <ImmagineCard  immagine = {elemento.immagine}/>
                            <DescrizioneCard descrizione = {elemento.descrizione}/>

                        </li>
                    );
                })}
            </div>
        
    );
}

export default Civiltá;
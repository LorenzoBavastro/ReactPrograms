import TitoloCartagine from "./TitoloCartagine";
import MetadatoCartagine from "./MetadatoCartagine";
import ImmagineCartagine from "./ImmagineCartagine";
import DescrizioneCartagine from "./DescrizioneCartagine";
import ButtonCartagine from "./ButtonCartagine";

function Cartaginesi()
{
    return(
        <div className="card">
            <TitoloCartagine></TitoloCartagine>
            <MetadatoCartagine></MetadatoCartagine>
            <ImmagineCartagine></ImmagineCartagine>
            <DescrizioneCartagine></DescrizioneCartagine>
            <ButtonCartagine></ButtonCartagine>
        </div>
    );

}

export default Cartaginesi;
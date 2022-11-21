import ButtonElleni from "./ButtonElleni";
import DescrizioneElleni from "./DescrizioneElleni";
import ImmagineElleni from "./ImmaginiElleni";
import MetadatoElleni from "./MetadatoElleni";
import TitoloElleni from "./TitoloElleni";

function Elleni()
{
    return (
        <div className="card">
            <TitoloElleni></TitoloElleni>
            <MetadatoElleni></MetadatoElleni>
            <ImmagineElleni></ImmagineElleni>
            <DescrizioneElleni></DescrizioneElleni>
            <ButtonElleni></ButtonElleni>
            </div>
    );
}

export default Elleni;
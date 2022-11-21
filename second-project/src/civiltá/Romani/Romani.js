import ButtonRomani from "./ButtonRomani";
import DescrizioneRomani from "./DescrizioneRomani";
import ImmagineRomani from "./ImmaginiRomani";
import MetadatoRomani from "./MetadatoRomani";
import TitoloRomani from "./TitoloRomani";

function Romani ()
{
    return (
        <div className="card">
            <TitoloRomani></TitoloRomani>
            <MetadatoRomani></MetadatoRomani>
            <ImmagineRomani></ImmagineRomani>
            <DescrizioneRomani></DescrizioneRomani>
            <ButtonRomani></ButtonRomani>
             </div>
    );
}

export default Romani;
import ButtonHan from "./ButtonHan";
import DescrizioneHan from "./DescrizioneHan";
import ImmagineHan from "./ImmaginiHan";
import MetadatoHan from "./MetadatoHan";
import TitoloHan from "./TitoloHan";

function Han()
{
    return(
        <div className="card">
            <TitoloHan></TitoloHan>
            <MetadatoHan></MetadatoHan>
            <ImmagineHan></ImmagineHan>
            <DescrizioneHan></DescrizioneHan>
            <ButtonHan></ButtonHan>
             </div>
    );
}

export default Han;
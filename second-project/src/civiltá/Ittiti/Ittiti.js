import ButtonIttiti from "./ButtonIttiti";
import DescrizioneIttiti from "./DescrizioneIttiti";
import ImmagineIttiti from "./ImmaginiIttiti";
import MetadatoIttiti from "./MetadatoIttiti";
import TitoloIttiti from "./TitoloIttiti";

function Ittiti()
{
    return(
        <div className="card">
            <TitoloIttiti></TitoloIttiti>
            <MetadatoIttiti></MetadatoIttiti>
            <ImmagineIttiti></ImmagineIttiti>
            <DescrizioneIttiti></DescrizioneIttiti>
            <ButtonIttiti></ButtonIttiti>
            </div>
    );
}

export default Ittiti;
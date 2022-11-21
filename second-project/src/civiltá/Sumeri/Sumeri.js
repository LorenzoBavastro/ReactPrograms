import ButtonSumeri from "./ButtonSumeri";
import DescrizioneSumeri from "./DescrizioneSumeri";
import ImmagineSumeri from "./ImmagineSumeri";
import MetadatoSumeri from "./MetadatoSumeri";
import TitoloSumeri from "./TitoloSumeri";

function Sumeri ()
{
    return(
        <div className="card">
            <TitoloSumeri></TitoloSumeri> 
            <MetadatoSumeri></MetadatoSumeri>
            <ImmagineSumeri></ImmagineSumeri>
            <DescrizioneSumeri></DescrizioneSumeri>
            <ButtonSumeri></ButtonSumeri>
            </div>
    );
}

export default Sumeri;
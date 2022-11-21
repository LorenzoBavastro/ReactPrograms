import TitoloEgizi from './TitoloEgizi';
import MetadatoEgizi from './MetadatoEgizi';
import ImmagineEgizi from './ImmagineEgizi';
import DescrizioneEgizi from './DescrizioneEgizi';
import ButtonEgizi from './ButtonEgizi';


function Egizi()
{
    return(
        <div className="card">
            <TitoloEgizi></TitoloEgizi>
            <MetadatoEgizi></MetadatoEgizi>
            <ImmagineEgizi></ImmagineEgizi>
            <DescrizioneEgizi></DescrizioneEgizi>
            <ButtonEgizi></ButtonEgizi>
        </div>
    );
}

export default Egizi;
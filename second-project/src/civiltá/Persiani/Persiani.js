import ButtonRomani from "../Romani/ButtonRomani";
import DescrizioneRomani from "../Romani/DescrizioneRomani";
import ImmaginePersiani from "./ImmaginePersiani";
import MetadatoPersiani from "./MetadatoPersiani";
import TitoloPersiani from "./TitoloPersiani";

function Persiani ()
{
    return(
        <div className="card">
            <TitoloPersiani></TitoloPersiani>
            <MetadatoPersiani></MetadatoPersiani>
            <ImmaginePersiani></ImmaginePersiani>
            <DescrizioneRomani></DescrizioneRomani>
            <ButtonRomani></ButtonRomani>
            </div>
    );
}

export default Persiani;
import Cartaginesi from "./civiltá/Cartagine/Cartaginesi";
import Egizi from "./civiltá/Egizi/Egizi";
import Elleni from "./civiltá/Elleni/Elleni";
import Han from "./civiltá/Han/Han";
import Ittiti from "./civiltá/Ittiti/Ittiti";
import Persiani from "./civiltá/Persiani/Persiani";
import Romani from "./civiltá/Romani/Romani";
import Sumeri from "./civiltá/Sumeri/Sumeri";


function ListaCiviltá() {
  
    return(
      <div>
        <Cartaginesi></Cartaginesi>
        <Egizi></Egizi>
        <Elleni></Elleni>
        <Han></Han>
        <Ittiti></Ittiti>
        <Romani></Romani>
        <Sumeri></Sumeri>
        <Persiani></Persiani>
      </div>
    );
  }
  
  export default ListaCiviltá;
  
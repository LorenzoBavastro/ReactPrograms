import Cartaginesi from "./civiltá/Cartagine/Cartaginesi";
import Egizi from "./civiltá/Egizi/Egizi";
import Elleni from "./civiltá/Elleni/Elleni";
import Han from "./civiltá/Han/Han";
import Ittiti from "./civiltá/Ittiti/Ittiti";
import Persiani from "./civiltá/Persiani/Persiani";
import Romani from "./civiltá/Romani/Romani";
import Sumeri from "./civiltá/Sumeri/Sumeri";


function ListaCiviltá() {
    return (
      <div>
          <Romani></Romani>
          <Sumeri></Sumeri>
          <Ittiti></Ittiti>
          <Persiani></Persiani>
          <Elleni></Elleni>
          <Cartaginesi></Cartaginesi>
          <Egizi></Egizi>
          <Han></Han>
  
      </div>
    );
  }
  
  export default ListaCiviltá;
  
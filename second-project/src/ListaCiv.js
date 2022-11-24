import { useState } from "react";
import Civiltá from "./civiltá/Civiltá";
import Header from "./Header";


function ListaCiv ()
{

    const [frontCard, flipCard] = useState(0);

    function flip()
    {
        flip(frontCard+1)
    }

    return(
        <div>
            <Header></Header>
        <div className="cardContainer">
        <ul>
            <div>
            <Civiltá></Civiltá>
            </div>
        </ul>
        </div>
        </div>
    )
}

export default ListaCiv;
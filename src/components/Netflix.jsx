import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

const Netflix =()=>{
    return(
        <ul className="grid grid-three-cols">
            {
                seriesData.map((currElem)=>
                    <SeriesCard key={currElem.id} currElem ={ currElem}/>
                    
                )
            }
        </ul>
        
    );
}
export default Netflix;
 
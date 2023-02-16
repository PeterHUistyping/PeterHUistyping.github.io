import resource from '/asset/data/Hr_Award.json';
import {Tbody} from './helper/tableCommon';

export default function HrAw_table(){
    //const keys = [...Array(resource.length).keys()];
    const keys = [...Array(resource.length).keys()];
    return(
    <table class="table_pastproject">
        {keys.map((item)=>(
            <Tbody id={item} resource={resource}/>
        ))}  
    </table> 
    )
}

 
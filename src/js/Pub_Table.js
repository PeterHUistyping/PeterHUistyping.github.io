/* All rights reserved. 2022-2026 (c) Peter HU */


import resource from '../asset/data/Pub.json';
import All_table from './helper/tableCommon';

export default function Pub_table(props){
    return <All_table 
        resource={resource} 
        display_type={'research'}
        displayNum={props.displayNum}
    />
}

 
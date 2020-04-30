// FullRoster- ը կրկնում է բոլոր ծրագրավորողներին և ստեղծում է հղում իրենց
// պրոֆիլի էջին:

import React from 'react'

import {PlayerAPI} from './PlayerAPI'
import Developers from "./Developers/Developers";
import classes from "./Developers/Developers.module.css";
import {withRouter} from 'react-router-dom';

function FullRoster(props) {
    return (
        <div className={classes.flex}>
            {PlayerAPI
                .all()
                .map((elem, index) => (<Developers
                    onclick={() => props.history.push('/roster/' + elem.number)}
                    key={index}
                    index={index}
                    name={elem.name}
                    salary={elem.salary}
                    skilss={elem.position}/>))
}
        </div>
    )
}
export default withRouter(FullRoster)
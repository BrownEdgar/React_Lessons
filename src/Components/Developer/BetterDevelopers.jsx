// /////////////////////////////////////////////////////////////////////////////
// - Այս կոմպոնենտը նպաստում է App-ի  կոդի բարելավմանը/մաքրմանը 
//	1․  App.js-ից հանվում է 'map()' ֆունկցիա 
//	2․ 'Developers'-ը App.js-ում  ներկայցնում է արդեն 
//		'BetterDevelopers'-ը  կարճ տարբերակով
// /////////////////////////////////////////////////////////////////////////////

import React from 'react'
import Developers from './Developers'

export default function BetterDevelopers(props) {

  return (
    props.developers.map((elem, index) => {
      return (
        <Developers
          click={() => props.clicked(index)}
          key={index}
          name={elem.name}
          skilss={elem.skilss}
          changeTitle={(event) => props.changeTitleHandler(elem.name)}
        />
      );
    }))
}

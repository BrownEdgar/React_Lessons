// /////////////////////////////////////////////////////////////////////////////
// - React - ին բնորոշ տվյալների փոխանցումն իրականացվում է վերևից ներքև(ծնողից մինչև երեխա)  - `օգտագործելով ՛props՛-ը
// - React.createContext-ը թույլ է տալիս կ-րի միջև փոխանցել տվյալներ, առանց	միջանկյալ մակարդակներում ՛props՛-ի փոխանցման,
// - Context-ը կարելի է ասել ստեղծված է ՛ԳԼՈԲԱԼ՛ տվյալների փոխանցման համար
// - Context-ը մեկ այլ տեղ օգտագործելու համար պետք է ՛export՛ անել
// - Կազմված է 2 մասից․-օգտագործման եղանակը ցույց է տրված օրինակում
// 		Provider (անգ․ ՄԱՏԱԿԱՐԱՐ) 		Consumer (անգ․ ՍՊԱՌՈՂ)
// - Սովորաբար, Context(ենթատեքստ)-ը օգտագործվում է, եթե անհրաժեշտ է տվյալների բազա ապահովել բազմաթիվ կոմպոնենտներում և տարբեր մակարդակներում։Հնարավորության դեպքում մի օգտագործեք այն, քանի որ դա բարդացնում է կոմպոնենտների վերաօգտագործումը:
// - ԿԱՐԴԱԼ ԱՎԵԼԻՆ --> https://ru.reactjs.org/docs/context.html#when-to-use-context

// /////////////////////////////////////////////////////////////////////////////

import { Component, createContext } from 'react';
import RContext from './R_Context';

export const MyContext = createContext('Default value');
export const MyContext2 = createContext('Default value2');
MyContext.displayName = 'MyDisplayName';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateValue: 'Context',
    };
  }
  render() {
    return (
      <div>
        {/* Provider թույլ է տալիս օգտագործոլ այստեղ "context"-ը
				և հետևել նրա թարմացումներին։Իր մեջ ստանում է 'prop':value
				որը փոխանցվում է բոլոր զավակներին 
				Եթե օգտագործում ենք "MyContext.Provider" -ը ապա այն առանց "value" չենք կարող թողնել, հակառակ դեպքում պետք է այն ամբողյությամբ ջնջել*/}
        <MyContext.Provider>
          <RContext />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;

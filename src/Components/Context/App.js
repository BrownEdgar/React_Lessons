// /////////////////////////////////////////////////////////////////////////////
// - React.createContext-ը թույլ է տալիս կ-րի միջև փոխանցել տվյալներ, առանց
// 		միջանկյալ մակարդակներում ՛props՛-ի փոխանցման,
// - Context-ը կարելի է ասել ստեղծված է ՛ԳԼՈԲԱԼ՛ տվյալների փոխանցման համար
// - Context-ը մեկ այլ տեղ օգտագործելու համար պետք է ՛export՛ անել
// - Կազմված է 2 մասից․-օգտագործման եղանակը ցույց է տրված օրինակում
// 		Provider (անգ․ ՄԱՏԱԿԱՐԱՐ) 		Consumer (անգ․ ՍՊԱՌՈՂ)
// - Սովորաբար, Context(ենթատեքստ)-ը օգտագործվում է, եթե անհրաժեշտ է տվյալների բազա
// 		ապահովել բազմաթիվ կոմպոնենտներում և տարբեր մակարդակներում։Հնարավորության դեպքում
//  	մի օգտագործեք այն, քանի որ դա բարդացնում է կոմպոնենտների վերաօգտագործումը:
// - ԿԱՐԴԱԼ ԱՎԵԼԻՆ --> https://ru.reactjs.org/docs/context.html#when-to-use-context

// /////////////////////////////////////////////////////////////////////////////


import React, {Component} from 'react';
import RContext from './R_Context';

export const MyContext = React.createContext("Default value");
export const MyContext2 = React.createContext("Default value2");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateValue: "Context"
        }
    }
    render() {
        return (
            <div>
                <MyContext.Provider value={"Hedding1"}>
                    <MyContext2.Provider value={"Hedding2"}>
                        <RContext/>
                    </MyContext2.Provider>
                </MyContext.Provider>
            </div>
        );
    }
}

export default App;
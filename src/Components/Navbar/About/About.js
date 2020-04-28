////////////////////////////////////////////////////////////////////////////////
// - withRouter Ռոուտինգի հնարավորություններին այտեղ մուտք ունենալու համար
// export default withRouter(Header) - Անց է կացնում կոմպոնենտը "Իր միջով", ավելացնելով նրա  props-ում history...
// Արվում է նրա համար, որ մենք այստեղից կարողանանք նավիգացիա կառուցել(օր․ 'home' տանող կոճակ )
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
// import photo from '../../../img/photo-React.jpg'
 import { withRouter } from 'react-router-dom';

 function About(props) {
	 //մյուս դասի թեմա
	const goToHomePage= () =>  {
		return (
			props.history.push({
				pathname: "/"
			})
		);
	}
	console.log('props', props);
	console.log('props', props.history);
	 const id = props.match.params.id;
	 const name = props.match.params.name;
	return (		
		<div>
			<h1>{props.name}</h1>
			<h2>id: {id}  Name: {name}</h2>;
			{/* <img src="./photo-React.jpg" alt="Nkar"/> */}
			{/* //մյուս դասի թեմա */}
			<button onClick={goToHomePage.bind(this)}>Home Page</button>
			<button onClick={() => props.history.push('/about/' + props.name)}>go to 'about/part2'</button>
		</div>
	)
}
export default withRouter(About);
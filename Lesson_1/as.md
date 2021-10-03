 <script type="text/babel">
/////////////////////////////////////Mas 1/////////////////////////////////////////
// Syntax --> React.createElement("tagName" [,{atributes}][,children][, content])
	// 1."tagName"	- Html թեգի անուն, որը պետք է սարքել
	// 2.atributes	- Թեգի ատրիբուտներ (օր․ 'class','onClick'), նշանակվելու է օբյեկտ մեջ | եթե ատրիբուտ չունի նշանակում են null  
	// 3.children	- Թեգի զավակ, կարա լինի օրինակ "h1" | "p"
	// 3.content	- զավակի բովանդակությունը, կարա լինի նաև մեկ այլ React․createElement
		


	//  let element = React.createElement('h1', {className:"box"}, "Hello World!");
	//  ReactDOM.render(element, document.getElementById('root'));

  //    const element = React.createElement(
	// 		"div",
	// 		{
	// 			className: "root",
	// 			onClick: () => console.log("React is working!")
	// 		},
	// 		"hello World"
	// 	)
	// 	ReactDOM.render(element, document.getElementById('root'));


	// //Mas 2 => Each child in a list should have a unique "key" prop.
	// const contact = [
	// 		{ id: 1, name: "Bruce Lee" },
	// 		{ id: 2, name: "Michael Jackson" },
	// 		{ id: 3, name: "Michael Jordan" }
	// 	]
	// const element = React.createElement(
	// 		"div",null,
	// 		React.createElement("h1", null, "Contacts"),
	// 		contact.map((elem)=>{
	// 			return React.createElement("div", {key:elem.id}, elem.name)
	// 		})
	// 	)
	// 	const element2 = React.createElement(
	// 	  "ul",
	// 	  null,
	// 	  contact.map(contact => React.createElement("li", { key: contact.id }, contact.name))
	// 	);

	//   ReactDOM.render(element2, document.getElementById('root'));
	// // 		//--> Lesson 2 JSX	

			
	// 	</script>
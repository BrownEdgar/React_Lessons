import axios from "axios"
export const getData = async () => {
	return await axios("https://jsonplaceholder.typicode.com/users")
		.then((data) => data.data)
		.then((data) => data[0] )//Վերադարձնում է որպես պատասղան առաջյին user-ին
		.catch((err) => console.error(err))
}
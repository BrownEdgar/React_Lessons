import React,{useState} from 'react'

export default function Test() {
			const [name, setName] = useState("");
			const [password, setPassword] = useState("");
	const handleChange = (e) => {
		e.persist()
		console.log(e);
		e.target.type === "text" 
		? setName(e.target.value)
		: setPassword(e.target.value);
	}
    return (
        <div>
					<form>
					<input type="text" value={name} onChange={handleChange}/>
					<input type="password" value={password} onChange={handleChange}/>
					</form>
   
            
        </div>
    )
}


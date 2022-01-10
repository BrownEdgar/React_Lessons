import React,{useState} from 'react'
import "./App.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
const initialValues = {
	email: "nikogosjanedgar@mail.com",
	password: "",
	message: "your message here"
}
const onSubmit = values => {
	console.log(values);
}
const validationSchema = yup.object({
	email: yup.string().email("Invalid Email format").required("Required"),
	password: yup.string().matches(/^[A-Z][a-z0-9]{8,20}$/g,{message: "Sad"}),
	message: yup.string().min(50)
})

export default function TestForm2() {
 const [state, setstate] = useState(true)
 const  change = () =>{
   if(!state){
	   setstate(true)
   }else{
	   setstate(false)
   }
 }
	return (
		<div className='container'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				>
				<Form>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<Field type="email" name="email" id="email" />
						<ErrorMessage name="email" component="p"/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<div className="achq" onClick={change}></div>
						<Field type={state ? "password" : "text"} name="password" id="password" />
						<ErrorMessage name="password" component="p"/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Password</label>
						<Field as="textarea" name="message" id="message"/>
						<ErrorMessage name="message" component="p" />
					</div>
					<button type='submit'>submit</button>
				</Form>
			</Formik>	
		</div>
	)
}

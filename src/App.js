////////////////////////////////////////////////////////////////////////////////////////////////
//  Այստեղ import արած Կոմպենենտները փողաչինում են․՝
// *Formik - 'div'-ին,որի մեջ ներառված էր "form"-ը (տես հին օրինակը), բոլոր քոնֆիգները տալիս ենք այս թեգի մեջ
// *Form -  "form" թեգին
// *Field -  "input"-ին
// *ErrorMessage -  հին օրինակ 54 տողով գրած "error" լոգիկաըին, իր մեջ կա արդեն ավտոմատ այդ բոլոր ստուգումները
//
////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
import "./App.css"
import { Formik, Form,Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
	name: yup.string().required("Required"),
	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),
	lesson: yup.string().required("Required"),
})
const initialValues = {
	name: "Edgar",
	email: "",
	lesson: "",
}

const onSubmit = values => {
	console.log("form data:", values)
}

export default function App() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form >
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage name="name"/>
					{/* {formik.errors.name && formik.touched.name ? <div className="errors">{formik.errors.name}</div> : null} */}
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<Field type="email" id="email" name="email"/>
					<ErrorMessage name="email" />
				
				</div>
				<div className="form-control">
					<label htmlFor="lesson">Lesson</label>
					<Field type="text" id="lesson" name="lesson"
					/>
					<ErrorMessage name="lesson" />
					
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	)
}

// https://youtu.be/PpdXB9Ru6oI?list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu
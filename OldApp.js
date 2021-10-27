import React from 'react'
import "./App.css"
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
	name: yup.string().required("Required"),
	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),
	lesson: yup.string().required("Required"),
})

export default function App() {
	const formik = useFormik({
		initialValues: {
			name: "Edgar",
			email: "",
			lesson: "",
		},
		onSubmit: values => {
			console.log("form data:", values)
		},
		validationSchema
		// validate: values => {
		// 	let errors = {}
		// 	if (!errors.name) {
		// 		errors.name = "Required"
		// 	}
		// 	if (!errors.email) {
		// 		errors.email = "Required"
		// 	}
		// 	if (!errors.lesson) {
		// 		errors.lesson = "Required"
		// 	}
		// 	return errors;
		// },
	})

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input 
						type="text" 
						id="name" 
						name="name" 
						//այս 3 ֆունկցիաները նոր վերսիայում պետք է փոխվեն {...formik.getFieldProps("name")}-ով
						onChange={formik.handleChange} 
						value={formik.values.name}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.name && formik.touched.name ? <div className="errors">{formik.errors.name}</div> : null}
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<input 
						type="email" 
						id="email" 
						name="email" 
						onChange={formik.handleChange} 
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.email && formik.touched.email ? <div className="errors">{formik.errors.email}</div> : null}
				</div>
				<div className="form-control">
					<label htmlFor="lesson">Lesson</label>
					<input 
						type="text" 
						id="lesson" 
						name="lesson" 
						onChange={formik.handleChange} 
						value={formik.values.lesson}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.lesson && formik.touched.lesson ? <div className="errors">{formik.errors.lesson}</div> : null}
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

// https://youtu.be/PpdXB9Ru6oI?list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu
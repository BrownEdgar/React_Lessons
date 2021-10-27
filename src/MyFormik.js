import React from 'react'
import { useFormik } from 'formik'
import "./App.css"
import * as yup from 'yup'
const validationSchema = yup.object({

	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),
	password: yup.string().required("Required"),
})
export default function MyFormik() {
	
	const formik = useFormik({
		initialValues: {
			email: "nikogosjanedgar@gmail.com",
			password: ""
		},
		onSubmit: values => {
			console.log(values)
		},
		validationSchema
	})
			console.log(formik.touched)
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.email && formik.touched.email ? <div className="errors">{formik.errors.email}</div> : null}
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.password && formik.touched.password ? <div className="errors">{formik.errors.password}</div> : null}
				</div>
				<button type="submit">submit</button>

			</form>
		</div>
	)
}

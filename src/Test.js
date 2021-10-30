import React from 'react'
import { useFormik } from "formik"
import * as yup from 'yup'
const validationSchema = yup.object({

	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),
	password: yup.string().required("Required"),
})
const initialValues = {
	email: "",
	password: "",
}
const onSubmit = values => {
	console.log(values);
}
export default function Test() {

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
	})

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input 
						type="email" 
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
				</div>
				<div className="form-control">
					<label htmlFor="password">password</label>
					<input 
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
				</div>
				<input type="submit" value="submit" />
			</form>
			
		</div>
	)
}


#  useFormik: նաղապես պետք է բեռնել 'formik' "package"-ը =>  npm i formik
# ---------------------------------------- -- -- ՄԱՍ 1 -- -- ----------------------------------------
-  1. - import անել 'useFormik' հուկը 'formik'-ից
-  2. ստեղծել useFormik({}) ներդրված օբյոշեկտը, որը կպարունակի `initialValues` անունով օբյեկտ
-  3. Այդ օբյեկտում պետք է պահել ապագայում "input" դասհտի "value"-ն պահող բանալիները, 
- ՊԵՏՔ Է ՀԱՆԸՆԿՆԵՆ  "name" դաշտի անվան հետ
-  4. "input"-ի "value"-րը պետք է նշանակել  "formik.values.<InputName>" ձևով։
- 'formik'-ը այն ավտոմատ կվերցնի "initialValues"-ի համապատասխան դաշտից
-  5.  "onChange" ֆունկցիան նշանակել `onChange={formik.handleChange}` ձևով։formi-ի "helper methods"-ից մեկն է
այս մեթոդը կարդում է "name" դաշտի արժեքը է `initialValues` օբյեկտում փոխում է համապատասխան <key>-ը
-  6. console.log(formik.values) Անել արդյունքը ստուգելու համար, այն պետք է տպի "initialValues" օբյեկտը 


# ---------------------------------------- -- -- ՄԱՍ 2 -- -- ----------------------------------------
-  1. `	onSubmit={formik.handleSubmit} ` գրառումը ավելացնել <form>-ի մեջ
-  2. ` onSubmit ` մեթոդը ավելացնել `initialValues` օբյեկտում։ Այն կաշխատի ավտօմատ "submit" կոչակին սեղմելուց հետո
այս ֆունկցիան ստանւմ է "values" պառամետրը, որը նույն "initialValues" օբյեկտն է:
-  3. ` validate ` մեթոդը ավելացնել `initialValues` օբյեկտում։ ԱՅՆ ՊԵՏՔ Է ՍՏԵՂԾԻ ԵՎ ՎԵՐԱԴԱՐՁՆԻ `errors` ՕԲՅԵԿՏ 
Այդ օբյեկտում պահվող <key>-ը պետք է ունենան նույն "input" դասհտի անունները:Հենց այս <key>-ի մեջ էլ պետք է պահեկոնկրետ "input"-ին վերաբերող "ErrorMessage"-ը։
console.log(formik.errors) Անել արդյունքը ստուգելու համար, այն պետք է տպի "errors" օբյեկտը
-  4.  Կազմակերպել <ErrorMessage>-րի ցուցադրումը էջում։ `formik.errors.<InputName>` դաշտից կախված պետք է կատարեվ պայմանական ստուգում և նկարել "ErrorMessage"-ը։ Օր․՝
 # ` {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null} ` # 
-  5. `	onBlur={formik.handleBlur} ` մեթոդը ավելացնել բոլոր "input"-ի մեջ, որպեսզի կարողանանք օգտագործել <touched> հնարավորությունը ր իմանանք թե արդյոք "user"-ը մտել է այդ "input"-ի մեջ։
console.log(formik.touched) Անել արդյունքը ստուգելու համար, այն պետք է տպի  օբյեկտը "true" արժեքներ դնելով բոլոր մուտք գործած դաշտերի դիմաց


# ---------------------------------------- -- -- ՄԱՍ 3-- -- ----------------------------------------
# պետք է բեռնել 'yup' "package"-ը =>  npm i yup
-  1. import անել 'useFormik' հուկը 'formik'-ից
-  2.  `validationSchema` ստեծել կոդի օրինակով, ՕԲՅԵԿՏ է, որը պետք է պարունակի բոլոր "input" դասհտի անունները,և որի դիմաց պետք է գրվի համապատասխան ստուգում։օր․՝
{
	name: yup.string().required("Required"),
	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),

}
-  3. Ջնջել նախկինում սարգած `validate` ֆունկցիան, ավելացնելով փոխարենը `validationSchema`: Ստուգել կոդը։ Կարդալ 'yup'-ի դոկումենտացիան
-  4. 
-  5. 

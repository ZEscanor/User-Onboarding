import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required("Username must be a string")
    .min(5,"Username must be at least 5 character"),
    email:yup.string()
    .email("Needs to be a valid email")
    .required("Email is needed"),
    password: yup.string()
    .required("Must use alphanumeric character")
    .min(6,"password must be at least 6 characters"),
    //checkbox
    termsOfService: yup.boolean().oneOf([true], "Must Accept Terms of Service"),
    // use oneOf if you have a selction as so 
    // .oneOf([entry,entry,entry])
})
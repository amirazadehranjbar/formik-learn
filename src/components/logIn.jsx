import {ErrorMessage, FastField, FieldArray, Form, Formik} from "formik";
import * as yup from "yup";
import FavoritsFieldArray from "./FavoritsFieldArray.jsx";
import FormikComponent from "./formikComponent/FormikComponent.jsx";
import "react-datepicker/dist/react-datepicker.css";
import FormikDatePicker from "./formikComponent/FormikDatePicker.jsx";



const LogIn = () => {


    const initialValues = {
        name: "",
        email:"",
        phone:"",
        verify:"email",
        address: {
            city: "",
            postalCode: ""
        },
        favorits: ["add", "sss"],
        country: "US",
        gender: "mail",
        skills: [],
        birthday:{
            year:"",
            month:"",
            day:""
        },
    };

    const validationSchema = yup.object({
        name: yup.string().required("name is required...!"),
        password: yup.string().required("password is required...!").min(8, "password must be more than 8 characters"),
        email: yup.string().when('verify', {
        is: 'email',
        then:()=> yup.string().email().required('email is required'),
        otherwise:()=> yup.string().email().notRequired()}),

        phone: yup.string().when('verify', {
            is: 'phone',
            then:()=> yup.string().required('phone is required'),
            otherwise:()=> yup.string().notRequired()}),


        address: yup.object({
            city: yup.string().required("city name is required...!"),
            postalCode: yup.string().required("postalCode is required...!"),
        }),
        favorits: yup.array().of(yup.string().required("required"))

    });


    const onSubmit = (values, submitProps) => {

        // Combine year, month, day into a Date object
        const { year, month, day } = values.birthday;
        const birthdayDate = new Date(year, month, day); // month is 0-indexed

        // Optionally, add to values or send separately
        values.birthdayDate = birthdayDate;

        console.log("Birthday as Date:", birthdayDate);
        console.log(values);

        setTimeout(
            () => {
                submitProps.setSubmitting(false);
                // submitProps.resetForm();
            }
            , 5000)
    };

    const handleSaveData = (formik) => {

        localStorage.setItem("userData", JSON.stringify(formik.values));
    }

    const handleLoadData = (formik) => {
        const userData = JSON.parse(localStorage.getItem("userData"));

        if (userData) {
            formik.setValues(userData);
        }

        console.log(userData)

        return userData
    }

    const isSavedUserData = () => {
        const userData = localStorage.getItem("userData");
        return userData.length > 0;
    }

    const options = [
        {
            name: "United States",
            value: "US"
        },

        {
            name: "Canada",
            value: "CA"
        },

        {
            name: "France",
            value: "FR"
        },

        {
            name: "Germany",
            value: "DE"
        },


    ];

    const genderOptions = [
        {value: "mail"},
        {value: "femail"}
    ]

    const skillOptions = [
        {value: "react"},
        {value: "matlab"},
        {value: "R"},
        {value: "flutter"},
        {value: "minitab"},
    ]

    const verifyOptions = [
        {value: "email"},
        {value: "phone"},
    ]



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            {formik => {
                return (<Form>
                    <div className="h-auto w-lg rounded-md bg-amber-50 p-4 flex-col justify-between items-center">

                        <FormikComponent name="name" placeholder="amir" id="name" type="text" label="name"/>

                        <FormikComponent type="textarea" name="bio" placeholder="write your bio here" id="bio"
                                         label="bio"/>

                        <FormikComponent type="select" id="country" name="country" label="country" options={options}/>

                        <FormikComponent type="radio" id="gender" name="gender" label="gender"
                                         options={genderOptions}/>

                        <FormikComponent type="checkbox" name="skills" id="skills" options={skillOptions}
                                         label="skills"/>

                        {/*region password*/}
                        <div className="mt-2">
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900">password</label>

                            <FastField type="password" id="password" name="password"
                                       className="my-input"
                                       placeholder="*******" required/>

                            <ErrorMessage name="password" component="p" className="text-red-500"/>
                        </div>
                        {/*endregion*/}

                        {/*region address*/}

                        <div className="flex justify-between items-center">

                            <div className="mt-2">
                                <label htmlFor="city"
                                       className="block mb-2 text-sm font-medium text-gray-900">city</label>

                                <FastField type="text" id="city" name="address.city"
                                           className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           required/>

                                <ErrorMessage name="address.city" component="p" className="text-red-500"/>
                            </div>

                            <div className="mt-2">
                                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900">postal
                                    code</label>

                                <FastField type="text" id="city" name="address.postalCode"
                                           className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           required/>

                                <ErrorMessage name="address.postalCode" component="p" className="text-red-500"/>
                            </div>
                        </div>
                        {/*endregion*/}

                        {/*region favorits*/}
                        <div className="mt-2">
                            <FieldArray name="favorits">
                                {props => <FavoritsFieldArray {...props}/>}
                            </FieldArray>
                        </div>
                        {/*endregion*/}

                        {/*region verify*/}
                        <div className="flex justify-around items-center">
                            <FormikComponent name="verify"
                                             id="verify" type="radio" label="select verify method"
                                             options={verifyOptions}/>
                            {
                                formik.values.verify === "email"
                                    ? (<FormikComponent name="email" label="email" type="text" placeholder="example@gmail.com"/>)
                                    :(<FormikComponent name="phone" label="phone" type="text" placeholder="091*******"/>)
                            }
                        </div>
                        {/*endregion*/}

                        {/*region datepicker*/}
                        <FormikDatePicker label="birthday" name="birthday"/>
                        {/*endregion*/}


                        {/*region buttons*/}
                        <button type="submit"
                                className="my-button"
                                disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
                            {formik.isSubmitting
                                ? <div role="status">
                                    <svg aria-hidden="true"
                                         className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                : <p>login</p>}
                        </button>


                        {formik.isValid && formik.dirty && !isSavedUserData && (
                            <button className="my-button" type="button" onClick={() => handleSaveData(formik)}>
                                save data in this system
                            </button>
                        )}

                        {isSavedUserData && (
                            <button className="my-button" type="button" onClick={() => alert(handleLoadData(formik))}>
                                load saved data
                            </button>
                        )}
                        {/*endregion*/}


                    </div>
                </Form>);
            }}

        </Formik>
    );
}

export default LogIn;

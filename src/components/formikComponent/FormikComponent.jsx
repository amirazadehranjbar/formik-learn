import {ErrorMessage, FastField} from "formik";
import FormikInput from "./FormikInput.jsx";
import FormikTextArea from "./FormikTextArea.jsx";
import FormikSelectBox from "./FormikSelectBox.jsx";
import FormikRadio from "./FormikRadio.jsx";
import FormikCheckBox from "./FormikCheckBox.jsx";


const FormikComponent = ({label , type , id , name,placeholder,options}) => {
    switch (type) {

        case "text":
            return <FormikInput type={type} placeholder={placeholder} id={id} name={name} label={label}/>;

        case "textarea":
            return <FormikTextArea placeholder={placeholder} id={id} name={name} label={label} />;

        case "select":
            return <FormikSelectBox id={id} name={name} label={label} options={options}/>;

        case "radio":
            return <FormikRadio name={name} label={label} options={options}/>;

        case "checkbox":
            return <FormikCheckBox name={name} label={label} checkboxOptions={options}/>;

    }
}
export default FormikComponent

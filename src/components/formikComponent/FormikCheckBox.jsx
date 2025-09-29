import {ErrorMessage, FastField} from "formik";

const FormikCheckBox = ({label, name, checkboxOptions}) => (
    <div>
        <label>{label}</label>
        <FastField name={name}>
            {({field}) => (


                <ul className="text-sm font-medium text-gray-900 bg-white   rounded-md grid-cols-4 grid gap-2">



                    {checkboxOptions.map((option, index) => (

                        <li key={index} className="w-full border border-gray-600 rounded-md ">


                            <div className="flex items-center ps-3">
                                <input
                                    id={option.value}
                                    type="checkbox"
                                    value={option.value}
                                    name={name}
                                    checked={field.value.includes(option.value)}
                                    onChange={() => {
                                        const set = new Set(field.value);
                                        if (set.has(option.value)) {
                                            set.delete(option.value);
                                        } else {
                                            set.add(option.value);
                                        }
                                        field.onChange({
                                            target: {
                                                name,
                                                value: Array.from(set),
                                            },
                                        });
                                    }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                                />
                                <label className="w-full py-1 ms-2 text-sm font-medium text-gray-900 "
                                       htmlFor={option.value}>
                                    {option.value}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </FastField>
        <ErrorMessage name={name} component="p" className="text-red-500"/>
    </div>
);

export default FormikCheckBox;
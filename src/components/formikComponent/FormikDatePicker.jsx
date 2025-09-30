import {FastField, Form} from "formik";

const FormikDatePicker = ({label}) => {

    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - 1960 + 1}, (_, i) => 1960 + i);

    const months = [
        {value: 1, name: "January"},
        {value: 2, name: "February"},
        {value: 3, name: "March"},
        {value: 4, name: "April"},
        {value: 5, name: "May"},
        {value: 6, name: "June"},
        {value: 7, name: "July"},
        {value: 8, name: "August"},
        {value: 9, name: "September"},
        {value: 10, name: "October"},
        {value: 11, name: "November"},
        {value: 12, name: "December"}
    ];

    const days = Array.from({length: 31}, (_, i) => i + 1);


    return (


        <div className="w-full border-b-1 border-t-1 p-2 mt-2">
            <label> {label}
                <Form className="w-full flex" name="birthday">
                    <div className="w-1/3">

                        <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 ">year</label>
                        <FastField as="select" name="birthday.year" id="year"
                                   className="date-select">

                            {years.map((y, index) => {
                                return (
                                    <option key={index} value={y}>{y}</option>
                                );
                            })}
                        </FastField>
                    </div>

                    <div className="w-1/3">
                        <label htmlFor="month" className="block mb-2 text-sm font-medium text-gray-900 ">month</label>
                        <FastField as="select" name="birthday.month" id="month"
                                className="date-select">

                            {months.map((month, index) => {
                                return (
                                    <option key={index} value={month.value}>{month.name}</option>
                                );
                            })}
                        </FastField>
                    </div>


                    <div className="w-1/3">
                        <label htmlFor="day" className="block mb-2 text-sm font-medium text-gray-900 ">day</label>
                        <FastField as="select" name="birthday.day" id="day"
                                className="date-select">

                            {days.map((day, index) => {
                                return (
                                    <option key={index} value={day}>{day}</option>
                                );
                            })}
                        </FastField>
                    </div>


                </Form>
            </label>

        </div>
    )
}
export default FormikDatePicker

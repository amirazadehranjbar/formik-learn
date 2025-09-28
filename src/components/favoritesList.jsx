import {FastField, FieldArray, ErrorMessage, useFormikContext} from "formik";
import {Trash, Plus} from "lucide-react";

const FavoritesList = () => {
    const formik = useFormikContext();
    const {values} = formik;

    return (
        <div className="mt-4 w-full">
            <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-900">favorits</label>
                <button
                    type="button"
                    className="bg-slate-400 p-1.5 rounded-md"
                    onClick={() => {
                        if(formik.values.favorites.length < 6 ) {
                            formik.setFieldValue("favorits", [...(values.favorits || []), ""]);
                        }
                        else{
                            alert("you can have only 6 favorits")
                        }

                    }}
                >
                    <Plus/>
                </button>
            </div>

            <FieldArray name="favorits">
                {({remove}) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {values.favorits && values.favorits.length > 0 ? (
                            values.favorits.map((fav, index) => (
                                <div key={index} className="w-full rounded">
                                    <div className="flex items-center gap-2">
                                        <FastField
                                            type="text"
                                            name={`favorits.${index}`}
                                            placeholder={`favorits #${index + 1}`}
                                            className="bg-gray-50 border p-2 rounded w-full"
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                remove(index);
                                            }}
                                            className="text-white bg-red-500 px-2 py-1 rounded"
                                        >
                                            <Trash width={"1rem"}/>
                                        </button>
                                    </div>

                                    <ErrorMessage name={`favorits.${index}`} component="p"
                                                  className="text-red-500 mt-1"/>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2">no favorit selected</div>
                        )}
                    </div>
                )}
            </FieldArray>
        </div>
    );
};

export default FavoritesList;

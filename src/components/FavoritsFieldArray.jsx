import {FastField} from "formik";
import {Plus, Trash} from "lucide-react";

const FavoritsFieldArray = (props) => {

    const {form, remove, push} = props;
    const {favorits} = form.values;

    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <label>favorits</label>
                <button className="border-2 rounded-md bg-slate-400 cursor-pointer" onClick={()=>push()}>
                    <Plus/>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                {favorits.map((f, index) => (
                    <div className="flex justify-between items-center gap-2" key={index}>
                        <FastField type="text" className="my-input" name={`favorits[${index}]`}
                                   placeholder={`favorits ${index + 1}`}/>
                        <button className="border-2 rounded-md bg-slate-400 cursor-pointer p-1" onClick={()=>remove(index)}>
                            <Trash/>
                        </button>
                    </div>
                ))

                }


            </div>
        </>

    )
}
export default FavoritsFieldArray

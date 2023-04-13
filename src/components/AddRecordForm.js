import { useState } from "react";
import useAddRecords from '../hooks/useAddRecords';

const AddRecordForm = () => {
    const { addRecord, data, loading, error } = useAddRecords();
    const [formValue, setFormValue] = useState({
        name: '',
        surname: '',
        phone: ''
    });

    const addRecordHandler = () => {
        addRecord(formValue);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const { name, surname, phone } = formValue;

    return (<>
        <div>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={name} />
            <br />
            <input
                type="text"
                name="surname"
                placeholder="Enter your surname"
                onChange={handleChange}
                value={surname} />
            <br />
            <input
                type="number"
                name="phone"
                placeholder="Enter your phone"
                onChange={handleChange}
                value={phone} />
        </div>
        <button onClick={addRecordHandler}>Add record</button>
    </>)
}

export default AddRecordForm;


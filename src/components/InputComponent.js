import { useState } from 'react';
import useUpdateRecords from '../hooks/useUpdateRecords';

const InputComponent = (props) => {
    const { saveRecord, dataSave, loadingSave, errorSave } = useUpdateRecords();
    const [formValue, setFormValue] = useState({
        name: '',
        surname: '',
        phone: ''
    });

    const saveRecordHandler = () => {
        saveRecord(props.id, formValue);
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
            <div className='Inputs'>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={name} 
                />
            <br />
            <input
                type="text"
                name="surname"
                placeholder="Enter your surname"
                onChange={handleChange}
                value={surname} 
                />
            <br />
            <input
                type="number"
                name="phone"
                placeholder="Enter your phone"
                onChange={handleChange}
                value={phone} 
                />
        </div>
        <button onClick={saveRecordHandler}>Save</button>
        </>
    )
};

export default InputComponent;
import { useState, useContext } from 'react';
import useDeleteRecords from '../hooks/useDeleteRecords';
import PhoneCard from './PhoneCard';
import InputComponent from './InputComponent';
import { AuthContext } from "../providers/AuthContext";


const RecordList = (props) => {
  const authCtx = useContext(AuthContext);
  const { delRecord, data, loading, error } = useDeleteRecords();
  const [editIndex, setEditIndex] = useState(null);
  
  const editHandler = (index) => {
      setEditIndex(index);
  };


  const deleteHandler = (index) => {
    delRecord(index);
  };

  const handlerLogout = () => {
    authCtx.doLogout();
  }

  return (
    <>
    <div>
      {props.recordList?.data &&
        props.recordList.data.map((record, index) => (<>
          {editIndex === index ?
            <InputComponent id={index} /> :
            <PhoneCard key={`phone-card-${index}`}>
              {record.name}
              {record.surname}
              {record.phone}
            </PhoneCard>
          }
          {editIndex === index ?
          null :
          <button onClick={() => editHandler(index)}>Edit</button>}
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </>
        ))}
    </div>
    <button type="submit" onClick={handlerLogout}>Logout</button>
    </>
  );
};

export default RecordList;
import { useState } from "react";
import axios from 'axios';
import useFetchRecords from "./useFetchRecords";

const useUpdateRecords = () => {
  const [dataSave, setDataSave] = useState(null);
  const [loadingSave, setLoadingSave] = useState(false);
  const [errorSave, setErrorSave] = useState(undefined);
  const { fetchData } = useFetchRecords(true);

  const saveRecord = (id, dataSave) => {
    setLoadingSave(true);
    axios.put(`records/${id}`, dataSave).then((resp) => {
      setDataSave(resp);
      fetchData();
      setLoadingSave(false);
    });
  }

  return { saveRecord, dataSave, loadingSave, errorSave };
};

export default useUpdateRecords;

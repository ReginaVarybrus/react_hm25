import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { RecordsDataContext } from "../providers/RecordsDataContext";

const useFetchRecords = (isManual = false) => {
  const recordCtx = useContext(RecordsDataContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!isManual) {
      fetchData()
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const dataFetch = await axios.get('records/');
    recordCtx.setRecords(dataFetch);
    setLoading(false);
  }

return { data: recordCtx.records, loading, error, fetchData };
};

export default useFetchRecords;

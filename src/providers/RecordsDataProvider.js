import React, { useState } from "react";
import { RecordsDataContext } from "./RecordsDataContext";

const RecordsDataProvider = (props) => {
    const [records, setRecords] = useState([]);

    const getContextValue = () => {
        return {
            setRecords: (data) => setRecords(data),
            records
        }
    };

    return <RecordsDataContext.Provider value={getContextValue()}>
        {props.children}
    </RecordsDataContext.Provider>
}

export default RecordsDataProvider;
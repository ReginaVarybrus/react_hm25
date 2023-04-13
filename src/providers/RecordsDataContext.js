import React from "react";

export const RecordsDataContext = React.createContext({
    setRecords: () => {},
    records: []
});
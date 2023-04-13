import './App.css';

import AddRecordForm from './components/AddRecordForm';
import PhoneBookRecords from './components/PhoneBookRecords';
import RecordsDataProvider from './providers/RecordsDataProvider';

function App() {
  return (
    <RecordsDataProvider>
      <div className='App'>
        Add the record
        <AddRecordForm />
        <PhoneBookRecords />
      </div>
    </RecordsDataProvider>

  );
}

export default App;

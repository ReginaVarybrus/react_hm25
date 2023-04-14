import './App.css';

import AddRecordForm from './components/AddRecordForm';
import PhoneBookRecords from './components/PhoneBookRecords';
import RecordsDataProvider from './providers/RecordsDataProvider';
import LoginForm from './components/LoginForm';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <RecordsDataProvider>
        <div className='App'>
          Add the record
          <AddRecordForm />
          <PhoneBookRecords />
        </div>
      </RecordsDataProvider>
    </AuthProvider>
  );
}

export default App;

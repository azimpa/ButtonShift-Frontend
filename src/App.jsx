import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import CreateWorkBoard from './components/CreateWorkBoard';
import WorkBoard from './components/WorkBoard';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="creatework" element={<CreateWorkBoard />} />
              <Route path="workboard" element={<WorkBoard />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider >
  );
}

export default App;
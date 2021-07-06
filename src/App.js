import { useState } from 'react'
import './App.css';
import Layout from './hoc/Layout'
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import Drugs from './Pages/Drugs'
import Patients from './Pages/Patients'
import NewFile from './Pages/NewFile';
import Support from './Pages/Support';
import Settings from './Pages/Settings';

function App() {

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSelectedPatient = (patient) => {
    console.log('patient', patient)
    setSelectedPatient(patient)
  }

  return (
    <div className="App">
      <HashRouter>
        <Layout selectedPatient={selectedPatient} >
          <Switch>
            {/* <Route handleSelectedPatient={handleSelectedPatient} selectedPatient={selectedPatient} exact path="/" exact component={Home} /> */}
            <Route exact path="/" render={(props) => <Patients setPatient={handleSelectedPatient} selectedPatient={selectedPatient} {...props} />} />
            <Route exact path="/new-file" render={(props) => <NewFile setPatient={handleSelectedPatient} {...props} />} />
            <Route exact path="/drugs" render={(props) => <Drugs setPatient={handleSelectedPatient} {...props} />} />
            <Route exact path="/support" render={(props) => <Support setPatient={handleSelectedPatient} {...props} />} />
            <Route exact path="/settings" render={(props) => <Settings setPatient={handleSelectedPatient} {...props} />} />
          </Switch>

        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import TabelUsers from './components/tabel.component';
import CreateUser from './components/create-user.component.js';
import EditUser from './components/edit-user.component.js'
import UserRegistration from './components/registration.component';
import UserProfile from './components/profile.component';
import UserContact from './components/contact.component';
import UserLogin from './components/login.component';

function App() {
  return (
   <Router>
     <div>
       <Route path="/" exact component={UserLogin}/>
       <Route path="/add" exact component={CreateUser} />
       <Route path="/edit/:id" exact component={EditUser} />
       <Route path="/registration" exact component={UserRegistration} />
       <Route path="/profile" exact component={UserProfile} />
       <Route path="/contact" exact component={UserContact} />
       <Route path="/user-management" exact component={TabelUsers} />
     </div>
   </Router>
  );
}

export default App;

import {Navbar} from './components/layout/navbar'
import {Switch,Route } from 'react-router-dom'
import {About} from './components/pages/about/about'
import {Contact} from './components/pages/contact/contact'
import {AddUser} from './components/pages/addUser/addUser'
import {AllUsers} from './components/pages/allUsers/allUsers'
import {User} from './components/pages/user/user'
import {NofFound} from './components/pages/notFound/notFound'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/" component={AllUsers} /> 
       <Route exact path='/about' component={About} />
       <Route exact path='/contact' component={Contact}></Route>
       <Route exact path='/addUser' component={AddUser}></Route>
       <Route exact path="/user/getuser/:id" component={User} />
       <Route exact path="/user/getuser/:id" component={User} />
      < Route pat="/" component={NofFound} />
     </Switch>
    </div>
  );
}

export default App;

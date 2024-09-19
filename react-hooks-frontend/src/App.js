import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // read more about it
import './custom-bootstrap.css';

//learn about  BrowserRouter as Router, Route, Routes
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            {/* whenever we are going to do this http://localhost:3000/employees this componenet will be render*/}
            <Route  path='/' element ={<ListEmployeeComponent/>}>
            </Route>
            <Route path='/employees' element ={<ListEmployeeComponent/>}></Route>
            <Route path='/add-employee' element ={<AddEmployeeComponent/>}></Route>
            <Route path='/edit-employee/:id' element ={<AddEmployeeComponent/>}></Route>
            <Route path='/delete-employee/:id' element ={<AddEmployeeComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

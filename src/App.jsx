// src/App.jsx


import Home from './component/Home/Home';
import Nav from './component/Nav/Nav';
import PaginationTest from './TestComponents/PaginationTest';
import PaginationTwo from './TestComponents/PaginationTwo';
import PagomationThree from './TestComponents/PagomationThree';

function App() {
  return (
    <div>
    <Nav/>
    <Home/>
    {/* <PaginationTest/> */}
    <PagomationThree />
    </div>
  );
}

export default App;

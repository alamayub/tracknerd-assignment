import Header from "./components/Header";
import AddModal from './components/AddModal'
import GetUsers from "./components/GetUsers";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="container">
          <div className="list__title">
            <div className="title">Users List</div>
            <AddModal />
          </div>
          <GetUsers />
        </div>
      </div>
    </div>
  );
}

export default App;

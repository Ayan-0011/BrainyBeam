import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
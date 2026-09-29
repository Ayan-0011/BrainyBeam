import React from 'react'
import Table from './components/Table';

const App = () => {
  const donors = [
    {
      id: 1,
      name: "Ayan",
      email: "Ayan@gmail.com",
      Bloodgroup: "o+",
      city: "ahmedabad"
    },
    {
      id: 2,
      name: "rahul",
      email: "rahul@gmail.com",
      Bloodgroup: "Ab+",
      city: "surat"
    },
    {
      id: 3,
      name: "Jhon",
      email: "jhon@gmail.com",
      Bloodgroup: "B-",
      city: "rajkot"
    },
    {
      id: 4,
      name: "Ansari",
      email: "Ans01@gmail.com",
      Bloodgroup: "A-",
      city: "Nadiad"
    }
  ];


  return (
    <div className='container'>
      <h1>Donor List </h1>

      <Table data={donors} />

    </div>
  )
}

export default App

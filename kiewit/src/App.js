import React, { useState } from 'react';
import './App.css';
import employeeData from './data.js';
import TableLayout from './components/TableLayout';

function App() {
  const [data, setData] = useState(employeeData);
  const [q, setQ] = useState('');

  // useEffect(() => {
  //   fetch("endpoint")
  //   .then((responnse) => response.json())
  //   .then((json) => setData(json));
  // }, [])

  // Search: indexOf() or includes()
  function search(rows) {
    return rows.filter(row => row.name.toLowerCase().indexOf(q) > -1)
  }


  return (
    <div className="App">
      <div>
        <input type='text' value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <TableLayout data={search(data)}/>
    </div>
  );
}

export default App;



// function App() {




//   return (
//     <div className="App">
//       <h1>Employee Database</h1>
//       <SearchPage data={data}/>
//     </div>
//   );
// }

// export default App;

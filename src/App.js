import { useEffect, useState } from 'react'
import './App.css';
import ListIDBox from './components/ListIDBox';

function App() {

  const [list, setList] = useState();
  const [uniqueIds, setUniqueIds] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
  }, []);


  async function fetchData() {
    try {
      setLoading(true)

      // fetch all data
      const res = await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      const data = await res.json();
  
      // set list to state
      setList(data)

      // create list of unique listId's to determine how many listIDBox components are needed
      let ids = [];
      data.map(item => !ids.includes(item.listId) && ids.push(item.listId));
      ids.sort((a,b) => a - b)

      // set uniqueIDs to state
      setUniqueIds(ids)
      
      // set loading to false
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (

    !loading && (
      
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>list Id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {uniqueIds.map(uniqueId => <ListIDBox list={list.filter(item => item.listId === uniqueId)} key={uniqueId}/>)}
          </tbody>
        </table>
        
      </div>
    )
  )
    
}

export default App;

import '../App.css'
import api from '../api/players';
import {useState, useEffect} from 'react';
import PlayerList from './PlayerList'


function App() {
  const [players, setPlayers] = useState([]);
  const retrievePlayers = async () => {
    const response = await api.get("/playerList")
    return response.data;
  }

  useEffect(()=>{
    const getAllPlayers = async () =>{
      const allPlayers = await retrievePlayers();
        if(allPlayers){
          const sortedAllPlayers = allPlayers.sort((a,b) => {
            return a.Value - b.Value
          })
          setPlayers(allPlayers);
          console.log(allPlayers);
        }else{
          //nothing
        }
    }
    getAllPlayers();
 },[]);

  return (
    <div className="ui container">
      Player's World<br /><br /><br />
      <PlayerList players={players}/>
    </div>
  );
}

export default App;

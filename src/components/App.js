import '../App.css'
import api from '../api/players';
import {useState, useEffect} from 'react';
import PlayerList from './PlayerList'


function App() {
  const [players, setPlayers] = useState([]);
  const [searchByPlayerName, setSearchByPlayerName] = useState("");
  const [searchByTeamName, setSearchByTeamName] = useState("");

  const retrievePlayers = async () => {
    const response = await api.get()
    return response.data.playerList;
  }

  useEffect(()=>{
    const getAllPlayers = async () =>{
      const allPlayers = await retrievePlayers();
        if(allPlayers){
          const sortedAllPlayers = allPlayers.sort((a,b) => {
            return a.Value - b.Value
          })
          setPlayers(allPlayers);
        }else{
          //nothing
        }
    }
    getAllPlayers();
 },[]);

  return (
    <div className="ui container">
      <h1>Player's World</h1>
      <div class="ui icon input loading">
          <input type="text" placeholder="Search By Player Name..." value={searchByPlayerName} onClick={() => setSearchByTeamName("")} onChange={(e) => setSearchByPlayerName(e.target.value)}/><i class="search icon"></i>
      </div>&nbsp;&nbsp;
      <div class="ui icon input loading">
          <input type="text" placeholder="Search By Team Name..." value={searchByTeamName} onClick={() => setSearchByPlayerName("")} onChange={(e) => setSearchByTeamName(e.target.value)}/><i class="search icon"></i>
      </div>
      <br /><br /><br />
      <div className="ui link cards">
        <PlayerList players={players} searchByPlayerName={searchByPlayerName} searchByTeamName={searchByTeamName}/>
      </div>
    </div>
  );
}

export default App;

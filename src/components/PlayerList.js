import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = (props) => {
    console.log(props.players)
    const renderPlayerList = props.players.filter((player) => {
            if(props.searchByTeamName === ""){//filter by player name
                if(props.searchByPlayerName === ""){
                    return player;
                }else if(player.PFName.toLowerCase().includes(props.searchByPlayerName.toLowerCase())){
                    return player;
                }else{
                    return null;
                }
            }else{//filter by team name
                if(props.searchByTeamName === ""){
                    return player;
                }else if(player.TName.toLowerCase().includes(props.searchByTeamName.toLowerCase())){
                    return player;
                }else{
                    return null;
                }
            }
            

        }).map((player) => {
        return(
            
                    <div className="card">
                        <PlayerCard player={player} key={player.Id}/>
                        </div>
        )
    })
    return(
        <>
            {renderPlayerList}
        </>
    );
}

export default PlayerList;
import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerList = (props) => {
    const renderPlayerList = props.players.map((player) => {
        return(
            <PlayerCard player={player}/>
        )
    })
    return(
        <div className="ui celled list">
            {renderPlayerList}
        </div>
    );
}

export default PlayerList;
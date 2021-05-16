import React from 'react'
import userPng from '../images/63706.jpg'

const PlayerCard = (props) => {
    const name = props.player.PFName;
    const skillDesc = props.player.SkillDesc;
    const playerValue = props.player.Value;
    const userImg = "../images/" + props.player.Id + ".jpg";
    return(
        <div className="item">
            <img className="ui card column" src={userPng} alt="user"></img>
                <div className="content">
                    <div className="header">{name}</div><br />
                    <div><h6>{skillDesc}</h6></div><br />
                    <div><h6>${playerValue}</h6></div><br />
                </div>
        </div>
    )
}

export default PlayerCard;
import React, { useState } from 'react'
const PlayerCard = (props) => {
    const name = props.player.PFName;
    const skillDesc = props.player.SkillDesc;
    const playerValue = props.player.Value;
    var upcomingMatch = "";
    var upcomingMatchTime = "";
    
    if(props.player.UpComingMatchesList[0].VsCCode !== ""){
        upcomingMatch = props.player.CCode + " Vs " + props.player.UpComingMatchesList[0].VsCCode;
        var theDate = new Date(Date.parse(props.player.UpComingMatchesList[0].MDate + ' UTC'));
        upcomingMatchTime = (theDate .getDate()) + "-"+ (theDate .getMonth() + 1) + "-"+ (theDate .getFullYear()) + " ";
        upcomingMatchTime += (theDate .getHours()) + ":" + (theDate .getMinutes() + ":") + (theDate .getSeconds());
    }else{
        upcomingMatch = "No Matches";
        upcomingMatchTime = "Sorry"
    }

    const [imgUrl,setImgUrl] = useState("/images/" + props.player.Id +".jpg");
    function callFallbackImg(){
        setImgUrl("/images/user.png");
    }
    return(
        <>
            <div className="image">
                <img src={imgUrl} alt="user" onError={()=>callFallbackImg()}></img>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div>Special Skill : {skillDesc}</div>
                <div>Upcoming Match : {upcomingMatch}</div>
                <div>Upcoming Match Time : {upcomingMatchTime}</div>
                <div className="meta price">${playerValue}</div><br />
            </div>
        </>
    )
}

export default PlayerCard;
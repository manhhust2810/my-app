import React from "react";
import Card from "./Display/Card.js";
// import "./Display/Draft.css";
import { connect } from "react-redux";

function Display(props){
    const { 
        dataMembers, 
        edittingId,
        handleClearTeam, 
        userTiltle, 
        managerTiltle, 
        newName,
        handleEditTeamName,
        handleChangeName1,
     } = props;
//my-card
    return (
        <div className = "grid-container">
        {dataMembers.map((post) =>
          <Card
            isEditing={edittingId.includes(post.id)}
            handleClearTeam={handleClearTeam}
            newName={newName}
            handleEditTeamName={handleEditTeamName}
            handleChangeName1={handleChangeName1}
            key={post.id}
            userTiltle={userTiltle}
            managerTiltle={managerTiltle}
            cardName={post.name}
            {...post}
          />)}
        </div>)
}

const mapStateToProps = state => {
  return {
    dataMembers: state.dataMembers
  }
};

export default connect(mapStateToProps, null)(Display);
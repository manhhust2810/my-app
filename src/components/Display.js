import React from "react";
import Card from "./Card.js";
import "./Draft.css";
import { connect } from "react-redux";

function Display(props){
    const { 
        dataMembers, 
        edittingId,
        handleClearTeam, 
        userTiltle, 
        managerTiltle, 
        newName,
        onEditNameTeam,
        handleChangeName,
        handleChangeName1,
        data15
     } = props;
//my-card
    return (
        // <div className = "grid-container">
        // {data15.map((post) =>
        //   (<div className="grid-item">
        //   <Card
        //     isEditing={edittingId.includes(post.id)}
        //     onClearTeam={onClearTeam}
        //     newName={newName}
        //     onEditNameTeam={onEditNameTeam}
        //     onChange={handleChangeName}
        //     onClickCheckSymbol={onClickCheckSymbol}
        //     key={post.id}
        //     userTiltle={userTiltle}
        //     managerTiltle={managerTiltle}
        //     cardName={post.name}
        //     {...post}
        //   /></div>))}
        // </div>
        <div className = "grid-container">
        {dataMembers.map((post) =>
          <Card
            isEditing={edittingId.includes(post.id)}
            handleClearTeam={handleClearTeam}
            newName={newName}
            onEditNameTeam={onEditNameTeam}
            onChange={handleChangeName}
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
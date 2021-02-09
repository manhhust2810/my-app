import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

function CurrentRow(props){
    const { 
        status,
        handleSave,
        handleAddMoreData,
        ordinalNumber,
        isAddOnMoreData,
        newMemberName,
        handleChangeTeamName,
        handleChangeMemberName,
        newTeamName,
        handleSelectOption,
        position
     } = props;

    const [isClickAdd, setIsClickAdd] = useState(isAddOnMoreData);
    const [numberOfRow, setNumberOfRow] = useState(0);
     
    function handleAddData(){
        setIsClickAdd(!isClickAdd);
        setNumberOfRow(numberOfRow+1);
        handleAddMoreData();
    }

    console.log("isClickAdd", isClickAdd);
    console.log("isAddOnMoreData", isAddOnMoreData);
    console.log(`Bạn đã thêm ${numberOfRow} hàng`, isClickAdd);

    return (
        <tr>
        <td className="text-center format-input-cell"><b>{ordinalNumber}</b></td>
        <td className="format-input-cell">
        <input 
        type="text" 
        className="border-input"
        onChange={handleChangeTeamName}
        value={newTeamName}
        />
        </td>
        <td>
        <select className="form-control" value={position} onChange={handleSelectOption}>
            <option value="user">USER</option>
            <option value="manager">MANAGER</option>
            <option value="custormer">CUSTORMER</option>
        </select>
        </td>
        <td>
        <input 
        type="text" 
        className="border-input"
        onChange={handleChangeMemberName}
        value={newMemberName}
        />
        </td>
        <td>
        <center>
        <button 
        className="btn btn-info"
        // onClick={handleAddMoreData}
        onClick={handleAddData}
        >
        Add more
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        className="btn btn-success"
        handleSave={handleSave} 
        onClick={handleSave}>
        Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        className="btn btn-danger">
        Delete
        </button>
        </center>
        </td>
        <td className="text-center">
        <span className={
        (status==="Pending")
        ?
        "label label-success"
        :
        (status==="Error")
        ?
        "label label-danger"
        :
        null
        }>{status}</span>
        </td>        
        </tr>
    )
}

const mapStateToProps = state => {
    return {
      
    }
  };

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRow);
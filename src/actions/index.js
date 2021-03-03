import * as types from "../constants/ActionTypes";

export const listAllSampleMembers = () => {
    return {
        type : types.LIST_ALL_SAMPLE_MEMBERS
    }
};

export const listAllTeamMembers = () => {
    return {
        type : types.LIST_ALL_TEAM_MEMBERS
    }
};

export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task: task
    }
};

export const createNewTeam = (task) => {
    return {
        type : types.CREATE_NEW_TEAM,
        task: task
    }
};

export const deleteTeamById = (id) => {
    return {
        type: types.DELETE_TEAM_BY_ID,
        id: id
    }
}

export const changeNameById = (id, value) => {
    return {
        type: types.CHANGE_NAME_BY_ID,
        id: id,
        value: value
    }
}

export const searchAnything = (value) => {
    return {
        type: types.SEARCH_ANYTHING,
        value: value
    }
}

export const addNewRow = () => {
    return {
        type: types.ADD_NEW_ROW,
    }
}

export const deleteRow = (id) => {
    return {
        type: types.DELETE_ROW,
        id: id
    }
}

// export const updateTeamName = (id, value) => {
//     return {
//         type: types.UPDATE_TEAM_NAME,
//         id: id,
//         value: value,
//     }
// }

export const updateName = (id, newTeamName,newMemberName) => {
    return {
        type: types.UPDATE_NAME,
        id: id,
        newTeamName: newTeamName,
        newMemberName: newMemberName
    }
}

export * from './ColorsActions';

export * from './GradientsActions';

export * from './SettingsActions';

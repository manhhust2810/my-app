import { combineReducers } from "redux";
import dataMembers from "./dataMembers";
import sampleMembers from "./sampleMembers";
import ColorsReducer from './ColorsReducer';
import GradientsReducer from './GradientsReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
    colors: ColorsReducer,
    gradients: GradientsReducer,
    settings: SettingsReducer,
    dataMembers : dataMembers,
    sampleMembers : sampleMembers
});
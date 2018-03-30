import { NETWORK_REQUEST, REGISTER_SUCCESSFUL } from "../constants/action.types";

export default (loading=false,action)=>{
    switch(action.type){
        case NETWORK_REQUEST:
            return true;
        
            case REGISTER_SUCCESSFUL:
        default:
            return false;
    }
}
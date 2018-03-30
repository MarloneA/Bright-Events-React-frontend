import { NETWORK_REQUEST, REGISTER_SUCCESSFUL, REGISTER_FAILED } from "../constants/action.types";

export const networkRequest = ()=>({
    type:NETWORK_REQUEST
});

export const registerSuccess = ()=>({
    type:REGISTER_SUCCESSFUL
})

export const registerFailed = error=>({
    type:REGISTER_FAILED,
    error
})

export const registerUser = (data)=>{
    return dispatch=>{
        dispatch(networkRequest())
        return fetch('https://andela-brightevents.herokuapp.com/api/v2/auth/register', {
            body: JSON.stringify(data), 
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors', // no-cors
          })
          .then(response =>{
              if (!response.ok){
                  console.log("the response is ", response.text())
              dispatch(registerFailed("Something went terribly wrong"))   
              }else{
                dispatch(registerSuccess())
              }
          })
          .catch(error=>{
              console.log("the error is ", error)
          })
    }
}



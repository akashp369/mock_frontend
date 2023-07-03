import axios from 'axios'

const signupAction=(user)=>(dispatch)=>{
    console.log(user)
    // axios.post('https://joyous-tick-leotard.cyclic.app/signup', JSON.stringify(user))
    //   .then((response) => {
    //     console.log(response)
    //     dispatch({ type: "Signup" });
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   });

     fetch('https://joyous-tick-leotard.cyclic.app/signup',{
        method: 'POST',
        body: JSON.stringify(user),
     }).then((response) => {
        console.log(response)
        dispatch({ type: "Signup" });
      })
      .catch((error) => {
        console.log(error)
      });
      
}

export  {signupAction}
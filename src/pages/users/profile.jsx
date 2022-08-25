import React, {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () =>{
  const[myMeDearData, setMyMeDearData] = useState({});

  const getUserData = async () =>{
    try {
      var userData =  await AsyncStorage.getItem('meDearData')
      setMyMeDearData(JSON.parse(userData));
      console.log(userData);
      } catch (error) {
        console.log("Error, could not fetch user data");
      }
}

useEffect(() =>{
    getUserData();
    
},[])

      return(
        <div className="container">
          <div className="row">
              <div className="column">
                 <h1>Profile</h1>
              </div>
          </div>
        </div>
      )
}

export default Profile;

import React, {useState, useEffect} from "react";
import NavigationBar from "../../components/navBar";

import UserDisplay from "../partials/user";
import Status from "../partials/status";
import Settings from "../partials/settings";
import { SmallIcon } from "../../components/icons";
import './users.css';

const Profile = () =>{
      const[myMeDearData, setMyMeDearData] = useState({});

      return(
        <section>
          <NavigationBar />
          <UserDisplay />
          <Status />
          <Settings />

          
        </section>
      )
}

export default Profile;

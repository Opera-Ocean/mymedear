import React from "react";

import Site from "../../components/cards/site";
import {CustomButton} from '../../components/buttons';
import Facebook from "../../components/networks/facebook";
import LinkedIn from "../../components/networks/linkedIn";
import './users.css';

const PublicProfile = () =>{

   return(
      <section>
      <div className="container img">
         <img className="userPublicProfileImage"
         src="https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397_960_720.jpg"
         alt="content creator" />
         <h1>John Doe</h1>
      </div>

      <div className="container about">
         <h4 className="aboutHeading">Bio</h4>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Alias nihil tempora reprehenderit eum impedit dolorem dicta cum facere harum numquam!
         </p>
      </div>

      <div className="access buttons">
         <CustomButton text="Follow" />
         <CustomButton text="Contact" />
      </div>

      <div className="container">

      <h3 className="title mt-4"> Profession </h3>
      <div className="row scroll">
            <Site unique="#dribbleModal" name="Dribbble" icon="logo-dribbble" theModal="dribbleModal" />
            <Site unique="#fiverrModal" name="Fiverr" icon="logo-fiverr" theModal="fiverrModal"  />
            <Site unique="#pinterestModal" name="Pinterest" icon="logo-pinterest" theModal="pinterestModal"  />
            <Site unique="#upworkModal" name="Upwork" icon="logo-upwork" theModal="upworkModal" />
         </div>

         <h3 className="title mt-4"> Social Networks </h3>
         <div className="row scroll">
            <Site unique="#fbModal" name="Facebook" icon="logo-facebook" color="blue" theModal="fbModal"
            widget={<Facebook />} />
            <Site unique="#igModal" name="Instagram" icon="logo-instagram" color="red" theModal="igModal" />
            <Site unique="#linkedInModal" name="LinkedIn" icon="logo-linkedin" color="powder-blue" theModal="linkedInModal"
               widget={<LinkedIn />} />
            <Site unique="#snapModal" name="Snapchat" icon="logo-snapchat" theModal="snapModal" />
            <Site unique="#twitterModal" name="Twitter" icon="logo-twitter" theModal="twitterModal" />
            <Site unique="#weiboModal" name="Weibo" icon="logo-weibo" theModal="weiboModal" />
         </div>

         <h3 className="title mt-4"> Tech </h3>
         <div className="row scroll">
            <Site unique="#githubModal" name="Github" icon="logo-github" theModal="githubModal" />
            <Site unique="#gitlabModal" name="Gitlab" icon="logo-gitlab" theModal="gitlabModal" />
            <Site unique="#pastebinModal" name="pastebin" icon="logo-pastebin" theModal="pastebinModal" />
         </div>

         <h3 className="title mt-4"> Video Hosting </h3>
         <div className="row scroll">
            <Site unique="#tiktokModal" name="Tiktok" icon="logo-tiktok" theModal="tiktokModal" />
            <Site unique="#vimeoModal" name="Vimeo" icon="logo-vimeo" theModal="vimeoModal" />
            <Site unique="#ytModal" name="Youtube" icon="logo-youtube" theModal="ytModal" />
         </div>

         <h3 className="title mt-4"> Works </h3>
         <div className="row scroll">
            <Site unique="#pluralSightModal" name="Plural Sight" icon="logo-pluralsight" theModal="pluralSightModal" />
            <Site unique="#udemyModal" name="Udemy" icon="logo-udemy" theModal="udemyModal" />
         </div>
      </div>

      </section>
   )
}

export default PublicProfile;

import React from "react";

import Site from "../../components/cards/site";

const PublicProfile = () =>{
      return(
        <section>
        <div className="container">
          <div className="row">
              <div className="column">
                 <h1>Public Profile</h1>
              </div>
          </div>
        </div>

        <div className="container">

        <h3 className="title"> Profession </h3>
        <div className="row">
              <Site name="Dribbble" icon="logo-dribbble" />
              <Site name="Fiverr" icon="logo-fiverr" />
              <Site name="Pinterest" icon="logo-pinterest" />
              <Site name="Upwork" icon="logo-upwork" />
           </div>

          <h3 className="title"> Social Networks </h3>
           <div className="row">
              <Site name="Facebook" icon="logo-facebook" color="blue" />
              <Site name="Instagram" icon="logo-instagram" color="red" />
              <Site name="LinkedIn" icon="logo-linkedin" color="powder-blue" />
              <Site name="Snapchat" icon="logo-snapchat" />
              <Site name="Twitter" icon="logo-twitter" />
              <Site name="Weibo" icon="logo-weibo" />
           </div>

           <h3 className="title"> Video Hosting </h3>
           <div className="row">
              <Site name="Tiktok" icon="logo-tiktok" />
              <Site name="Vimeo" icon="logo-vimeo" />
              <Site name="Youtube" icon="logo-youtube" />
           </div>

           <h3 className="title"> Works </h3>
           <div className="row">
              <Site name="Plural Sight" icon="logo-pluralsight" />
              <Site name="Udemy" icon="logo-udemy" />
           </div>

        </div>

        {/* <!-- Vertically centered scrollable modal --> */}
        {/* <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"> */}
        {/* <!-- Button trigger modal --> */}

           {/* <!-- Modal --> */}
      <div class="modal fade" id="theModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Facebook</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
              <div class="modal-body">
                Username
               

     
              </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Visit</button>
        </div>
        </div>
       </div>
      </div>

        {/* </div> */}

        </section>
      )
}

export default PublicProfile;

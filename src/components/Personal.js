import React from "react";
import Ipeach from "../images/sarun_seepomkun.jpeg";
import './Personal.css';

function Personal() {
  return (
    <div className="container">
      <img
        className="imgProfile"
        src={Ipeach}
        alt="sarun_seepomkun"
      />
      <div>
        <div>
          <h1>
            Mr.Sarun Seepomkun
          </h1>
          <div>
            <h2>
              Software developer for 8 years participating in the complete
              product development lifecycle of successfully launched
              applications.Enthusiastic new programming technology
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;

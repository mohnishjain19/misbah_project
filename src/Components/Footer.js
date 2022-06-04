import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div className="foot">
      <MDBFooter className="bg-light text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/RatnaNidhi/"
              role="button"
            >
           <MDBIcon fab icon="facebook" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/ratnanidhitrust?s=21&t=Bp-okz8sHcH0HM8wqgU3fQ"
              role="button">
            <MDBIcon fab icon="twitter" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://instagram.com/ratnanidhicharitabletrust?igshid=YmMyMTA2M2Y="
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </a>


          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:CGF 2022
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;

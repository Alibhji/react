import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import '/Users/ch-ababolha-mbp/Desktop/vscode_projects/react/signup/src/assets/fonts/style.css';
import { navbarText ,textStyle } from "./text";


export default function NavBar() {
  var lan = 'Farsi';
  return (
    <>
      <MDBContainer >
        <MDBRow className={"NavContainer"}>
          <MDBCol   className={"Navbar_Farsi subNavContainer"} style={textStyle.Title} size="md">{navbarText[lan].Title}</MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow>
          <MDBCol size="md">One of three columns</MDBCol>
          <MDBCol size="md">One of three columns</MDBCol>

          <MDBCol size="md">One of three columns</MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

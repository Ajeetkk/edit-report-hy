import React from 'react'
import { MDBIcon, MDBBtn } from "mdbreact";

class Header extends React.Component {
    render() {
        return (
            <div>
                <MDBBtn color="danger" className="btnRadius">CANCEL</MDBBtn>
                <MDBBtn color="primary" className="btnRadius floating"><MDBIcon icon="envelope" /> &nbsp;SEND</MDBBtn>
                <MDBBtn className="btnRadius floating"><MDBIcon icon="save" /> &nbsp; SAVE</MDBBtn>

            </div>

        )
    }
}
export default Header
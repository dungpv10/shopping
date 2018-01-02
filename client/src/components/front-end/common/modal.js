import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class BootstrapModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    render() {
        const close = () => this.setState({ show: false });
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    Launch contained modal
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{this.props.title || "title"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={close}>Đóng</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default BootstrapModal;

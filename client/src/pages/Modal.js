import React from 'react';
import ReactDOM from 'react-dom';
import API from "../utils/API";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function App() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="buttons">
                <button className="button is-success is-large" onClick={openModal}>Update Load</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Update Load Modal"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Update Load</h2>
                <div className="field">
                    <div className="control">
                        <input className="input is-success" type="text" placeholder="New Trim Value" />
                    </div>
                </div>
                <div className="field is-grouped">
                    <p className="control">
                        <button className="button is-success is-medium">Submit</button>
                    </p>
                    <p className="control">
                        <button className="button is-danger is-medium" onClick={closeModal}>Cancel</button>
                    </p>
                </div>
            </Modal>
        </div>
    );
}

// ReactDOM.render(<App />, appElement);

export default App;
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { EditTask } from '../redux/todoSlice/TodoSlice';

function EditTodo({id}) {
    // edit item content

    const dispatch= useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setEdited] = useState({
        title: "",
        description: "",
    })
  return (
    <div>
              <Button variant="primary" onClick={handleShow}>
       Edit task
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='inps'>
        <input type='text' placeholder='Enter task title' 
        onChange={(e)=>{setEdited({...edited, title:e.target.value})}}
         />
        <input type='text' placeholder='Enter task description' 
        onChange={(e)=>{setEdited({...edited, description:e.target.value})}} 
        />
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
          onClick={()=>{handleClose();dispatch(EditTask({id:id,edited}))}}
          >Edit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTodo
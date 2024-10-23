
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './input-number.css';

const InputNumberButtons = ({ label, handler, defaulValue }) => {
    const [value, setValue] = useState(defaulValue || 3)
    const onAdd = () => {
        if (value < 30)
            setValue(value + 1)
        handler && handler(value + 1)
    }
    const onReduced = () => {
        if (value > 1)
            setValue(value - 1)
        handler && handler(value - 1)
    }
    return (
        <Form.Group className="mb-3 text-left" controlId="formBasicEmail" >
            <Form.Label>{label}</Form.Label>
            <div className='d-flex w-100 justify-content-center'>
                <button type="button" class="btn btn-primary btn-circle mx-2" onClick={onReduced}>-</button>
                <Form.Control type="text" placeholder="" value={value} style={{ width: "150px", height:"40px" }} className='text-center mt-2' />
                <button type="button" class="btn btn-primary btn-circle" onClick={onAdd}>+</button>
            </div>
        </Form.Group>)
}

export default InputNumberButtons;
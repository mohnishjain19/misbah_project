import React from 'react'
import { Form } from 'react-bootstrap';

 const AirwayBill = () => {
  return (
    <div className="down1">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Airway Bill</Form.Label>
                <Form.Control type="text" placeholder="Enter airway Bill" />
            </Form.Group>
            <button className="btn btn-danger">Submit</button> 
        </Form>

    </div>
  )
}
export default AirwayBill;  

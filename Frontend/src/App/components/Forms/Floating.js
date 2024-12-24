import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function FloatingForm() {
  return (
    <Container className="p-4">
      <h2 className="mb-4 text-center">Floating Label Form</h2>
      <Form>
        {/* Name Field */}
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            id="floatingName"
          />
          <label htmlFor="floatingName">Name</label>
        </Form.Floating>

        {/* Email Field */}
        <Form.Floating className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            id="floatingEmail"
          />
          <label htmlFor="floatingEmail">Email</label>
        </Form.Floating>

        {/* Password Field */}
        <Form.Floating className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            id="floatingPassword"
          />
          <label htmlFor="floatingPassword">Password</label>
        </Form.Floating>

        {/* Select Field */}
        <Form.Floating className="mb-3">
          <Form.Select id="floatingSelect">
            <option value="">Select an Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Form.Select>
          <label htmlFor="floatingSelect">Options</label>
        </Form.Floating>

        {/* Checkbox Field */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="floatingCheckbox"
            label="I agree to the terms and conditions"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FloatingForm;

import Form from 'react-bootstrap/Form';

function FloatingForm() {
  return (
    <Form>
      <Form.Floating className="mb-3">
        <Form.Control placeholder="Name" />
        <label>Name</label>
      </Form.Floating>
      <button type="submit">Submit</button>
    </Form>
  );
}

export default FloatingForm;

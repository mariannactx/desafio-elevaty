import Form from 'react-bootstrap/Form';

function FormTextInput({ onChange, name, label, value }) {
  return (
    <Form.Group className='mb-3' controlId={`form-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type='text' onChange={onChange} name={name} value={value} />
    </Form.Group>
  );
}

export default FormTextInput;

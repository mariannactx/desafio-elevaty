import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormTextInput from '../components/FormTextInput';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';

function NewClientPage() {
  const [client, setClient] = useState({});

  function onChange(e) {
    const inputName = e.target.name;
    setClient({
      ...client,
      [inputName]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    };

    const response = await fetch(
      'http://localhost:3001/api/clientes',
      requestOptions
    );

    if (response.status === 200) {
      alert('Cliente criado com sucesso!');
    } else {
      alert('Erro ao criar cliente')
    }
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormTextInput onChange={onChange} name='nome' label='Nome completo' />
        <FormTextInput onChange={onChange} name='email' label='Email' />
        <FormTextInput
          onChange={onChange}
          name='data_de_nascimento'
          label='Data de nascimento'
        />
        <FormTextInput onChange={onChange} name='telefone' label='Telefone' />
        <FormTextInput onChange={onChange} name='endereco' label='Endereço' />
        <FormTextInput
          onChange={onChange}
          name='cartoes_de_credito'
          label='Cartões de crédito'
        />
        <FormTextInput onChange={onChange} name='fatura' label='Fatura' />

        <Button variant='primary' type='submit'>
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default NewClientPage;

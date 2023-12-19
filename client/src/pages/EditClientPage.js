import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormTextInput from '../components/FormTextInput';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';

function EditClientPage() {
  const { id } = useParams();

  const [client, setClient] = useState({
    nome: '',
    email: '',
    data_de_nascimento: '',
    telefone: '',
    endereco: '',
    cartoes_de_credito: '',
    fatura: '',
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/clientes/' + id);
      const data = await response.json();
      setClient(data[0]);
    }

    fetchData();
  }, [id]);

  const dataDeNascimento = moment(client.data_de_nascimento).format(
    'yyyy-MM-DD'
  );

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
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    };

    const response = await fetch(
      'http://localhost:3001/api/clientes/' + id,
      requestOptions
    );

    if (response.status === 200) {
      alert('Cliente editado com sucesso!');
    } else {
      alert('Erro ao editar cliente')
    }
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormTextInput
          onChange={onChange}
          name='nome'
          label='Nome completo'
          value={client.nome}
        />
        <FormTextInput
          onChange={onChange}
          name='email'
          label='Email'
          value={client.email}
        />
        <FormTextInput
          onChange={onChange}
          name='data_de_nascimento'
          label='Data de nascimento'
          value={dataDeNascimento}
        />
        <FormTextInput
          onChange={onChange}
          name='telefone'
          label='Telefone'
          value={client.telefone}
        />
        <FormTextInput
          onChange={onChange}
          name='endereco'
          label='Endereço'
          value={client.endereco}
        />
        <FormTextInput
          onChange={onChange}
          name='cartoes_de_credito'
          label='Cartões de crédito'
          value={client.cartoes_de_credito}
        />
        <FormTextInput
          onChange={onChange}
          name='fatura'
          label='Fatura'
          value={client.fatura}
        />

        <Button variant='primary' type='submit'>
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default EditClientPage;

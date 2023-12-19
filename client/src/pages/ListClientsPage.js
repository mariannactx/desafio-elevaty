import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ListClientPage() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/clientes');
      const data = await response.json();

      setClients(data);
    }

    fetchData();
  }, []);

  async function excluir(index) {
    const client = clients[index];
    const requestOptions = {
      method: 'DELETE',
    };

    const response = await fetch(
      'http://localhost:3001/api/clientes/' + client.id,
      requestOptions
    );

    if (response.status === 200) {
      alert('Cliente excluido com sucesso!');

      const copyClients = JSON.parse(JSON.stringify(clients));
      copyClients.splice(index, 1);
      setClients(copyClients);
    }
  }

  return (
    <Container>
      <h2> Clientes </h2>
      
      <Button id="novo-cliente" href='/novo'>Novo cliente</Button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Fatura</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 && (
            <tr>
            <td colSpan={5}>Nenhum cliente cadastrado</td>
            </tr>
          )}
          {clients.length > 0 && clients.map((client, index) => {
            const key = `client-${client.id}`;
            const visualizar = `/ver/${client.id}`;
            const editar = `/editar/${client.id}`;

            return (
              <tr key={key}>
                <td>{client.id}</td>
                <td>{client.nome}</td>
                <td>{client.email}</td>
                <td>
                  <Button href={client.fatura} target='_blank' rel='noreferrer'>
                    Ver Fatura
                  </Button>
                </td>
                <td className='acoes'>
                  <Button href={visualizar}>Visualizar</Button>
                  <Button href={editar}>Editar</Button>
                  <Button onClick={() => {
                    excluir(index);
                  }}>
                  Excluir
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListClientPage;

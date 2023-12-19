import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

function ClientPage() {
  const { id } = useParams();

  const [client, setClient] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/clientes/' + id);
      const data = await response.json();

      setClient(data[0]);
    }

    fetchData();
  }, [id]);

  const dataDeNascimento = moment(client.data_de_nascimento).format(
    'DD/MM/yyyy'
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>{client.nome}</h2>
      <p>Email: {client.email} </p>
      <p>Data de nascimento: {dataDeNascimento} </p>
      <p>Telefone: {client.telefone} </p>
      <p>Endereço: {client.endereco} </p>
      <p>Cartões de crédito: {client.cartoes_de_credito} </p>
      <p>
        Fatura:{' '}
        <a target='_blank' rel='noreferrer' href={client.fatura}>
          Link
        </a>
      </p>
    </div>
  );
}

export default ClientPage;

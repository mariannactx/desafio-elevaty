import query from './connection.js';

export async function listAll() {
  const result = await query('SELECT * FROM clientes ORDER BY id');

  return result ? result.rows : [];
}
export async function listOne(id) {
  const result = await query(`SELECT * FROM clientes WHERE id = ${id}`);

  return result ? result.rows : [];
}

export async function create(body) {
  const sql =
    'INSERT INTO clientes(nome, email, data_de_nascimento, telefone, endereco, cartoes_de_credito, fatura) VALUES($1, $2, $3, $4, $5, $6, $7)';

  const values = [
    body.nome,
    body.email,
    body.data_de_nascimento,
    body.telefone,
    body.endereco,
    body.cartoes_de_credito,
    body.fatura,
  ];

  const res = await query(sql, values);

  return res.rowCount;
}

export async function update(id, values) {
  const sqlParts = ['UPDATE clientes SET'];

  sqlParts.push(`nome='${values.nome}',`);
  sqlParts.push(`email='${values.email}',`);
  sqlParts.push(`data_de_nascimento='${values.data_de_nascimento}',`);
  sqlParts.push(`telefone='${values.telefone}',`);
  sqlParts.push(`endereco='${values.endereco}',`);
  sqlParts.push(`cartoes_de_credito='${values.cartoes_de_credito}',`);
  sqlParts.push(`fatura='${values.fatura}'`);
  
  sqlParts.push(`WHERE id = ${id}`);

  const sql = sqlParts.join(' ');
  const res = await query(sql);
}

export async function exclude(id) {
  const result = await query(`DELETE FROM clientes WHERE id = ${id}`);
}

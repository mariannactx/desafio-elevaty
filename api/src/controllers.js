import * as clients from './database/service.js';

export async function listAll(req, res, next) {
  try {
    res.json(await clients.listAll());
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

export async function listOne(req, res, next) {
  try {
    res.json(await clients.listOne(req.params.id));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    res.json(await clients.create(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    res.json(await clients.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

export async function exclude(req, res, next) {
  try {
    res.json(await clients.exclude(req.params.id));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}

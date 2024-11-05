import axios from "axios";
const baseUrl = "/api/phones";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(({ data }) => {
    return data;
  });
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(({ data }) => {
    return data;
  });
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(({ data }) => {
    return data;
  });
};

const destroy = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(({ data }) => {
    return data;
  });
};

export default {
  getAll,
  create,
  update,
  destroy,
};

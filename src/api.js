import { create } from "axios";

const axios = create({
  baseURL: process.env.REACT_APP_API_URL
});

const delay = n => new Promise(resolve => setTimeout(resolve, n));

export const fetchEvent = id =>
  Promise.resolve({
    name: "Baltic Sea Hack"
  });

export const authenticate = async (eventId, email) => {
  await delay(2000);
  return {};
};

export const submitDetails = (eventId, details) => {
  return axios.post(`/api/event/checkIn/${eventId}`, details);
};

export const createEvent = async ({ name, redirectUrl }) => {
  const id = Math.floor(Math.random() * 1e9);
  const data = { id, name, redirectUrl, colors: [] };
  const result = await axios.post(`/api/event/add`);
  return { id };
};

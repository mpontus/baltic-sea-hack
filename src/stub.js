const delay = n => new Promise(resolve => setTimeout(resolve, n));

export const fetchEvent = id =>
  Promise.resolve({
    name: "Baltic Sea Hack"
  });

export const authenticate = async (eventId, email) => {
  await delay(2000);
  return {};
};

export const submitDetails = async (eventId, data) => {
  await delay(2000);
  return {
    redirectUrl: "http://yandex.ru"
  };
};

export const createEvent = async data => {
  await delay(1000);

  return {
    id: "123123"
  };
};

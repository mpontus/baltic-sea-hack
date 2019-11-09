const delay = n => new Promise(resolve => setTimeout(resolve, n));

export const fetchEvent = id =>
  Promise.resolve({
    name: "Baltic Sea Hack"
  });

export const authenticate = async (eventId, email) => {
  await delay(2000);
  return {};
};

export const submitDetails = data =>
  Promise.resolve({
    location: "http://yandex.ru"
  });
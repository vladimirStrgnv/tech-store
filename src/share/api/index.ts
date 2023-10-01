export const getProducts = async () => {
  try {
    const response = await fetch("https://appevent.ru/dev/task1/catalog");
    const data = await response.json();
    return data;
  } catch (err) {}
};

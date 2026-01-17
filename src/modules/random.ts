export const getRandomId = () => {
  const rnd = crypto.getRandomValues(Buffer.alloc(6));
  return rnd.toString('base64');
};

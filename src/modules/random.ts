export const getRandomId = () => {
  const rnd = crypto.getRandomValues(Buffer.alloc(18));
  return rnd.toString('base64');
};

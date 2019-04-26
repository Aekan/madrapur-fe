import { handleRequest } from '../../../../components/Utilities';

export const getProductById = (id: number) => {
  const URL = 'product';
  const params = {
    params: {
      id,
    },
  };

  return handleRequest(URL, params);
};

export const getProducts = () => {
  const URL = 'product';

  return handleRequest(URL);
}

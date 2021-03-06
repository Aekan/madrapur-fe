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

export const getSpaces = (selectedDate, prodId) => {
  const URL = 'yell';
  const params = {
    params: {
      selectedDate,
      prodId,
    },
  };

  return handleRequest(URL, params);
}

export const createCart = (cartId) => {
  const URL = 'ccart';
  const params = {
    params: {
      id: cartId,
    },
  };

  return handleRequest(URL, params);
}

export const addToCart = (cartId, items) => {
  const URL = 'ccadd';
  const params = {
    params: {
      id: cartId,
      items,
    },
  };

  return handleRequest(URL, params);
}

export const getCart = (cartId) => {
  const URL = 'getcart';
  const params = {
    params: {
      id: cartId,
    },
  };

  return handleRequest(URL, params);
}

export const addReservation = (data, cb) => {
  const URL = 'add-reservation';
  const params = {
    params: {
      data,
    },
  };

  return handleRequest(URL, params, cb);
}

export const actionPay = (id) => {
  const URL = 'add-reservation';
  const params = {
    params: {
      id,
    },
  };

  return handleRequest(URL, params);
}

export const getOrder = (id, cb) => {
  const URL = 'get-order';
  const params = {
    params: {
      id,
    },
  };

  return handleRequest(URL, params, cb);
}

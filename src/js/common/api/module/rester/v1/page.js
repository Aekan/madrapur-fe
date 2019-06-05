import { handleRequest } from '../../../../components/Utilities';

export const getPageContentBySlug = (slug, cb) => {
  const URL = 'get-page-by-slug';
  const params = {
    params: {
      slug,
    },
  };

  return handleRequest(URL, params, cb);
};

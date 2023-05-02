import get from "./get";
import patch from "./patch";
import post from "./post";
import put from "./put";
import tempDelete from "./delete";

const MockupService = {
  get,
  patch,
  post,
  put,
  delete: tempDelete,
};

export default MockupService;

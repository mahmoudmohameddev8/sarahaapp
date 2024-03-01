export const asyncHandelrs = (controller) => {
  return (req, res, next) => {
    controller(req, res, next).catch((erorr) => next(erorr));
  };
};

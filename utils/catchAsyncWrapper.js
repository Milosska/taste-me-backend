const catchAsyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

export default catchAsyncWrapper;

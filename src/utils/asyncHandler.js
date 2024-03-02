// Funcation wraper

// Handle by promise
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).
    catch(error => next(error));
  }
}

export default asyncHandler;

// Handle by try catch block
// const asyncHandler = (fn) => { () =>{} }
// const asyncHandler = (func) => async(req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//                status: false,
//                message: error.message
//               });
//   }
// }

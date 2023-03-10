const router = require('express').Router();
const { celebrate, Joi, Segments } = require('celebrate');

const {
  createUser,
  updateUserInfo,
  getCurrentUser,
} = require('../controllers/users');

router.get('/users/me', getCurrentUser);
// router.get(
//   '/:userId',
//   celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//       userId: Joi.string().required().length(24).hex(),
//     }),
//   }),
//   getUserById
// );
router.post('/', createUser);
router.patch(
  '/users/me',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().required().email(),
    }),
  }),
  updateUserInfo
);
// router.patch(
//   '/me/avatar',
//   celebrate({
//     [Segments.BODY]: Joi.object().keys({
//       avatar: Joi.string().required().regex(URL_REGEX),
//     }),
//   }),
//   updateUserAvatar
// );

module.exports = router;

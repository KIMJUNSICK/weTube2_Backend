import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }
    res.redirect(routes.logIn);
  }
};

export const getLogIn = (req, res) =>
  res.render("logIn", { pageTitle: "Log In" });
export const postLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const logOut = (req, res) => res.redirect(routes.home);
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

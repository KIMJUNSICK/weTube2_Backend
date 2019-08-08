import routes from "../routes";

export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
    console.log(req);
  }
};

export const logIn = (req, res) => res.render("logIn", { pageTitle: "Log In" });
export const logOut = (req, res) => res.render("logOut");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

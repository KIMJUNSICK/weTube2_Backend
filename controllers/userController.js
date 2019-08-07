export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const logIn = (req, res) => res.render("logIn", { pageTitle: "Log In" });
export const logOut = (req, res) => res.render("logOut");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

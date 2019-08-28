import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    file: { path },
    body: { title, description }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  try {
    const {
      params: { potato }
    } = req;
    const video = await Video.findById(potato);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    console.log(error);
    redirect(routes.home);
  }
};
export const editVideo = async (req, res) => {
  res.render("editVideo");
};

export const deleteVideo = (req, res) => res.render("deleteVideo");

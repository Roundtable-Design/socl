//Formats data into the form of an episode
export default (episode) => ({
  author: episode.publisher.name || "anonymous",
  date: "",
  image: episode.picture.medium || "#",
  link: episode.web_url || "#",
  name: episode.title || "untitled",
  purpose: "Click here to listen to the podcast",
});

import convert from "xml-js";

export const getXMLProperty = (itemProps, tagName, propName = "text") => {
  const item = itemProps.find(({ name }) => name === tagName);

  if (item.hasOwnProperty("elements")) return item.elements[0][propName];
  else console.log(item);
  return "null";
};

export const getXMLAttribute = (itemProps, tagName, attrName) => {
  return itemProps.find(({ name }) => name === tagName).attributes[attrName];
};

export const parseXML = (xml) => {
  const json = convert.xml2json(xml, { compact: false, spaces: 4 });

  const { elements } = JSON.parse(json);
  const rss = elements.find(({ name }) => name === "rss");
  const channel = rss.elements.find(({ name }) => name === "channel");

  //   console.log("channel", channel);

  return channel.elements
    .filter(({ name }) => name === "item")
    .map(({ elements }) => elements)
    .map((props) => ({
      image: getXMLAttribute(props, "media:content", "url"),
      author: getXMLProperty(props, "itunes:author"),
      date: getXMLProperty(props, "pubDate"),
      name: getXMLProperty(props, "title"), // AGH!!
      purpose: getXMLProperty(props, "description", "cdata"),
    }));
};

export const fetchPodcastEpisodes = async () => {
  const response = await fetch("https://feed.podbean.com/socl/feed.xml", {
    method: "GET",
  });
  const xml = await response.text();

  const parsed = parseXML(xml);

  console.log(parsed);

  return parsed;
};

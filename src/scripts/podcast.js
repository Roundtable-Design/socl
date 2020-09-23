import convert from "xml-js";

export const getXMLProperty = (itemProps, tagName, propName = "text") => {
  const item = itemProps.find(({ name }) => name === tagName);

  if (item.hasOwnProperty("elements")) return item.elements[0][propName];

  return null;
};

export const getXMLAttribute = (itemProps, tagName, attrName) => {
  const item = itemProps.find(({ name }) => name === tagName);

  if (item) return item.attributes[attrName];

  return null;
};

export const parseXML = (xml) => {
  const json = convert.xml2json(xml, { compact: false, spaces: 4 });

  const { elements } = JSON.parse(json);
  const rss = elements.find(({ name }) => name === "rss");
  const channel = rss.elements.find(({ name }) => name === "channel");

  console.log("channel", channel);

  return channel.elements
    .filter(({ name }) => name === "item")
    .map(({ elements }) => elements)
    .map((props) => ({
      image:
        getXMLAttribute(props, "itunes:image", "href") ||
        "https://images.unsplash.com/photo-1579802063117-87cd2ad50a88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      author: getXMLProperty(props, "itunes:author") || "Chris Whittington",
      date: getXMLProperty(props, "pubDate"),
      name: getXMLProperty(props, "title") || "Untitled episode", // AGH!!
      purpose: getXMLProperty(props, "description", "cdata") || "",
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

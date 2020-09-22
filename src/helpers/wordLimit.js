export default (head, subhead, limit = 30) => {
  // console.log("wordLimit called", { head, subhead, limit });

  // if (head.length >= limit) return [head.split(" ").slice(0, -1).join(" "), ""];

  // let total = `${head} ${subhead}`.slice(0, limit);
  // let headSlice = total.slice(0, head.length);
  // let subheadSlice; // = total.slice(subhead.length);

  // if (!subheadSlice.endsWith(" ") && subhead.indexOf(" ") !== -1) {
  //   subheadSlice = subheadSlice.split(" ").slice(0, -1).join(" ");
  // }

  // return [headSlice, subheadSlice + "..."];

  return [head, subhead];
};

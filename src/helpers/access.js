import Prismic from "prismic-javascript";

// prismic read token.

const token =
  "MC5YdW5kTEJFQUFDSUF2Zm1o.W--_vQHvv73vv70dR--_vXRB77-9cgzvv73vv73vv70KVe-_vQIPZO-_vSQm77-977-9Nu-_ve-_vUPvv70";
const endpoint = "https://socl-api.cdn.prismic.io/api/v2";

// fetch records for a given content type.

export default async (type) => {
  let client = Prismic.client(endpoint, { accessToken: token });
  let response = await client.query(
    Prismic.Predicates.at("document.type", type)
  );
  if (response) {
    console.log(response.results);

    return response.results.sort(
      (a, b) => new Date(b.data.date) - new Date(a.data.date)
    );
  }
};

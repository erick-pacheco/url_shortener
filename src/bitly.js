const token = "4b44504f108e536b776989b4691f509191f974bb";

/**
 * @param {Function} callback [required]
 */

function shorten(url, callback, errorCallback) {
  const data = { long_url: url };
  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        errorCallback(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      callback(json.link);
      return json;
    });
}
module.exports = {
  shorten,
};

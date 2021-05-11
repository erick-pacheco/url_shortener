const token = process.env.TOKEN;

/**
 * @param {Function} callback [required]
 * @param {Function} errorCallback [required]
 * @param {String} url [required]
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
        errorCallback(`HTTP error! status: ${response.status};`);
      }
      return response.json();
    })
    .then((json) => {
      callback(json.link);
      return json;
    });
}
module.exports = {
  shorten,
};

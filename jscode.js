const myHead = new Headers();
myHead.append(
  "Authorization",
  "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBjNWUxM2NmNzA1MWIwMDgyOGVhOCIsInVzZXJuYW1lIjoibnVyYWx5IiwiZXhwIjoxNjY0MDgyMTAwLCJpYXQiOjE2NTg4OTgxMDB9.Z9b25zhQ2TxXu57bawjFO9zrZ5Z6YkPxBo_Wvbvzu2Y"
);

const requestOptions = {
  method: "GET",
  headers: myHead,
  redirect: "follow",
};

fetch("https://blog.kata.academy/api/user", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

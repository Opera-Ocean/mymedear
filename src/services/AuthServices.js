import baseUrl from "./url";

const login = async ({ username, password }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const formData = JSON.stringify({
    username: username,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  const url = `${baseUrl}/auth/login/`;
  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

const register = async ({ username, email, password }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const formData = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  const url = `${baseUrl}/auth/signup/`;
  const response = await fetch(url, requestOptions);
  const body = await response.json();
  return body;
};

export default {
  login,
  register,
};

import axios from "axios";

export const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("token"));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

export const deleteToken = () => {
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

export const usersClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/users"
      : "http://localhost:3000/api/users",

  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${getAuthTokenFromCookie()}`,
  },
});

export const siteClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/sites"
      : "http://localhost:3000/api/sites",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${getAuthTokenFromCookie()}`,
  },
});

import axios from "axios";

const URL = "http://localhost:4000/api";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTgzMjQ4MzIxMDY5OTQzZmZjMTgzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU5NDI4MywiZXhwIjoxNjYwOTM5ODgzfQ.4Cjf1lRVI8M0qcGQIrS36d-geuP_PakoGCBMzby6yEE"

const user = JSON.parse(localStorage.getItem("persist: root"))?.user;
const currentUser = user && JSON.parse(user).currentUser
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
    baseURL: URL,
});

export const userRequest = axios.create({
    baseURL: URL,
    headers: {token: `Bearer ${TOKEN}`}
})
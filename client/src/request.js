import axios from "axios";

const URL = "http://localhost:4000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTgzMjQ4MzIxMDY5OTQzZmZjMTgzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDA3ODQyNCwiZXhwIjoxNjYwNDI0MDI0fQ.OvyiEoJnC1v-NmhYvMScbtu-He_0FsYJ3jhXE3CTYjE"


export const publicRequest = axios.create({
    baseURL: URL,
});

export const userRequest = axios.create({
    baseURL: URL,
    headers: {token: `Bearer ${TOKEN}`}
})
import axios from "axios";

const baseURL = "http://localhost:3006";

export function getPlayers() {
  return axios.get(`${baseURL}/players`);
}
export function getPlayer(id) {
  return axios.get(`${baseURL}/players/${id}`);
}
export function deletePlayer(id) {
  return axios.delete(`${baseURL}/players/${id}`);
}
export function createPlayer(player) {
  return axios.post(`${baseURL}/players`, player, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
}
export function updatePlayer(player) {
  return axios.patch(`${baseURL}/players`, player, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
}

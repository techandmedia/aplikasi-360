import axios from "axios";

const rs = "responden";
const pt = "penilaian_teladan";
// const ps = "penilaian_sendiri";
const us = "users";
const pp = "penilaian_penilai";

export function getTeladan(URL) {
  return axios.get(URL + `api/${pt}`);
}

export function getPenilaianPenilai(URL) {
  return axios.get(URL + `api/${pp}`);
}

export function getUsers(URL) {
  return axios.get(URL + `api/${us}`);
}

export function getRole(URL) {
  return axios.get(URL + "api/role");
}

export function getSoal(URL) {
  return axios.get(URL + "api/soal");
}

export function getResponden(URL, full_name) {
  return axios.post(URL + `api/${rs}/${rs}`, {
    full_name: full_name
  });
}

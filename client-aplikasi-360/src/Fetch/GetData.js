import axios from "axios";

const rs = "responden";
const pt = "penilaian_teladan";
// const ps = "penilaian_sendiri";
const us = "users";
const pp = "penilaian_penilai";
const per = "pertanyaan";

export function getPertanyaan(URL) {
  return axios.get(URL + `api/${per}`);
}

export function getTeladan(URL) {
  return axios.get(URL + `api/${pt}`);
}

export function getPenilaianPenilai(URL) {
  return axios.get(URL + `api/${pp}`);
}

export function getCheckDuplicate(URL, nip_nim, responden_id) {
  return axios.post(URL + `api/${pp}_nip_nim`, {
    nip_nim: nip_nim,
    responden_id: responden_id
  });
}

export function getUsers(URL) {
  return axios.get(URL + `api/${us}`);
}

export function getUser(URL, user_id) {
  return axios.get(URL + `api/${us}/${user_id}`);
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

import axios from "axios";

const rs = "responden";
const pt = "penilaian_teladan";
// const ps = "penilaian_sendiri";
const us = "users";
const pp = "penilaian_penilai";
const per = "pertanyaan";
const q = "questions";

export function getQuestions(URL) {
  const data = axios.get(URL + `api/${q}`).then(res => {
    // console.log(res.data);
    return res.data;
  });
  return data;
}

export function getPertanyaan(URL) {
  return axios.get(URL + `api/${per}`);
}

export function getTeladan(URL) {
  return axios.get(URL + `api/${pt}`);
}

export function getPenilaianPenilai(URL) {
  return axios.get(URL + `api/${pp}`);
}

export function getCheckDuplicate(URL, responden_id, nip_nim) {
  return axios.post(URL + `api/${q}_duplicate`, {
    responden_id: responden_id,
    nip_nim: nip_nim
  });
}

export function getUsers(URL) {
  const data = axios.get(URL + `api/${us}`).then(res => {
    return res.data;
  });
  return data;
}

export function getUser(URL, user_id) {
  return axios.get(URL + `api/${us}/${user_id}`);
}

export function getRepondenID(URL, responden_id) {
  return axios.get(URL + `api/${rs}/${responden_id}`);
}

export function getRoleID(URL, role_id) {
  return axios.get(URL + `api/role/${role_id}`);
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

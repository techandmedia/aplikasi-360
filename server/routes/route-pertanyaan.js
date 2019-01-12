const express = require("express");
const router = express.Router();
const mySQL = require("../config/config-MySQL");

const pp = "penilaian_penilai";
const per = "pertanyaan";

// ========== Cek ke tabel penilaian _penilai untuk duplikat entry ========
// Cek dari tabel penilaian_penilai, apakah nim dan user id sama/sudah pernah diisi
exports.getPertanyaan = router.post(`/api/${pp}_nip_nim`, (req, res) => {
  const responden_id = req.body.responden_id;
  const nip_nim = req.body.nip_nim;
  // console.log(req.body);
  mySQL.query(
    `SELECT * FROM penilaian_penilai WHERE responden_id=? AND nip_nim=?`,
    [responden_id, nip_nim],
    (err, results) => {
      if (err) {
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else if (results.length > 0) {
        // console.log(results.length);
        res.send({
          code: 201,
          success: "Anda sudah melakukan penilaian untuk user ini"
        });
      } else {
        res.send({
          code: 200,
          success: "Tidak ada duplikasi, lanjutkan isi data"
        });
      }
    }
  );
});

// ============== Post Pertanyaan ==========================================
exports.postOffice = router.post(`/api/${per}_new`, (req, res, next) => {
  const postData = req.body;
  // console.log(postData);
  mySQL.query("INSERT INTO questions SET ?", postData, function(
    err,
    results,
    fields
  ) {
    if (err) {
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      res.send({
        code: 200,
        status: "successfuly added kuesioner"
        // message: JSON.stringify(results)
      });
    }
  });
});

module.exports = router;

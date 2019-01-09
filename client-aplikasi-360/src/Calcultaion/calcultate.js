// Masa Kerja - Kredibilitas
export function HitungC1(K001, K002, K003, K004) {
  const c1_pimpinan = 1;
  let K1, K2, K3, K4;
  K1 = K001 * c1_pimpinan;
  K2 = K002 * c1_pimpinan;
  K3 = K003 * c1_pimpinan;
  K4 = K004 * c1_pimpinan;
  console.log(K1, K2, K3, K4);
}

// Pengetahuan - Kredibilitas
export function HitungC2(role_id, K005, K006, K007) {
  const c2_pimpinan = 0.4;
  const c2_rekan = 0.3;
  const c2_bawahan = 0.2;
  const c2_mahasiswa = 0.1;
  let K5, K6, K7;
  if (role_id === "pimpinan") {
    K5 = K005 * c2_pimpinan;
    K6 = K006 * c2_pimpinan;
    K7 = K007 * c2_pimpinan;
    console.log("pimpinan", K5, K6, K7);
  } else if (role_id === "rekan") {
    K5 = K005 * c2_rekan;
    K6 = K006 * c2_rekan;
    K7 = K007 * c2_rekan;
    console.log("rekan", K5, K6, K7);
  } else if (role_id === "bawahan") {
    K5 = K005 * c2_bawahan;
    K6 = K006 * c2_bawahan;
    K7 = K007 * c2_bawahan;
    console.log("bawahan", K5, K6, K7);
  } else if (role_id === "mahasiswa") {
    K5 = K005 * c2_mahasiswa;
    K6 = K006 * c2_mahasiswa;
    K7 = K007 * c2_mahasiswa;
    console.log("mahasiswa", K5, K6, K7);
  }
}

// Jujur - Bakat
export function HitungC3(role_id, K008, K009, K010) {
  const c2_pimpinan = 0.4;
  const c2_rekan = 0.3;
  const c2_bawahan = 0.2;
  const c2_mahasiswa = 0.1;
  let K5, K6, K7;
  if (role_id === "pimpinan") {
    K5 = K005 * c2_pimpinan;
    K6 = K006 * c2_pimpinan;
    K7 = K007 * c2_pimpinan;
    console.log("pimpinan", K5, K6, K7);
  } else if (role_id === "rekan") {
    K5 = K005 * c2_rekan;
    K6 = K006 * c2_rekan;
    K7 = K007 * c2_rekan;
    console.log("rekan", K5, K6, K7);
  } else if (role_id === "bawahan") {
    K5 = K005 * c2_bawahan;
    K6 = K006 * c2_bawahan;
    K7 = K007 * c2_bawahan;
    console.log("bawahan", K5, K6, K7);
  } else if (role_id === "mahasiswa") {
    K5 = K005 * c2_mahasiswa;
    K6 = K006 * c2_mahasiswa;
    K7 = K007 * c2_mahasiswa;
    console.log("mahasiswa", K5, K6, K7);
  }
}
const c3_pimpinan = 0.3;
const c3_rekan = 0.4;
const c3_bawahan = 0.2;
const c3_mahasiswa = 0.1;

// Kedisplinan - Kredibilitas
const c4_pimpinan = 0.4;
const c4_rekan = 0.3;
const c4_bawahan = 0.2;
const c4_mahasiswa = 0.1;

// Tanggungjawab - Kredibilitas
const c5_pimpinan = 0.4;
const c5_rekan = 0.3;
const c5_bawahan = 0.2;
const c5_mahasiswa = 0.1;

// Inisiatif - Bakat
const c6_pimpinan = 0.4;
const c6_rekan = 0.3;
const c6_bawahan = 0.2;
const c6_mahasiswa = 0.1;

// Kreatifitas - Bakat
const c7_pimpinan = 0.4;
const c7_rekan = 0.3;
const c7_bawahan = 0.2;
const c7_mahasiswa = 0.1;

// Masa Kerja - Kredibilitas
export function HitungC1(K001, K002, K003, K004) {
  // const c1_pimpinan = 1;
  const C1 = K001 + K002 + K003 + K004;

  // const C1 = (K001 + K002 + K003 + K004) * c1_pimpinan;
  return C1/4;
}

// Pengetahuan - Kredibilitas
export function HitungC2(role_id, K005, K006, K007) {
  // const c2_pimpinan = 0.4;
  // const c2_rekan = 0.3;
  // const c2_bawahan = 0.2;
  // const c2_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    // let C2 = (K005 + K006 + K007) * c2_pimpinan;
    let C2 = K005 + K006 + K007;
    return C2/3;
  } else if (role === 2) {
    // let C2 = (K005 + K006 + K007) * c2_rekan;
    let C2 = K005 + K006 + K007;
    return C2/3;
  } else if (role === 3) {
    // let C2 = (K005 + K006 + K007) * c2_bawahan;
    let C2 = K005 + K006 + K007;
    return C2/3;
  } else if (role === 4) {
    // let C2 = (K005 + K006 + K007) * c2_mahasiswa;
    let C2 = K005 + K006 + K007;
    return C2/3;
  }
}

// Jujur - Bakat
export function HitungC3(role_id, K008, K009, K010) {
  // const c3_pimpinan = 0.3;
  // const c3_rekan = 0.4;
  // const c3_bawahan = 0.2;
  // const c3_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    // let C3 = (K008 + K009 + K010) * c3_pimpinan;
    let C3 = K008 + K009 + K010;
    return C3/3;
  } else if (role === 2) {
    // let C3 = (K008 + K009 + K010) * c3_rekan;
    let C3 = K008 + K009 + K010;
    return C3/3;
  } else if (role === 3) {
    // let C3 = (K008 + K009 + K010) * c3_bawahan;
    let C3 = K008 + K009 + K010;
    return C3/3;
  } else if (role === 4) {
    // let C3 = (K008 + K009 + K010) * c3_mahasiswa;
    let C3 = K008 + K009 + K010;
    return C3/3;
  }
}

// Kedisplinan - Kredibilitas
export function HitungC4(role_id, K011, K012, K013) {
  // const c4_pimpinan = 0.4;
  // const c4_rekan = 0.3;
  // const c4_bawahan = 0.2;
  // const c4_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    // let C4 = (K011 + K012 + K013) * c4_pimpinan;
    let C4 = K011 + K012 + K013;
    return C4/3;
  } else if (role === 2) {
    // let C4 = (K011 + K012 + K013) * c4_rekan;
    let C4 = K011 + K012 + K013;
    return C4/3;
  } else if (role === 3) {
    // let C4 = (K011 + K012 + K013) * c4_bawahan;
    let C4 = K011 + K012 + K013;
    return C4/3;
  } else if (role === 4) {
    // let C4 = (K011 + K012 + K013) * c4_mahasiswa;
    let C4 = K011 + K012 + K013;
    return C4/3;
  }
}

// Tanggungjawab - Kredibilitas
export function HitungC5(role_id, K014, K015, K016, K017) {
  // const c5_pimpinan = 0.4;
  // const c5_rekan = 0.3;
  // const c5_bawahan = 0.2;
  // const c5_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    // let C5 = (K014 + K015 + K016 + K017) * c5_pimpinan;
    let C5 = K014 + K015 + K016 + K017;
    return C5/4;
  } else if (role === 2) {
    // let C5 = (K014 + K015 + K016 + K017) * c5_rekan;
    let C5 = K014 + K015 + K016 + K017;
    return C5/4;
  } else if (role === 3) {
    // let C5 = (K014 + K015 + K016 + K017) * c5_bawahan;
    let C5 = K014 + K015 + K016 + K017;
    return C5/4;
  } else if (role === 4) {
    // let C5 = (K014 + K015 + K016 + K017) * c5_mahasiswa;
    let C5 = K014 + K015 + K016 + K017;
    return C5/4;
  }
}

// Inisiatif - Bakat
export function HitungC6(role_id, K018, K019, K020, K021, K022, K023) {
  // const c6_pimpinan = 0.4;
  // const c6_rekan = 0.3;
  // const c6_bawahan = 0.2;
  // const c6_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    // let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_pimpinan;
    let C6 = K018 + K019 + K020 + K021 + K022 + K023;
    return C6/6;
  } else if (role === 2) {
    // let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_rekan;
    let C6 = K018 + K019 + K020 + K021 + K022 + K023;
    return C6/6;
  } else if (role === 3) {
    // let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_bawahan;
    let C6 = K018 + K019 + K020 + K021 + K022 + K023;
    return C6/6;
  } else if (role === 4) {
    // let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_mahasiswa;
    let C6 = K018 + K019 + K020 + K021 + K022 + K023;
    return C6/6;
  }
}

// Kreatifitas - Bakat
export function HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030) {
  // const c7_pimpinan = 0.3;
  // const c7_rekan = 0.4;
  // const c7_bawahan = 0.2;
  // const c7_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    // let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_pimpinan;
    let C7 = K024 + K025 + K026 + K027 + K028 + K029 + K030;
    return C7/7;
  } else if (role === 2) {
    // let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_rekan;
    let C7 = K024 + K025 + K026 + K027 + K028 + K029 + K030;
    return C7/7;
  } else if (role === 3) {
    // let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_bawahan;
    let C7 = K024 + K025 + K026 + K027 + K028 + K029 + K030;
    return C7/7;
  } else if (role === 4) {
    // let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_mahasiswa;
    let C7 = K024 + K025 + K026 + K027 + K028 + K029 + K030;
    return C7/7;
  }
}

export function hitungHasil(TotalNilai) {
  if (TotalNilai >= 20) {
    let hasil = "Bagus Sekali";
    return hasil;
  } else if (TotalNilai >= 18) {
    let hasil = "Bagus";
    return hasil;
  } else if (TotalNilai >= 14) {
    let hasil = "Cukup Bagus";
    return hasil;
  } else if (TotalNilai >= 10) {
    let hasil = "Tidak Bagus";
    return hasil;
  } else if (TotalNilai < 10) {
    let hasil = "Sangat Tidak Bagus";
    return hasil;
  }
}

export function cariRangking(totalSaw) {
  let nilai = parseFloat(totalSaw);
  if (nilai >= 8) {
    return 1;
  } else if (totalSaw >= 7.7) {
    return 2;
  } else if (totalSaw >= 7.6) {
    return 3;
  } else if (totalSaw >= 7.5) {
    return 4;
  } else if (totalSaw >= 7.4) {
    return 5;
  } else if (totalSaw >= 7.3) {
    return 6;
  } else if (totalSaw >= 7.2) {
    return 7;
  } else if (totalSaw >= 7.1) {
    return 8;
  } else if (totalSaw >= 7.0) {
    return 9;
  } else if (totalSaw >= 6.9) {
    return 10;
  } else if (totalSaw >= 6.8) {
    return 11;
  } else if (totalSaw >= 6.7) {
    return 12;
  } else if (totalSaw >= 6.6) {
    return 13;
  } else if (totalSaw >= 6.5) {
    return 14;
  } else if (totalSaw >= 6.4) {
    return 15;
  } else if (totalSaw >= 6.3) {
    return 16;
  } else if (totalSaw >= 6.2) {
    return 17;
  } else if (totalSaw >= 6.1) {
    return 18;
  } else if (totalSaw >= 6.0) {
    return 19;
  } else if (totalSaw >= 5.9) {
    return 20;
  } else if (totalSaw >= 5.8) {
    return 21;
  } else if (totalSaw >= 5.7) {
    return 22;
  } else if (totalSaw >= 5.6) {
    return 23;
  } else if (totalSaw >= 5.5) {
    return 24;
  } else if (totalSaw >= 5.4) {
    return 25;
  } else if (totalSaw >= 5.3) {
    return 26;
  } else if (totalSaw >= 5.2) {
    return 27;
  } else if (totalSaw >= 5.1) {
    return 28;
  } else if (totalSaw >= 5.0) {
    return 29;
  } else if (totalSaw <= 4.9) {
    return 30;
  }
}

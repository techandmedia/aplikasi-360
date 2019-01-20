// Masa Kerja - Kredibilitas
export function HitungC1(K001, K002, K003, K004) {
  const c1_pimpinan = 1;
  const C1 = (K001 + K002 + K003 + K004) * c1_pimpinan;
  return C1;
}

// Pengetahuan - Kredibilitas
export function HitungC2(role_id, K005, K006, K007) {
  const c2_pimpinan = 0.4;
  const c2_rekan = 0.3;
  const c2_bawahan = 0.2;
  const c2_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C2 = (K005 + K006 + K007) * c2_pimpinan;
    return C2;
  } else if (role === 2) {
    let C2 = (K005 + K006 + K007) * c2_rekan;
    return C2;
  } else if (role === 3) {
    let C2 = (K005 + K006 + K007) * c2_bawahan;
    return C2;
  } else if (role === 4) {
    let C2 = (K005 + K006 + K007) * c2_mahasiswa;
    return C2;
  }
}

// Jujur - Bakat
export function HitungC3(role_id, K008, K009, K010) {
  const c3_pimpinan = 0.3;
  const c3_rekan = 0.4;
  const c3_bawahan = 0.2;
  const c3_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C3 = (K008 + K009 + K010) * c3_pimpinan;
    return C3;
  } else if (role === 2) {
    let C3 = (K008 + K009 + K010) * c3_rekan;
    return C3;
  } else if (role === 3) {
    let C3 = (K008 + K009 + K010) * c3_bawahan;
    return C3;
  } else if (role === 4) {
    let C3 = (K008 + K009 + K010) * c3_mahasiswa;
    return C3;
  }
}

// Kedisplinan - Kredibilitas
export function HitungC4(role_id, K011, K012, K013) {
  const c4_pimpinan = 0.4;
  const c4_rekan = 0.3;
  const c4_bawahan = 0.2;
  const c4_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C4 = (K011 + K012 + K013) * c4_pimpinan;
    return C4;
  } else if (role === 2) {
    let C4 = (K011 + K012 + K013) * c4_rekan;
    return C4;
  } else if (role === 3) {
    let C4 = (K011 + K012 + K013) * c4_bawahan;
    return C4;
  } else if (role === 4) {
    let C4 = (K011 + K012 + K013) * c4_mahasiswa;
    return C4;
  }
}

// Tanggungjawab - Kredibilitas
export function HitungC5(role_id, K014, K015, K016, K017) {
  const c5_pimpinan = 0.4;
  const c5_rekan = 0.3;
  const c5_bawahan = 0.2;
  const c5_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C5 = (K014 + K015 + K016 + K017) * c5_pimpinan;
    return C5;
  } else if (role === 2) {
    let C5 = (K014 + K015 + K016 + K017) * c5_rekan;
    return C5;
  } else if (role === 3) {
    let C5 = (K014 + K015 + K016 + K017) * c5_bawahan;
    return C5;
  } else if (role === 4) {
    let C5 = (K014 + K015 + K016 + K017) * c5_mahasiswa;
    return C5;
  }
}

// Inisiatif - Bakat
export function HitungC6(role_id, K018, K019, K020, K021, K022, K023) {
  const c6_pimpinan = 0.4;
  const c6_rekan = 0.3;
  const c6_bawahan = 0.2;
  const c6_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_pimpinan;
    return C6;
  } else if (role === 2) {
    let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_rekan;
    return C6;
  } else if (role === 3) {
    let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_bawahan;
    return C6;
  } else if (role === 4) {
    let C6 = (K018 + K019 + K020 + K021 + K022 + K023) * c6_mahasiswa;
    return C6;
  }
}

// Kreatifitas - Bakat
export function HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030) {
  const c7_pimpinan = 0.3;
  const c7_rekan = 0.4;
  const c7_bawahan = 0.2;
  const c7_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_pimpinan;
    return C7;
  } else if (role === 2) {
    let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_rekan;
    return C7;
  } else if (role === 3) {
    let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_bawahan;
    return C7;
  } else if (role === 4) {
    let C7 = (K024 + K025 + K026 + K027 + K028 + K029 + K030) * c7_mahasiswa;
    return C7;
  }
}

export function hitungHasil(TotalNilai) {
  if (TotalNilai > 20) {
    let hasil = "Sangat Bagus Sekali";
    return hasil;
  } else if (TotalNilai < 21 && TotalNilai > 18) {
    let hasil = "Bagus Sekali";
    return hasil;
  } else if (TotalNilai < 19 && TotalNilai > 14) {
    let hasil = "Bagus";
    return hasil;
  } else if (TotalNilai < 15 && TotalNilai > 10) {
    let hasil = "Cukup Bagus";
    return hasil;
  } else if (TotalNilai < 11) {
    let hasil = "Sangat Tidak Bagus";
    return hasil;
  }
}

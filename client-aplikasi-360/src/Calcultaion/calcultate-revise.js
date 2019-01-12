// Masa Kerja - Kredibilitas
export function HitungC1(K001, K002, K003, K004) {
  return K001 + K002 + K003 + K004;
}

// Pengetahuan - Kredibilitas
export function HitungC2(role_id, K005, K006, K007) {
  const c2_pimpinan = 0.4;
  const c2_rekan = 0.3;
  const c2_bawahan = 0.2;
  const c2_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C2 = {
      K5: K005 * c2_pimpinan,
      K6: K006 * c2_pimpinan,
      K7: K007 * c2_pimpinan
    };
    return C2;
  } else if (role === 2) {
    let C2 = {
      K5: K005 * c2_rekan,
      K6: K006 * c2_rekan,
      K7: K007 * c2_rekan
    };
    return C2;
  } else if (role === 3) {
    let C2 = {
      K5: K005 * c2_bawahan,
      K6: K006 * c2_bawahan,
      K7: K007 * c2_bawahan
    };
    return C2;
  } else if (role === 4) {
    let C2 = {
      K5: K005 * c2_mahasiswa,
      K6: K006 * c2_mahasiswa,
      K7: K007 * c2_mahasiswa
    };
    return C2;
  }
}

// Jujur - Bakat
export function HitungC3(role_id, K008, K009, K010) {
  const c3_pimpinan = 0.4;
  const c3_rekan = 0.3;
  const c3_bawahan = 0.2;
  const c3_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C3 = {
      K8: K008 * c3_pimpinan,
      K9: K009 * c3_pimpinan,
      K10: K010 * c3_pimpinan
    };
    return C3;
  } else if (role === 2) {
    let C3 = {
      K8: K008 * c3_rekan,
      K9: K009 * c3_rekan,
      K10: K010 * c3_rekan
    };
    return C3;
  } else if (role === 3) {
    let C3 = {
      K8: K008 * c3_bawahan,
      K9: K009 * c3_bawahan,
      K10: K010 * c3_bawahan
    };
    return C3;
  } else if (role === 4) {
    let C3 = {
      K8: K008 * c3_mahasiswa,
      K9: K009 * c3_mahasiswa,
      K10: K010 * c3_mahasiswa
    };
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
    let C4 = {
      K11: K011 * c4_pimpinan,
      K12: K012 * c4_pimpinan,
      K13: K013 * c4_pimpinan
    };
    return C4;
  } else if (role === 2) {
    let C4 = {
      K11: K011 * c4_rekan,
      K12: K012 * c4_rekan,
      K13: K013 * c4_rekan
    };
    return C4;
  } else if (role === 3) {
    let C4 = {
      K11: K011 * c4_bawahan,
      K12: K012 * c4_bawahan,
      K13: K013 * c4_bawahan
    };
    return C4;
  } else if (role === 4) {
    let C4 = {
      K11: K011 * c4_mahasiswa,
      K12: K012 * c4_mahasiswa,
      K13: K013 * c4_mahasiswa
    };
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
    let C5 = {
      K14: K014 * c5_pimpinan,
      K15: K015 * c5_pimpinan,
      K16: K016 * c5_pimpinan,
      K17: K017 * c5_pimpinan
    };
    return C5;
  } else if (role === 2) {
    let C5 = {
      K14: K014 * c5_rekan,
      K15: K015 * c5_rekan,
      K16: K016 * c5_rekan,
      K17: K017 * c5_rekan
    };
    return C5;
  } else if (role === 3) {
    let C5 = {
      K14: K014 * c5_bawahan,
      K15: K015 * c5_bawahan,
      K16: K016 * c5_bawahan,
      K17: K017 * c5_bawahan
    };
    return C5;
  } else if (role === 4) {
    let C5 = {
      K14: K014 * c5_mahasiswa,
      K15: K015 * c5_mahasiswa,
      K16: K016 * c5_mahasiswa,
      K17: K017 * c5_mahasiswa
    };
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
    let C6 = {
      K18: K018 * c6_pimpinan,
      K19: K019 * c6_pimpinan,
      K20: K020 * c6_pimpinan,
      K21: K021 * c6_pimpinan,
      K22: K022 * c6_pimpinan,
      K23: K023 * c6_pimpinan
    };
    return C6;
  } else if (role === 2) {
    let C6 = {
      K18: K018 * c6_rekan,
      K19: K019 * c6_rekan,
      K20: K020 * c6_rekan,
      K21: K021 * c6_rekan,
      K22: K022 * c6_rekan,
      K23: K023 * c6_rekan
    };
    return C6;
  } else if (role === 3) {
    let C6 = {
      K18: K018 * c6_bawahan,
      K19: K019 * c6_bawahan,
      K20: K020 * c6_bawahan,
      K21: K021 * c6_bawahan,
      K22: K022 * c6_bawahan,
      K23: K023 * c6_bawahan
    };
    return C6;
  } else if (role === 4) {
    let C6 = {
      K18: K018 * c6_mahasiswa,
      K19: K019 * c6_mahasiswa,
      K20: K020 * c6_mahasiswa,
      K21: K021 * c6_mahasiswa,
      K22: K022 * c6_mahasiswa,
      K23: K023 * c6_mahasiswa
    };
    return C6;
  }
}

// Kreatifitas - Bakat
export function HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030) {
  const c7_pimpinan = 0.4;
  const c7_rekan = 0.3;
  const c7_bawahan = 0.2;
  const c7_mahasiswa = 0.1;
  const role = role_id;
  if (role === 1) {
    let C7 = {
      K24: K024 * c7_pimpinan,
      K25: K025 * c7_pimpinan,
      K26: K026 * c7_pimpinan,
      K27: K027 * c7_pimpinan,
      K28: K028 * c7_pimpinan,
      K29: K029 * c7_pimpinan,
      K30: K030 * c7_pimpinan
    };
    return C7;
  } else if (role === 2) {
    let C7 = {
      K24: K024 * c7_rekan,
      K25: K025 * c7_rekan,
      K26: K026 * c7_rekan,
      K27: K027 * c7_rekan,
      K28: K028 * c7_rekan,
      K29: K029 * c7_rekan,
      K30: K030 * c7_rekan
    };
    return C7;
  } else if (role === 3) {
    let C7 = {
      K24: K024 * c7_bawahan,
      K25: K025 * c7_bawahan,
      K26: K026 * c7_bawahan,
      K27: K027 * c7_bawahan,
      K28: K028 * c7_bawahan,
      K29: K029 * c7_bawahan,
      K30: K030 * c7_bawahan
    };
    return C7;
  } else if (role === 4) {
    let C7 = {
      K24: K024 * c7_mahasiswa,
      K25: K025 * c7_mahasiswa,
      K26: K026 * c7_mahasiswa,
      K27: K027 * c7_mahasiswa,
      K28: K028 * c7_mahasiswa,
      K29: K029 * c7_mahasiswa,
      K30: K030 * c7_mahasiswa
    };
    return C7;
  }
}

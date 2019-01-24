import {
  HitungC1,
  HitungC2,
  HitungC3,
  HitungC4,
  HitungC5,
  HitungC6,
  HitungC7,
  hitungHasil
} from "./calcultate";

export function hitungQuestions(questions, users) {
  // const lenQ = questions.length;
  const lenQ = 3;
  // const lenU = users.length;
  const lenU = 3;
  for (let i = 0; i < lenQ; i++) {
    console.log(questions[i]);
    for (let k = 0; k < lenU; k++) {
      console.log(users[k]);
    }
  }
  // users.forEach(function(uItem) {
  //   let P1 = 0;
  //   let P2 = 0;
  //   let P3 = 0;
  //   let P4 = 0;
  //   let data = [];
  //   let i = 0;
  //   // console.log(qItem);
  //   questions.forEach(function(qItem) {
  //     i++;
  //     // console.log(uItem.nip_nim)
  //     if (qItem.nip_nim === uItem.nip_nim) {
  //       // console.log(uItem.name, i);
  //       // console.log(P1, P2, P3, P4);
  //       // console.log("sama", qItem.nip_nim, uItem.nip_nim);
  //       // console.log("sama", qItem.nip_nim, uItem.nip_nim);
  //       // console.log("sama", qItem.nip_nim, uItem.nip_nim);
  //       const role_id = qItem.role_id;
  //       const K001 = role_id === 1 ? qItem.K001 : 0;
  //       const K002 = role_id === 1 ? qItem.K002 : 0;
  //       const K003 = role_id === 1 ? qItem.K003 : 0;
  //       const K004 = role_id === 1 ? qItem.K004 : 0;
  //       const K005 = qItem.K005;
  //       const K006 = qItem.K006;
  //       const K007 = qItem.K007;
  //       const K008 = qItem.K008;
  //       const K009 = qItem.K009;
  //       const K010 = qItem.K010;
  //       const K011 = qItem.K011;
  //       const K012 = qItem.K012;
  //       const K013 = qItem.K013;
  //       const K014 = qItem.K014;
  //       const K015 = qItem.K015;
  //       const K016 = qItem.K016;
  //       const K017 = qItem.K017;
  //       const K018 = qItem.K018;
  //       const K019 = qItem.K019;
  //       const K020 = qItem.K020;
  //       const K021 = qItem.K021;
  //       const K022 = qItem.K022;
  //       const K023 = qItem.K023;
  //       const K024 = qItem.K024;
  //       const K025 = qItem.K025;
  //       const K026 = qItem.K026;
  //       const K027 = qItem.K027;
  //       const K028 = qItem.K028;
  //       const K029 = qItem.K029;
  //       const K030 = qItem.K030;

  //       const C1 = HitungC1(K001, K002, K003, K004);
  //       const C2 = HitungC2(role_id, K005, K006, K007);
  //       const C3 = HitungC3(role_id, K008, K009, K010);
  //       const C4 = HitungC4(role_id, K011, K012, K013);
  //       const C5 = HitungC5(role_id, K014, K015, K016, K017);
  //       const C6 = HitungC6(role_id, K018, K019, K020, K021, K022, K023);
  //       const C7 = HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030);

  //       const TotalNilai =
  //         C1 / 4 + C2 / 3 + C3 / 3 + C4 / 3 + C5 / 4 + C6 / 6 + C7 / 7;

  //       // console.log(TotalNilai);

  //       if (role_id === 1) {
  //         P1 = P1 + TotalNilai;
  //         // console.log("P1", P1);
  //       } else if (role_id === 2) {
  //         P2 = P2 + TotalNilai;
  //         // console.log("P2", P2);
  //       } else if (role_id === 3) {
  //         P3 = P3 + TotalNilai;
  //         // console.log("P3", P3);
  //       } else if (role_id === 4) {
  //         P4 = P4 + TotalNilai;
  //         // console.log("P4", P4);
  //       }

  //       const hasil = hitungHasil(TotalNilai);

  //       // console.log(role_id);
  //     } else {
  //       return null;
  //     }
  //     data.push({
  //       nip_nim: qItem.nip_nim,
  //       P1: P1,
  //       P2: P2,
  //       P3: P3,
  //       P4: P4
  //     });
  //     console.log(data);
  //   });
  // });
}

export function dapatkanNilai(users, questions) {
  const nilaiP = [];
  let P1 = 0;
  let P2 = 0;
  let P3 = 0;
  let P4 = 0;
  // console.log(users)
  for (let a = 0; a < users.length; a++) {
    // console.log(a, users[a].nip_nim);
    let roleSatu = 0;
    let roleDua = 0;
    let roleTiga = 0;
    let roleEmpat = 0;
    for (let i = 0; i < questions.length; i++) {
      if (users[a].nip_nim === questions[i].nip_nim) {
        let q = questions[i];
        let role_id = questions[i].role_id;
        let K001 = role_id === 1 ? q.K001 : 0;
        let K002 = role_id === 1 ? q.K002 : 0;
        let K003 = role_id === 1 ? q.K003 : 0;
        let K004 = role_id === 1 ? q.K004 : 0;
        let K005 = q.K005;
        let K006 = q.K006;
        let K007 = q.K007;
        let K008 = q.K008;
        let K009 = q.K009;
        let K010 = q.K010;
        let K011 = q.K011;
        let K012 = q.K012;
        let K013 = q.K013;
        let K014 = q.K014;
        let K015 = q.K015;
        let K016 = q.K016;
        let K017 = q.K017;
        let K018 = q.K018;
        let K019 = q.K019;
        let K020 = q.K020;
        let K021 = q.K021;
        let K022 = q.K022;
        let K023 = q.K023;
        let K024 = q.K024;
        let K025 = q.K025;
        let K026 = q.K026;
        let K027 = q.K027;
        let K028 = q.K028;
        let K029 = q.K029;
        let K030 = q.K030;

        let C1 = HitungC1(K001, K002, K003, K004);
        let C2 = HitungC2(role_id, K005, K006, K007);
        let C3 = HitungC3(role_id, K008, K009, K010);
        let C4 = HitungC4(role_id, K011, K012, K013);
        let C5 = HitungC5(role_id, K014, K015, K016, K017);
        let C6 = HitungC6(role_id, K018, K019, K020, K021, K022, K023);
        let C7 = HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030);

        const TotalNilai =
          C1 / 4 + C2 / 3 + C3 / 3 + C4 / 3 + C5 / 4 + C6 / 6 + C7 / 7;
          // console.log(users[a].name, P1, P2, P3, P4);

        if (role_id === 1) {
          roleSatu++;
          P1 = P1 + TotalNilai;
          // console.log(users[a].name, TotalNilai);
        } else if (role_id === 2) {
          roleDua++;
          P2 = P2 + TotalNilai;
          // console.log("P2", P2);
        } else if (role_id === 3) {
          roleTiga++;
          P3 = P3 + TotalNilai;
          // console.log("P3", P3);
        } else if (role_id === 4) {
          roleEmpat++;
          P4 = P4 + TotalNilai;
          // console.log("P4", P4);
        }

        // console.log(i, TotalNilai);
      }
    }
    // console.log("###############################", roleSatu, P1 / roleSatu);
    const totalP1 = P1 / roleSatu;
    const totalP2 = P2 / roleDua;
    const totalP3 = P3 / roleTiga;
    const totalP4 = P4 / roleEmpat;
    const TotalP = totalP1 + totalP2 + totalP3 + totalP4;
    const hasil = hitungHasil(TotalP);
    // const totalHasil = hasil.toFixed(1);
    if (P1 > 0 || P2 > 0 || P3 > 0 || P4 > 0) {
      nilaiP.push({
        nip_nim: users[a].nip_nim,
        name: users[a].name,
        p1: totalP1.toFixed(1),
        p2: totalP2.toFixed(1),
        p3: totalP3.toFixed(1),
        p4: totalP4.toFixed(1),
        total: TotalP.toFixed(1),
        hasil: hasil
      });
      // console.log(
      //   users[a].name,
      //   totalP1.toFixed(1),
      //   totalP2.toFixed(1),
      //   totalP3.toFixed(1),
      //   totalP4.toFixed(1),
      //   TotalP.toFixed(1)
      // );
    }
    P1 = 0;
    P2 = 0;
    P3 = 0;
    P4 = 0;
  }
  // console.log(nilaiP);
  return nilaiP;
}

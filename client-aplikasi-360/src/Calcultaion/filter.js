import {
  HitungC1,
  HitungC2,
  HitungC3,
  HitungC4,
  HitungC5,
  HitungC6,
  HitungC7,
  hitungHasil,
  cariRangking
} from "./calcultate";

export function dapatkanNilai(users, questions) {
  const nilaiP = [];
  let P1 = 0;
  let P2 = 0;
  let P3 = 0;
  let P4 = 0;
  let C1Rank = 0;
  let C2Rank = 0;
  let C3Rank = 0;
  let C4Rank = 0;
  let C5Rank = 0;
  let C6Rank = 0;
  let C7Rank = 0;
  let pimpinanCounter = 0;
  let counterUserQuestions = 0;
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

        // ====== Menghitung dengan Methode SAW
        const RankC1 = C1 / 4;
        const RankC2 = C2 / 3;
        const RankC3 = C3 / 3;
        const RankC4 = C4 / 3;
        const RankC5 = C5 / 4;
        const RankC6 = C6 / 6;
        const RankC7 = C7 / 7;
        C1Rank = C1Rank + RankC1;
        C2Rank = C2Rank + RankC2;
        C3Rank = C3Rank + RankC3;
        C4Rank = C4Rank + RankC4;
        C5Rank = C5Rank + RankC5;
        C6Rank = C6Rank + RankC6;
        C7Rank = C7Rank + RankC7;
        if (role_id === 1) {
          pimpinanCounter++;
        }
        counterUserQuestions++;

        if (role_id === 1) {
          roleSatu++;
          P1 = P1 + TotalNilai;
        } else if (role_id === 2) {
          roleDua++;
          P2 = P2 + TotalNilai;
        } else if (role_id === 3) {
          roleTiga++;
          P3 = P3 + TotalNilai;
        } else if (role_id === 4) {
          roleEmpat++;
          P4 = P4 + TotalNilai;
        }
      }
    }

    // console.log("###############################", roleSatu, P1 / roleSatu);

    if (P1 > 0 || P2 > 0 || P3 > 0 || P4 > 0) {
      const totalP1 = P1 / roleSatu;
      const totalP2 = P2 / roleDua;
      const totalP3 = P3 / roleTiga;
      const totalP4 = P4 / roleEmpat;
      const TotalP = totalP1 + totalP2 + totalP3 + totalP4;
      const hasil = hitungHasil(TotalP.toFixed(1));

      // ======= Metode SAW ==============
      const totalc1 = (C1Rank / pimpinanCounter / 5) * 1;
      const totalc2 = (C2Rank / counterUserQuestions / 4) * 1;
      const totalc3 = (C3Rank / counterUserQuestions / 4) * 1;
      const totalc4 = (C4Rank / counterUserQuestions / 4) * 3;
      const totalc5 = (C5Rank / counterUserQuestions / 4) * 2;
      const totalc6 = (C6Rank / counterUserQuestions / 4) * 1;
      const totalc7 = (C7Rank / counterUserQuestions / 4) * 1;
      const TotalRankSaw =
        totalc1 + totalc2 + totalc3 + totalc4 + totalc5 + totalc6 + totalc7;
      // console.log(
      //   TotalRankSaw.toFixed(2),
      //   cariRangking(TotalRankSaw.toFixed(2))
      // );

      // ====== Metode 360
      nilaiP.push({
        nip_nim: users[a].nip_nim,
        name: users[a].name,
        p1: totalP1.toFixed(1),
        p2: totalP2.toFixed(1),
        p3: totalP3.toFixed(1),
        p4: totalP4.toFixed(1),
        total: TotalP.toFixed(1),
        totalSaw: TotalRankSaw.toFixed(2),
        c1: totalc1.toFixed(2),
        c2: totalc2.toFixed(2),
        c3: totalc3.toFixed(2),
        c4: totalc4.toFixed(2),
        c5: totalc5.toFixed(2),
        c6: totalc6.toFixed(2),
        c7: totalc7.toFixed(2),
        ranking: cariRangking(TotalRankSaw.toFixed(2)),
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
    C1Rank = 0;
    C2Rank = 0;
    C3Rank = 0;
    C4Rank = 0;
    C5Rank = 0;
    C6Rank = 0;
    C7Rank = 0;
    pimpinanCounter = 0;
    counterUserQuestions = 0;
  }
  // console.log(nilaiP);
  return nilaiP;
}

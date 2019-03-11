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
import { getMaxC } from "./c-max-column";

export function dapatkanNilai(users, questions) {
  const usersForC = users;
  const questionsForC = questions;
  const maxC = getMaxC(usersForC, questionsForC);
  console.log(maxC);

  const nilaiP = [];
  // let P1 = 0;
  // let P2 = 0;
  // let P3 = 0;
  // let P4 = 0;
  let baseC1 = 0;
  let baseC2 = 0;
  let baseC3 = 0;
  let baseC4 = 0;
  let baseC5 = 0;
  let baseC6 = 0;
  let baseC7 = 0;
  let C1Rank = 0;
  let C2Rank = 0;
  let C3Rank = 0;
  let C4Rank = 0;
  let C5Rank = 0;
  let C6Rank = 0;
  let C7Rank = 0;
  let pimpinanCounter = 0;
  let counterUserQuestions = 0;
  let arrayOffC = [];
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

        // const TotalNilai =
        //   C1 / 4 + C2 / 3 + C3 / 3 + C4 / 3 + C5 / 4 + C6 / 6 + C7 / 7;
        // console.log(users[a].name, P1, P2, P3, P4);

        baseC1 = baseC1 + C1;
        baseC2 = baseC2 + C2;
        baseC3 = baseC3 + C3;
        baseC4 = baseC4 + C4;
        baseC5 = baseC5 + C5;
        baseC6 = baseC6 + C6;
        baseC7 = baseC7 + C7;

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
        } else if (role_id === 2) {
          roleDua++;
        } else if (role_id === 3) {
          roleTiga++;
        } else if (role_id === 4) {
          roleEmpat++;
        }
      }
    }

    // console.log("baseC1",baseC1/roleSatu)

    // console.log("###############################", roleSatu, P1 / roleSatu);

    if (baseC1 > 0 || baseC2 > 0) {
      const totalRole = roleSatu + roleDua + roleTiga + roleEmpat;

      // Cari nilai terbesar dari tiap kolom C1-C7
      // Masukkan ke dalam array
      arrayOffC.push({
        // c1: (baseC1 / roleSatu),
        // c2: (baseC2 / totalRole),
        // c3: (baseC3 / totalRole),
        // c4: (baseC4 / totalRole),
        // c5: (baseC5 / totalRole),
        // c6: (baseC6 / totalRole),
        // c7: (baseC7 / totalRole)

        c1: (baseC1 / roleSatu).toFixed(2),
        c2: (baseC2 / totalRole).toFixed(2),
        c3: (baseC3 / totalRole).toFixed(2),
        c4: (baseC4 / totalRole).toFixed(2),
        c5: (baseC5 / totalRole).toFixed(2),
        c6: (baseC6 / totalRole).toFixed(2),
        c7: (baseC7 / totalRole).toFixed(2)
      });

      // console.log(arrayOffC)

      const totalP1 =
        ((baseC1 * 2) / roleSatu) * 1 +
        ((baseC2 * 2) / totalRole) * 0.4 +
        ((baseC3 * 2) / totalRole) * 0.3 +
        ((baseC4 * 2) / totalRole) * 1 + //diganti 1
        ((baseC5 * 2) / totalRole) * 1 + //diganti 1
        ((baseC6 * 2) / totalRole) * 0.4 +
        ((baseC7 * 2) / totalRole) * 0.3;

      const totalP2 =
        ((baseC2 * 2) / totalRole) * 0.3 +
        ((baseC3 * 2) / totalRole) * 0.4 +
        ((baseC4 * 2) / totalRole) * 0.8 + //diganti 0,8
        ((baseC5 * 2) / totalRole) * 0.5 + //diganti 0,5
        ((baseC6 * 2) / totalRole) * 0.3 +
        ((baseC7 * 2) / totalRole) * 0.4;

      const totalP3 =
        ((baseC2 * 2) / totalRole) * 0.2 +
        ((baseC3 * 2) / totalRole) * 0.2 +
        ((baseC4 * 2) / totalRole) * 0.7 + //diganti 0,7
        ((baseC5 * 2) / totalRole) * 0.3 + //diganti 0,3
        ((baseC6 * 2) / totalRole) * 0.2 +
        ((baseC7 * 2) / totalRole) * 0.2;

      const totalP4 =
        ((baseC2 * 2) / totalRole) * 0.1 +
        ((baseC3 * 2) / totalRole) * 0.1 +
        ((baseC4 * 2) / totalRole) * 0.5 + //diganti 0,5
        ((baseC5 * 2) / totalRole) * 0.2 + //diganti 0,2
        ((baseC6 * 2) / totalRole) * 0.1 +
        ((baseC7 * 2) / totalRole) * 0.1;

      const TotalP = totalP1 + totalP2 + totalP3 + totalP4;

      const hasil = hitungHasil(TotalP.toFixed(1));

      // ======= Metode SAW ==============
      const totalc1 = (baseC1 / pimpinanCounter / maxC[0].maxc1) * 1;
      const totalc2 = (baseC2 / counterUserQuestions / maxC[0].maxc2) * 1;
      const totalc3 = (baseC3 / counterUserQuestions / maxC[0].maxc3) * 1;
      const totalc4 = (baseC4 / counterUserQuestions / maxC[0].maxc4) * 3;
      const totalc5 = (baseC5 / counterUserQuestions / maxC[0].maxc5) * 2;
      const totalc6 = (baseC6 / counterUserQuestions / maxC[0].maxc6) * 1;
      const totalc7 = (baseC7 / counterUserQuestions / maxC[0].maxc7) * 1;
      const TotalRankSaw =
        totalc1 + totalc2 + totalc3 + totalc4 + totalc5 + totalc6 + totalc7;

      // ====== Metode 360

      nilaiP.push({
        nip_nim: users[a].nip_nim,
        name: users[a].name,
        // p1: totalP1,
        // p2: totalP2,
        // p3: totalP3,
        // p4: totalP4,
        // total: TotalP,
        // totalSaw: TotalRankSaw,
        // c1: totalc1,
        // c2: totalc2,
        // c3: totalc3,
        // c4: totalc4,
        // c5: totalc5,
        // c6: totalc6,
        // c7: totalc7,
        // ranking: cariRangking(TotalRankSaw),

        p1: totalP1.toFixed(1),
        p2: totalP2.toFixed(1),
        p3: totalP3.toFixed(1),
        p4: totalP4.toFixed(1),
        total: `${TotalP.toFixed(1)}%`,
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
    }
    // P1 = 0;
    // P2 = 0;
    // P3 = 0;
    // P4 = 0;
    C1Rank = 0;
    C2Rank = 0;
    C3Rank = 0;
    C4Rank = 0;
    C5Rank = 0;
    C6Rank = 0;
    C7Rank = 0;
    pimpinanCounter = 0;
    counterUserQuestions = 0;

    console.log(baseC1 / roleSatu);
    baseC1 = 0;
    baseC2 = 0;
    baseC3 = 0;
    baseC4 = 0;
    baseC5 = 0;
    baseC6 = 0;
    baseC7 = 0;
  }
  // console.log(nilaiP);
  return nilaiP;
}

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

// Output yang diinginkan
// array = [
//   {
//     nip_nim: nip_nim_1,
//     P1: P1, // a total of P1 from nip_nim_1
//     P2: P2, // a total of P2 from nip_nim_1
//     P3: P3, // a total of P3 from nip_nim_1
//     P4: P4, // a total of P4 from nip_nim_1
//     Total: Total // a total of P from nip_nim_1
//   },
//   {
//     nip_nim: nip_nim_2,
//     P1: P1, // a total of P1 from nip_nim_2
//     P2: P2, // a total of P2 from nip_nim_2
//     P3: P3, // a total of P3 from nip_nim_2
//     P4: P4, // a total of P4 from nip_nim_2
//     Total: Total // a total of P from nip_nim_1
//   }, etc.
// ];

export function hitungQuestions(questions, users) {
  users.forEach(function(uItem) {
    let P1 = 0;
    let P2 = 0;
    let P3 = 0;
    let P4 = 0;
    let data = [];
    let i = 0;
    // console.log(qItem);
    questions.forEach(function(qItem) {
      i++;
      // console.log(uItem.nip_nim)
      if (qItem.nip_nim === uItem.nip_nim) {
        // console.log(uItem.name, i);
        // console.log(P1, P2, P3, P4);
        // console.log("sama", qItem.nip_nim, uItem.nip_nim);
        // console.log("sama", qItem.nip_nim, uItem.nip_nim);
        // console.log("sama", qItem.nip_nim, uItem.nip_nim);
        const role_id = qItem.role_id;
        const K001 = role_id === 1 ? qItem.K001 : 0;
        const K002 = role_id === 1 ? qItem.K002 : 0;
        const K003 = role_id === 1 ? qItem.K003 : 0;
        const K004 = role_id === 1 ? qItem.K004 : 0;
        const K005 = qItem.K005;
        const K006 = qItem.K006;
        const K007 = qItem.K007;
        const K008 = qItem.K008;
        const K009 = qItem.K009;
        const K010 = qItem.K010;
        const K011 = qItem.K011;
        const K012 = qItem.K012;
        const K013 = qItem.K013;
        const K014 = qItem.K014;
        const K015 = qItem.K015;
        const K016 = qItem.K016;
        const K017 = qItem.K017;
        const K018 = qItem.K018;
        const K019 = qItem.K019;
        const K020 = qItem.K020;
        const K021 = qItem.K021;
        const K022 = qItem.K022;
        const K023 = qItem.K023;
        const K024 = qItem.K024;
        const K025 = qItem.K025;
        const K026 = qItem.K026;
        const K027 = qItem.K027;
        const K028 = qItem.K028;
        const K029 = qItem.K029;
        const K030 = qItem.K030;

        const C1 = HitungC1(K001, K002, K003, K004);
        const C2 = HitungC2(role_id, K005, K006, K007);
        const C3 = HitungC3(role_id, K008, K009, K010);
        const C4 = HitungC4(role_id, K011, K012, K013);
        const C5 = HitungC5(role_id, K014, K015, K016, K017);
        const C6 = HitungC6(role_id, K018, K019, K020, K021, K022, K023);
        const C7 = HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030);

        const TotalNilai =
          C1 / 4 + C2 / 3 + C3 / 3 + C4 / 3 + C5 / 4 + C6 / 6 + C7 / 7;

        // console.log(TotalNilai);

        if (role_id === 1) {
          P1 = P1 + TotalNilai;
          // console.log("P1", P1);
        } else if (role_id === 2) {
          P2 = P2 + TotalNilai;
          // console.log("P2", P2);
        } else if (role_id === 3) {
          P3 = P3 + TotalNilai;
          // console.log("P3", P3);
        } else if (role_id === 4) {
          P4 = P4 + TotalNilai;
          // console.log("P4", P4);
        }

        const hasil = hitungHasil(TotalNilai);

        // console.log(role_id);
      } else {
        return null;
      }
      data.push({
        nip_nim: qItem.nip_nim,
        P1: P1,
        P2: P2,
        P3: P3,
        P4: P4
      });
      console.log(data);
    });
  });
}

export function dapatkanNilai(users, questions) {
  // const user = groupBy(users, "nip_nim");
  const question = groupBy(questions, "nip_nim");
  const len = users.length;
  const lenQ = Object.keys(question).length;
  // console.log(users);
  // console.log(question);
  // console.log(lenQ);

  let tes = 0;
  let P1 = 0;
  let P2 = 0;
  let P3 = 0;
  let P4 = 0;

  for (let a = 0; a < users.length; a++) {
    // console.log(a, users[a].nip_nim);
    for (let i = 0; i < questions.length; i++) {
      if (users[a].nip_nim === questions[i].nip_nim) {
        console.log(i, questions[i].nip_nim);
      }
    }
  }

  // Object.entries(question).forEach(([key, value]) => {
  //   // console.log(Object.values(value));
  //   console.log(key, value[key].role_id);

  //   console.log(key, value);
  //   // tes = tes + value[key].K001;

  //   const qItem = value[key];

  //   const role_id = qItem.role_id;
  //   const K001 = role_id === 1 ? value.K001 : 0;
  //   const K002 = role_id === 1 ? qItem.K002 : 0;
  //   const K003 = role_id === 1 ? qItem.K003 : 0;
  //   const K004 = role_id === 1 ? qItem.K004 : 0;
  //   const K005 = qItem.K005;
  //   const K006 = qItem.K006;
  //   const K007 = qItem.K007;
  //   const K008 = qItem.K008;
  //   const K009 = qItem.K009;
  //   const K010 = qItem.K010;
  //   const K011 = qItem.K011;
  //   const K012 = qItem.K012;
  //   const K013 = qItem.K013;
  //   const K014 = qItem.K014;
  //   const K015 = qItem.K015;
  //   const K016 = qItem.K016;
  //   const K017 = qItem.K017;
  //   const K018 = qItem.K018;
  //   const K019 = qItem.K019;
  //   const K020 = qItem.K020;
  //   const K021 = qItem.K021;
  //   const K022 = qItem.K022;
  //   const K023 = qItem.K023;
  //   const K024 = qItem.K024;
  //   const K025 = qItem.K025;
  //   const K026 = qItem.K026;
  //   const K027 = qItem.K027;
  //   const K028 = qItem.K028;
  //   const K029 = qItem.K029;
  //   const K030 = qItem.K030;

  //   console.log(key, K030);

  //   const C1 = HitungC1(K001, K002, K003, K004);
  //   const C2 = HitungC2(role_id, K005, K006, K007);
  //   const C3 = HitungC3(role_id, K008, K009, K010);
  //   const C4 = HitungC4(role_id, K011, K012, K013);
  //   const C5 = HitungC5(role_id, K014, K015, K016, K017);
  //   const C6 = HitungC6(role_id, K018, K019, K020, K021, K022, K023);
  //   const C7 = HitungC7(role_id, K024, K025, K026, K027, K028, K029, K030);

  //   const TotalNilai =
  //     C1 / 4 + C2 / 3 + C3 / 3 + C4 / 3 + C5 / 4 + C6 / 6 + C7 / 7;

  //   // console.log(TotalNilai);

  //   if (role_id === 1) {
  //     P1 = P1 + TotalNilai;
  //     console.log("roleid", role_id, "P1", P1);
  //   } else if (role_id === 2) {
  //     P2 = P2 + TotalNilai;
  //     console.log("P2", P2);
  //   } else if (role_id === 3) {
  //     P3 = P3 + TotalNilai;
  //     console.log("P3", P3);
  //   } else if (role_id === 4) {
  //     P4 = P4 + TotalNilai;
  //     console.log("P4", P4);
  //   }

  //   const apiJson = {
  //     data: [
  //       {
  //         id: 100,
  //         jobNumber: 1,
  //         jobTasks: [
  //           { id: 12, cost: { amountString: 100 } },
  //           { id: 13, cost: { amountString: 500 } }
  //         ]
  //       },
  //       {
  //         id: 101,
  //         jobNumber: 2,
  //         jobTasks: [
  //           { id: 14, cost: { amountString: 100 } },
  //           { id: 15, cost: { amountString: 200 } }
  //         ]
  //       }
  //     ]
  //   };

  //   const output = apiJson.data.map(d => ({
  //     jobNumber: d.jobNumber,
  //     tasksCost: d.jobTasks.reduce(
  //       (a, b) => a.cost.amountString + b.cost.amountString
  //     )
  //   }));

  //   const testing = questions.map(data => {
  //     console.log(data);
  //   });

  //   const hasil = hitungHasil(TotalNilai);
  // });
  // console.log(tes);
}

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

import {
    HitungC1,
    HitungC2,
    HitungC3,
    HitungC4,
    HitungC5,
    HitungC6,
    HitungC7,
} from "./calcultate";

export function getMaxC(users, questions) {
    let baseC1 = 0;
    let baseC2 = 0;
    let baseC3 = 0;
    let baseC4 = 0;
    let baseC5 = 0;
    let baseC6 = 0;
    let baseC7 = 0;
    let arrayc1 = []; let arrayc2 = [];
    let arrayc3 = []; let arrayc4 = [];
    let arrayc5 = []; let arrayc6 = []; let arrayc7 = [];
    const arrayOffC = [];
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

                baseC1 = baseC1 + C1;
                baseC2 = baseC2 + C2;
                baseC3 = baseC3 + C3;
                baseC4 = baseC4 + C4;
                baseC5 = baseC5 + C5;
                baseC6 = baseC6 + C6;
                baseC7 = baseC7 + C7;

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

        if (baseC1 > 0 || baseC2 > 0) {
            const totalRole = roleSatu + roleDua + roleTiga + roleEmpat;

            // Cari nilai terbesar dari tiap kolom C1-C7
            // Masukkan ke dalam array
            arrayc1.push(
                (baseC1 / roleSatu)
            )
            arrayc2.push(
                (baseC2 / totalRole)
            )
            arrayc3.push(
                (baseC3 / totalRole)
            )
            arrayc4.push(
                (baseC4 / totalRole)
            )
            arrayc5.push(
                (baseC5 / totalRole)
            )
            arrayc6.push(
                (baseC6 / totalRole)
            )
            arrayc7.push(
                (baseC7 / totalRole)
            )

            
            // arrayc1.push(
            //     (baseC1 / roleSatu).toFixed(2)
            // )
            // arrayc2.push(
            //     (baseC2 / totalRole).toFixed(2)
            // )
            // arrayc3.push(
            //     (baseC3 / totalRole).toFixed(2)
            // )
            // arrayc4.push(
            //     (baseC4 / totalRole).toFixed(2)
            // )
            // arrayc5.push(
            //     (baseC5 / totalRole).toFixed(2)
            // )
            // arrayc6.push(
            //     (baseC6 / totalRole).toFixed(2)
            // )
            // arrayc7.push(
            //     (baseC7 / totalRole).toFixed(2)
            // )
        }
        baseC1 = 0;
        baseC2 = 0;
        baseC3 = 0;
        baseC4 = 0;
        baseC5 = 0;
        baseC6 = 0;
        baseC7 = 0;
    }
    arrayOffC.push({
        maxc1: Math.max.apply(null, arrayc1),
        maxc2: Math.max.apply(null, arrayc2),
        maxc3: Math.max.apply(null, arrayc3),
        maxc4: Math.max.apply(null, arrayc4),
        maxc5: Math.max.apply(null, arrayc5),
        maxc6: Math.max.apply(null, arrayc6),
        maxc7: Math.max.apply(null, arrayc7)
    })
    console.log(arrayOffC)
    return arrayOffC
}

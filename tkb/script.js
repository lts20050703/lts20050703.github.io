var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23;
const isOnlines = {
    0: {
        2: { 0: true, 1: false },
        3: { 0: true },
        4: { 0: false, 1: true },
        5: { 0: false },
        6: { 0: true, 1: false },
        7: { 0: true }
    },
    1: {
        2: { 0: false, 1: true },
        3: { 0: false },
        // 4: { 0: true, 1: false },
        // 5: { 0: true },
        // 6: { 0: false, 1: true },
        // 7: { 0: false }
        4: { 0: true, 1: true },
        5: { 0: true },
        6: { 0: true, 1: true },
        7: { 0: true }
    }
};
const tkb = {
    2: {
        0: { 1: "Chào cờ", 2: "Sinh hoạt lớp", 3: "Hình", 4: "Hình", 5: "Sinh" },
        1: { 2: "Hóa", 3: "Hóa", 4: "GDCD", 5: "GDQP" }
    },
    4: { 0: { 1: "Văn", 2: "Văn", 3: "Tin", 4: "Tin", 5: "Tin" }, 1: { 3: "Anh", 4: "Anh", 5: "Anh" } },
    5: { 0: { 1: "Địa", 2: "Thể dục", 3: "Thể dục", 4: "Lý", 5: "Lý" } },
    6: { 0: { 1: "Giải tích", 2: "Giải tích", 3: "Giải tích", 4: "Văn", 5: "Văn" }, 1: { 2: "Sử", 3: "Lý", 4: "Lý" } },
    7: { 0: { 1: "Hóa", 2: "Hóa", 3: "Công nghệ", 4: "Công nghệ", 5: "Hình" } }
};
const date = new Date();
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    if (!p)
        continue;
    switch (p.id) {
        case "00":
            p.innerHTML = `Thứ ${date.getDay() + 1}`;
            break;
        case "10": {
            const isOnline = (_b = (_a = isOnlines[since_2022_01_17("w") % 2]) === null || _a === void 0 ? void 0 : _a[(since_2022_01_17("d") + 1) % 7 + 1]) === null || _b === void 0 ? void 0 : _b[0];
            p.innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`;
            break;
        }
        case "20": {
            p.innerHTML = ((_d = (_c = tkb[date.getDay() + 1]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d[1]) || ".";
            break;
        }
        case "21": {
            p.innerHTML = ((_f = (_e = tkb[date.getDay() + 1]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f[2]) || ".";
            break;
        }
        case "22": {
            p.innerHTML = ((_h = (_g = tkb[date.getDay() + 1]) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h[3]) || ".";
            break;
        }
        case "23": {
            p.innerHTML = ((_k = (_j = tkb[date.getDay() + 1]) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k[4]) || ".";
            break;
        }
        case "24": {
            p.innerHTML = ((_m = (_l = tkb[date.getDay() + 1]) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m[5]) || ".";
            break;
        }
        case "30": {
            const isOnline = (_p = (_o = isOnlines[since_2022_01_17("w") % 2]) === null || _o === void 0 ? void 0 : _o[(since_2022_01_17("d") + 1) % 7 + 1]) === null || _p === void 0 ? void 0 : _p[1];
            p.innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`;
            break;
        }
        case "40": {
            p.innerHTML = ((_r = (_q = tkb[date.getDay() + 1]) === null || _q === void 0 ? void 0 : _q[1]) === null || _r === void 0 ? void 0 : _r[1]) || ".";
            break;
        }
        case "41": {
            p.innerHTML = ((_t = (_s = tkb[date.getDay() + 1]) === null || _s === void 0 ? void 0 : _s[1]) === null || _t === void 0 ? void 0 : _t[2]) || ".";
            break;
        }
        case "42": {
            p.innerHTML = ((_v = (_u = tkb[date.getDay() + 1]) === null || _u === void 0 ? void 0 : _u[1]) === null || _v === void 0 ? void 0 : _v[3]) || ".";
            break;
        }
        case "43": {
            p.innerHTML = ((_x = (_w = tkb[date.getDay() + 1]) === null || _w === void 0 ? void 0 : _w[1]) === null || _x === void 0 ? void 0 : _x[4]) || ".";
            break;
        }
        case "44": {
            p.innerHTML = ((_z = (_y = tkb[date.getDay() + 1]) === null || _y === void 0 ? void 0 : _y[1]) === null || _z === void 0 ? void 0 : _z[5]) || ".";
            break;
        }
        case "50": {
            p.innerHTML = `Thứ ${date.getDay() + 2}`;
            break;
        }
        case "60": {
            const isOnline = (_1 = (_0 = isOnlines[since_2022_01_17("w", new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)) % 2]) === null || _0 === void 0 ? void 0 : _0[(since_2022_01_17("d") + 2) % 7 + 1]) === null || _1 === void 0 ? void 0 : _1[0];
            p.innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`;
            break;
        }
        case "70": {
            p.innerHTML = ((_3 = (_2 = tkb[date.getDay() + 2]) === null || _2 === void 0 ? void 0 : _2[0]) === null || _3 === void 0 ? void 0 : _3[1]) || ".";
            break;
        }
        case "71": {
            p.innerHTML = ((_5 = (_4 = tkb[date.getDay() + 2]) === null || _4 === void 0 ? void 0 : _4[0]) === null || _5 === void 0 ? void 0 : _5[2]) || ".";
            break;
        }
        case "72": {
            p.innerHTML = ((_7 = (_6 = tkb[date.getDay() + 2]) === null || _6 === void 0 ? void 0 : _6[0]) === null || _7 === void 0 ? void 0 : _7[3]) || ".";
            break;
        }
        case "73": {
            p.innerHTML = ((_9 = (_8 = tkb[date.getDay() + 2]) === null || _8 === void 0 ? void 0 : _8[0]) === null || _9 === void 0 ? void 0 : _9[4]) || ".";
            break;
        }
        case "74": {
            p.innerHTML = ((_11 = (_10 = tkb[date.getDay() + 2]) === null || _10 === void 0 ? void 0 : _10[0]) === null || _11 === void 0 ? void 0 : _11[5]) || ".";
            break;
        }
        case "80": {
            const isOnline = (_13 = (_12 = isOnlines[since_2022_01_17("w", new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)) % 2]) === null || _12 === void 0 ? void 0 : _12[(since_2022_01_17("d") + 2) % 7 + 1]) === null || _13 === void 0 ? void 0 : _13[1];
            p.innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`;
            break;
        }
        case "90": {
            p.innerHTML = ((_15 = (_14 = tkb[date.getDay() + 2]) === null || _14 === void 0 ? void 0 : _14[1]) === null || _15 === void 0 ? void 0 : _15[1]) || ".";
            break;
        }
        case "91": {
            p.innerHTML = ((_17 = (_16 = tkb[date.getDay() + 2]) === null || _16 === void 0 ? void 0 : _16[1]) === null || _17 === void 0 ? void 0 : _17[2]) || ".";
            break;
        }
        case "92": {
            p.innerHTML = ((_19 = (_18 = tkb[date.getDay() + 2]) === null || _18 === void 0 ? void 0 : _18[1]) === null || _19 === void 0 ? void 0 : _19[3]) || ".";
            break;
        }
        case "93": {
            p.innerHTML = ((_21 = (_20 = tkb[date.getDay() + 2]) === null || _20 === void 0 ? void 0 : _20[1]) === null || _21 === void 0 ? void 0 : _21[4]) || ".";
            break;
        }
        case "94": {
            p.innerHTML = ((_23 = (_22 = tkb[date.getDay() + 2]) === null || _22 === void 0 ? void 0 : _22[1]) === null || _23 === void 0 ? void 0 : _23[5]) || ".";
            break;
        }
    }
}
function since_2022_01_17(type, d = date) {
    switch (type) {
        case "w":
            return Math.floor((d.getTime() - new Date(2022, 0, 17).getTime()) / ms("w"));
        case "d":
            return Math.floor((d.getTime() - new Date(2022, 0, 17).getTime()) / ms("d"));
    }
}
function ms(raw) {
    const s = 1000, m = 60 * s, h = 60 * m, d = 24 * h, w = 7 * d;
    switch (raw) {
        case "d":
            return d;
        case "w":
            return w;
    }
}
export {};

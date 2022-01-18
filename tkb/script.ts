const p = document.getElementsByTagName("p")
const isOnlines: { [key: number]: { [key: number]: { [key: number]: boolean } } } = {
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
		5: { 0: true, 1: true },
		6: { 0: true, 1: true },
		7: { 0: true, 1: true }
	}
}
const tkb: { [key: number]: { [key: number]: { [key: number]: string } } } = {
	2: {
		0: { 1: "Chào cờ", 2: "Sinh hoạt lớp", 3: "Hình", 4: "Hình", 5: "Sinh" },
		1: { 2: "Hóa", 3: "Hóa", 4: "GDCD", 5: "GDQP" }
	},
	4: { 0: { 1: "Văn", 2: "Văn", 3: "Tin", 4: "Tin", 5: "Tin" }, 1: { 3: "Anh", 4: "Anh", 5: "Anh" } },
	5: { 0: { 1: "Địa", 2: "Thể dục", 3: "Thể dục", 4: "Lý", 5: "Lý" } },
	6: { 0: { 1: "Giải tích", 2: "Giải tích", 3: "Giải tích", 4: "Văn", 5: "Văn" }, 1: { 2: "Sử", 3: "Lý", 4: "Lý" } },
	7: { 0: { 1: "Hóa", 2: "Hóa", 3: "Công nghệ", 4: "Công nghệ", 5: "Hình" } }
}

// const date = new Date(2022,0,17)
const date = new Date()

for (let i = 0; i < p.length; i++) {
	switch (p[i].id) {
		case "00":
			p[i].innerHTML = `Thứ ${date.getDay() + 1}`
			break
		case "10": {
			const isOnline = isOnlines[since_2022_01_17("w") % 2]?.[(since_2022_01_17("d") + 1) % 7 + 1]?.[0]
			p[i].innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`
			break
		}
		case "20": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[0]?.[1] || "."
			break
		}
		case "21": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[0]?.[2] || "."
			break
		}
		case "22": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[0]?.[3] || "."
			break
		}
		case "23": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[0]?.[4] || "."
			break
		}
		case "24": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[0]?.[5] || "."
			break
		}
		case "30": {
			const isOnline = isOnlines[since_2022_01_17("w") % 2]?.[(since_2022_01_17("d") + 1) % 7 + 1]?.[1]
			p[i].innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`
			break
		}
		case "40": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[1]?.[1] || "."
			break
		}
		case "41": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[1]?.[2] || "."
			break
		}
		case "42": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[1]?.[3] || "."
			break
		}
		case "43": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[1]?.[4] || "."
			break
		}
		case "44": {
			p[i].innerHTML = tkb[date.getDay() + 1]?.[1]?.[5] || "."
			break
		}
		case "50": {
			p[i].innerHTML = `Thứ ${date.getDay() + 2}`
			break
		}
		case "60": {
			const isOnline =
				isOnlines[since_2022_01_17("w", new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)) % 2]
					?.[(since_2022_01_17("d") + 2) % 7 + 1]?.[0]
			p[i].innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`
			break
		}
		case "70": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[0]?.[1] || "."
			break
		}
		case "71": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[0]?.[2] || "."
			break
		}
		case "72": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[0]?.[3] || "."
			break
		}
		case "73": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[0]?.[4] || "."
			break
		}
		case "74": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[0]?.[5] || "."
			break
		}
		case "80": {
			const isOnline =
				isOnlines[since_2022_01_17("w", new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)) % 2]
					?.[(since_2022_01_17("d") + 2) % 7 + 1]?.[1]
			p[i].innerHTML = `${isOnline === undefined ? "." : isOnline ? "Online" : "Offline"}`
			break
		}
		case "90": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[1]?.[1] || "."
			break
		}
		case "91": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[1]?.[2] || "."
			break
		}
		case "92": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[1]?.[3] || "."
			break
		}
		case "93": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[1]?.[4] || "."
			break
		}
		case "94": {
			p[i].innerHTML = tkb[date.getDay() + 2]?.[1]?.[5] || "."
			break
		}
	}
}
export {}

function since_2022_01_17(type: "w" | "d", d: Date = date): number {
	switch (type) {
		case "w":
			return Math.floor((d.getTime() - new Date(2022, 0, 17).getTime()) / ms("w"))
		case "d":
			return Math.floor((d.getTime() - new Date(2022, 0, 17).getTime()) / ms("d"))
	}
}

function ms(raw: "w" | "d") {
	const s = 1000, m = 60 * s, h = 60 * m, d = 24 * h, w = 7 * d
	switch (raw) {
		case "d":
			return d
		case "w":
			return w
	}
}

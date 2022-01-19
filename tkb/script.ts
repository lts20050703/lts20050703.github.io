const paragraphs = document.getElementsByTagName("p")

const bool = Math.floor((new Date().getTime() - new Date().getTime()) / (7 * 24 * 60 * 60 * 1000)) % 2 == 1

const green = "#0f0", red = "#f00"

for (let i = 0; i < paragraphs.length; i++) {
	const p = paragraphs[i]
	if (!p) continue
	switch (p.className) {
		case "s2":
			p.style.color = bool ? red : green
			break
		case "c2":
			p.style.color = bool ? green : red
			break
		case "s3":
			p.style.color = bool ? red : green
			break
		case "s4":
			p.style.color = bool ? green : red
			break
		case "c4":
			p.style.color = bool ? red : green
			break
		case "s5":
			p.style.color = bool ? green : red
			break
		case "s6":
			p.style.color = bool ? red : green
			break
		case "c6":
			p.style.color = bool ? green : red
			break
		case "s7":
			p.style.color = bool ? red : green
			break
	}
}

export {}

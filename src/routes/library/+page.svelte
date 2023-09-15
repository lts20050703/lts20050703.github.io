<script lang="ts">
	import v from "$lib/v"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"

	let mounted = false
	let input = ""
	let output = ""
	const vowel_to_number: Record<string, string> = {
		a: "100",
		ac: "101",
		ach: "102",
		ai: "103",
		am: "104",
		an: "105",
		ang: "106",
		anh: "107",
		ao: "108",
		ap: "109",
		at: "110",
		au: "111",
		ay: "112",
		ăc: "113",
		ăm: "114",
		ăn: "115",
		ăng: "116",
		áp: "117",
		ăt: "118",
		âc: "119",
		âm: "120",
		ân: "121",
		âng: "122",
		âp: "123",
		ât: "124",
		âu: "125",
		ây: "126",
		e: "200",
		ec: "201",
		em: "202",
		en: "203",
		eng: "204",
		eo: "205",
		ep: "206",
		et: "207",
		ê: "250",
		êc: "251",
		êch: "252",
		êm: "253",
		ên: "254",
		êng: "255",
		ênh: "256",
		êp: "257",
		êt: "258",
		êu: "259",
		i: "300",
		ia: "301",
		ich: "302",
		iec: "303",
		iêm: "304",
		iêt: "308",
		iêu: "309",
		im: "310",
		in: "311",
		inh: "312",
		ip: "313",
		it: "314",
		iu: "315",
		o: "400",
		oa: "401",
		oac: "402",
		oach: "403",
		oai: "404",
		oam: "405",
		oan: "406",
		oang: "407",
		oanh: "408",
		oao: "409",
		oap: "410",
		oat: "411",
		oay: "412",
		oăc: "413",
		oăm: "414",
		oăn: "415",
		oăng: "416",
		oăp: "417",
		oăt: "418",
		oc: "419",
		oe: "420",
		oec: "421",
		oem: "422",
		oen: "423",
		oeng: "424",
		oeo: "425",
		oep: "426",
		oet: "427",
		oi: "428",
		om: "429",
		on: "430",
		ong: "431",
		ooc: "432",
		oong: "433",
		op: "434",
		ot: "435",
		ô: "450",
		ôc: "451",
		ôi: "452",
		ôm: "453",
		ôn: "454",
		ông: "455",
		ôông: "456",
		ôp: "457",
		ôt: "458",
		ơ: "460",
		ơc: "461",
		ơi: "462",
		ơm: "463",
		ơn: "464",
		ơng: "465",
		ơp: "466",
		ơt: "467",
		u: "500",
		ua: "501",
		uân: "502",
		uâng: "503",
		uât: "504",
		uây: "505",
		uc: "506",
		uê: "507",
		uêch: "508",
		uênh: "509",
		ui: "510",
		um: "511",
		un: "512",
		ung: "513",
		uôc: "514",
		uôi: "515",
		uôm: "516",
		uôn: "517",
		uông: "518",
		uôt: "519",
		uơ: "520",
		up: "521",
		ut: "523",
		uy: "524",
		uya: "525",
		uyêch: "526",
		uyên: "527",
		uyêt: "528",
		uym: "529",
		uyn: "530",
		uynh: "531",
		uyp: "532",
		uyt: "533",
		ư: "550",
		ưa: "551",
		ưc: "552",
		ưi: "553",
		ưm: "554",
		ưn: "555",
		ưng: "556",
		ươc: "557",
		ươi: "558",
		ươm: "559",
		ươn: "560",
		ương: "561",
		ươp: "562",
		ươt: "563",
		ươu: "564",
		ưt: "565",
		ưu: "566",
		y: "600",
		ych: "601",
		yêm: "602",
		yên: "603",
		yêng: "604",
		yêt: "605",
		yêu: "606",
		ym: "607",
		yn: "608",
		ynh: "609",
		yp: "610"
	}

	const remove_diacritics_1: Record<string, string> = {
		á: "a",
		à: "a",
		ả: "a",
		ã: "a",
		ạ: "a",
		ắ: "ă",
		ằ: "ă",
		ẳ: "ă",
		ẵ: "ă",
		ặ: "ă",
		ấ: "â",
		ầ: "â",
		ẩ: "â",
		ẫ: "â",
		ậ: "â",
		é: "e",
		è: "e",
		ẻ: "e",
		ẽ: "e",
		ẹ: "e",
		ế: "ê",
		ề: "ê",
		ể: "ê",
		ễ: "ê",
		ệ: "ê",
		í: "i",
		ì: "i",
		ỉ: "i",
		ĩ: "i",
		ị: "i",
		ó: "o",
		ò: "o",
		ỏ: "o",
		õ: "o",
		ọ: "o",
		ố: "ô",
		ồ: "ô",
		ổ: "ô",
		ỗ: "ô",
		ộ: "ô",
		ớ: "ơ",
		ờ: "ơ",
		ở: "ơ",
		ỡ: "ơ",
		ợ: "ơ",
		ú: "u",
		ù: "u",
		ủ: "u",
		ũ: "u",
		ụ: "u",
		ứ: "ư",
		ừ: "ư",
		ử: "ư",
		ữ: "ư",
		ự: "ư",
		ý: "y",
		ỳ: "y",
		ỷ: "y",
		ỹ: "y",
		ỵ: "y"
	}

	const remove_diacritics_2: Record<string, string> = {
		ă: "a",
		â: "a",
		đ: "d",
		ê: "e",
		ô: "o",
		ơ: "o",
		ư: "u"
	}

	function update() {
		if (mounted) localStorage.setItem("library", input)
		const arr = input.split("\n")
		output = ""
		arr.forEach((line) => {
			if (line === "") return
			const first_word = line.toLowerCase().split(" ")[0]
			if (["gi", "gim", "gin", "ginh", "gip", "git"].includes(first_word)) {
				output += {
					gi: "gi300",
					gim: "gi310",
					gin: "gi311",
					ginh: "gi312",
					gip: "gi313",
					git: "gi314"
				}[first_word]
			} else if (first_word.startsWith("qu")) {
				output += "qu" + vowel_to_number[first_word.slice(2)]
			} else {
				for (let i = 0; i < first_word.length; i += 1) {
					if (vowel_to_number[first_word.slice(i)]) {
						if (i === 0) output += first_word[0]
						else output += first_word.slice(0, i)
						output += vowel_to_number[first_word.slice(i)]
						break
					}

					let _first_word = first_word

					for (let i = 0; i < _first_word.length; i += 1) {
						const char = remove_diacritics_1[_first_word[i]]
						if (char) _first_word = _first_word.slice(0, i) + char + _first_word.slice(i + 1)
					}

					if (vowel_to_number[_first_word.slice(i)]) {
						if (i === 0) output += _first_word[0]
						else output += _first_word.slice(0, i)
						output += vowel_to_number[_first_word.slice(i)]
						break
					}

					for (let i = 0; i < _first_word.length; i += 1) {
						const char = remove_diacritics_2[_first_word[i]]
						if (char) _first_word = _first_word.slice(0, i) + char + _first_word.slice(i + 1)
					}

					if (vowel_to_number[_first_word.slice(i)]) {
						if (i === 0) output += _first_word[0]
						else output += _first_word.slice(0, i)
						output += vowel_to_number[_first_word.slice(i)]
						break
					}
				}
			}

			const second_word = line.toLowerCase().split(" ")[1]
			if (!second_word) {
				output += "\n"
				return
			}

			if (["gi", "gim", "gin", "ginh", "gip", "git"].includes(second_word)) {
				output += "gi"
			} else if (second_word.startsWith("qu")) {
				output += "qu"
			} else {
				for (let i = 0; i < second_word.length; i += 1) {
					if (vowel_to_number[second_word.slice(i)]) {
						if (i === 0) output += second_word[0]
						else output += second_word.slice(0, i)
						break
					}

					let _second_word = second_word

					for (let i = 0; i < _second_word.length; i += 1) {
						const char = remove_diacritics_1[_second_word[i]]
						if (char) _second_word = _second_word.slice(0, i) + char + _second_word.slice(i + 1)
					}

					if (vowel_to_number[_second_word.slice(i)]) {
						if (i === 0) output += _second_word[0]
						else output += _second_word.slice(0, i)
						break
					}

					for (let i = 0; i < _second_word.length; i += 1) {
						const char = remove_diacritics_2[_second_word[i]]
						if (char) _second_word = _second_word.slice(0, i) + char + _second_word.slice(i + 1)
					}

					if (vowel_to_number[_second_word.slice(i)]) {
						if (i === 0) output += _second_word[0]
						else output += _second_word.slice(0, i)
						break
					}
				}
			}

			output += "\n"
		})

		output = output.toUpperCase()
	}

	onMount(() => {
		themeChange(false)

		mounted = true
		input = localStorage.getItem("library") ?? ""
		update()
	})
</script>

<svelte:head>
	<title>LTS20050703 / Library {v}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="m-1 rounded-md bg-base-100 p-1">
		Chủ đề: <select class="select select-primary select-sm" data-choose-theme>
			<option value="">Hệ thống</option>
			<option value="dark">Tối</option>
			<option value="light">Sáng</option>
		</select>
	</div>

	<textarea
		class="textarea textarea-primary"
		bind:value={input}
		on:keydown={update}
		cols="100"
		rows="10"
		placeholder="Tên sách (mỗi dòng 1 tên sách)"
	/>
	<textarea
		placeholder="Mã hóa sách (mỗi dòng 1 sách)"
		class="textarea textarea-primary"
		readonly
		value={output}
		cols="100"
		rows="10"
	/>
</div>

<a href="/projects" class="btn btn-primary absolute left-0 top-0 m-4">Quay lại</a>

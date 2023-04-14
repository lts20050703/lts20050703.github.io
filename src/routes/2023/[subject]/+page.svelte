<script lang="ts">
	export let data: PageData
	import type { PageData } from "./$types"
</script>

<svelte:head
	><title>
		In Real Xperience / 2023 / {data.subject[0].toUpperCase() + data.subject.slice(1)}</title
	></svelte:head
>

<div class="absolute top-0 left-0 right-0 flex items-center flex-col p-4">
	<div class="text-black dark:text-white leading-loose w-full">
		<div class="text-center text-3xl font-bold mb-6 mt-12">
			In Real Xperience / 2023 / {data.subject[0].toUpperCase() + data.subject.slice(1)}
		</div>
		<div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{#if data.subject === "sinh"}
				<a href="./24" class="btn btn-primary">BÀI 24 CÁC BẰNG CHỨNG TIẾN HÓA</a>
				<a href="./3536" class="btn btn-primary">BÀI 35 36</a>
				<a href="./3738" class="btn btn-primary"
					>BÀI 37 38 CÁC ĐẶC TRƯNG CƠ BẢN CỦA QUẦN THỂ SINH VẬT</a
				>
				<a href="./39" class="btn btn-primary"
					>BÀI 39 BIẾN ĐỘNG SỐ LƯỢNG CÁ THỂ CỦA QUẦN THỂ SINH VẬT</a
				>
				<a href="./40" class="btn btn-primary">BÀI 40 QUẦN XÃ SINH VẬT VÀ MỘT SỐ ĐẶC TRƯNG</a>
				<a href="./24353637383940" class="btn btn-primary">BÀI 24 35 36 37 38 39 40</a>
			{:else if data.subject === "gdcd"}
				<a href="./6" class="btn btn-primary">BÀI 6 CÔNG DÂN VỚI CÁC QUYỀN TỰ DO CƠ BẢN </a>
				<a href="./7" class="btn btn-primary">BÀI 7 CÔNG DÂN VỚI CÁC QUYỀN DÂN CHỦ </a>
				<a href="./8" class="btn btn-primary">BÀI 8 PHÁP LUẬT VỚI SỰ PHÁT TRIỂN CỦA CÔNG DÂN </a>
				<a href="./9" class="btn btn-primary"
					>BÀI 9 PHÁP LUẬT VỚI SỰ PHÁT TRIỂN BỀN VỮNG CỦA ĐẤT NƯỚC</a
				>
				<a href="./6789" class="btn btn-primary">BÀI 6 7 8 9</a>
			{/if}
		</div>
	</div>
</div>

<a href="../" class="absolute btn btn-primary m-4">Quay lại</a>

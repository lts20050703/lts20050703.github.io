<script lang="ts">
	export let data: PageData
	import type { PageData } from "./$types"
</script>

<a href="../" class="btn btn-primary m-4">Back</a>
<div class="w-full text-black dark:text-white flex flex-col items-center gap-4">
	{#if data.subject === "sinh"}
		<a href="./24" class="btn btn-primary">BÀI 24 CÁC BẰNG CHỨNG TIẾN HÓA</a>
		<a href="./3536" class="btn btn-primary">BÀI 35 36</a>
		<a href="./3738" class="btn btn-primary">BÀI 37 38 CÁC ĐẶC TRƯNG CƠ BẢN CỦA QUẦN THỂ SINH VẬT</a
		>
		<a href="./39" class="btn btn-primary">BÀI 39 BIẾN ĐỘNG SỐ LƯỢNG CÁ THỂ CỦA QUẦN THỂ SINH VẬT</a
		>
		<a href="./40" class="btn btn-primary">BÀI 40 QUẦN XÃ SINH VẬT VÀ MỘT SỐ ĐẶC TRƯNG</a>
		<a href="./24353637383940" class="btn btn-primary">BÀI 24 35 36 37 38 39 40</a>
	{:else if data.subject === "gdcd"}
		<a href="./6" class="btn btn-primary">BÀI 6 CÔNG DÂN VỚI CÁC QUYỀN TỰ DO CƠ BẢN </a>
	{/if}
</div>

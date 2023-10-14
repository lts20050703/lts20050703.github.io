export async function load({ url }) {
	const start_hours = url.searchParams.get("start_hours")
	const start_minutes = url.searchParams.get("start_minutes")
	const start_seconds = url.searchParams.get("start_seconds")
	const time_hours = url.searchParams.get("time_hours")
	const time_minutes = url.searchParams.get("time_minutes")
	const time_seconds = url.searchParams.get("time_seconds")
	return {
		countdown:
			start_hours && start_minutes && start_seconds && time_hours && time_minutes && time_seconds,
		start: {
			hours: parseInt(start_hours ?? ""),
			minutes: parseInt(start_minutes ?? ""),
			seconds: parseInt(start_seconds ?? "")
		},
		time: {
			hours: parseInt(time_hours ?? ""),
			minutes: parseInt(time_minutes ?? ""),
			seconds: parseInt(time_seconds ?? "")
		}
	}
}

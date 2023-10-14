export async function load({ params }) {
	return {
		start: {
			hours: parseInt(params.start_hours),
			minutes: parseInt(params.start_minutes),
			seconds: parseInt(params.start_seconds)
		},
		time: {
			hours: parseInt(params.time_hours),
			minutes: parseInt(params.time_minutes),
			seconds: parseInt(params.time_seconds)
		}
	}
}

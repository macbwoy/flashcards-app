import { AsyncStorage } from "react-native"
import { Permissions, Notifications } from "expo"

function createNotification() {
	return {
		title: "FlashCards",
		body: "Check for today's flashcards",
		ios: {
			sound: true
		},
		android: {
			sound: true,
			priority: "high",
			sticky: false,
			vibrate: true
		}
	}
}

export default async function setLocalNotification() {
	try {
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
		if (status === "granted") {
			await Notifications.cancelAllScheduledNotificationsAsync()

			let today = new Date()
			today.setDate(today.getDate())
			today.setHours(20)
			today.setMinutes(0)

			await Notifications.scheduleLocalNotificationAsync(createNotification(), {
				time: today,
				repeat: "day"
			})
		}
	} catch (error) {
		console.warn(error)
	}
}

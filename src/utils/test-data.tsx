import { ListItems } from '../App';

export const TEST_DATA: ListItems = {
	list_name: "Testing Data",
	list_data: [{
		title: "Thing to do",
		description: "How to do it",
		location: "The first place",
		due_date: new Date(),
		time_estimate: { amount: 2, unit: 'hrs' },
		attachments: null,
		priority: 'Essential',
		subtasks: [{
			title: "This is a subtask",
			description: "Now I am describing the subtask",
			completed: false,
			children: [{
				title: "This is the subtask of a subtask",
				description: "subtask-ception!",
				completed: false,
				children: null
			}]
		}, {
			title: "This is another subtask, at the first layer",
			description: "Is it working?",
			completed: false,
			children: null
		}],
	}, {
		title: "Another thing to do",
		description: "Another way to do it",
		location: "The second place",
		due_date: { start_time: new Date(), end_time: new Date() },
		time_estimate: { amount: 30, unit: 'mins' },
		attachments: "Here's an attachment, for example",
		priority: 'Optional',
		subtasks: null,
	}]
}
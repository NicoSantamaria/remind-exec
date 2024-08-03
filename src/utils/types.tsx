type Priority = 'Essential' | 'Important' | 'Optional';

type TimeEstimate = { 
    amount: number, 
    time_unit: 'hrs' | 'mins',
};

type TimePeriod = { 
    start_time: Date,
    end_time: Date,
};

export type ListItems = { 
    list_name: string, 
    list_data: ListData[],
};

export type Subtask = {
	title: string,
	description: string | null,
	completed: boolean,
	children: Subtask[] | null,
};

export type ListData = {
	title: string,
	description: string | null,
	location: string | null,
	due_date: Date | TimePeriod | null,
	time_estimate: TimeEstimate | null,
	attachments: any | null,
	priority: Priority,
	subtasks: Subtask[] | null,
};
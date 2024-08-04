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
	parent_id: number
    list_name: string,
	description: string | null,
	location: string | null,
	time_estimate: TimeEstimate,
	attachments: string | null,
	priority: Priority,
    single_date: Date | null,
    time_period: TimePeriod | null,
};
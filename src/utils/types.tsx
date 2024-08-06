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
    id: number,
    list_name: string, 
    list_data: ListData[],
};

export type TaskType = {
    id: number,
    user_id: number,
    parent_id: number,
	title: string,
	description: string | null,
	completed: boolean,
};

export type ListData = {
    id: number,
    user_id: number,
    parent_id: number,
    title: string,
    description: string | null,
    location: string | null,
    time_estimate: TimeEstimate,
    attachments: any | null,
    priority: Priority,
    single_date: Date | null,
    time_period: TimePeriod | null
};
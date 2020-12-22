
export class DailyStatus {
    length: number;
    statuses: Daily[];
}

export class Daily {
    daily_status_id: number;
    created_date: string;
    allowed_devices: number;
    blocked_devices: number;
    unknown_devices: number;
    total_events: number;
    common_event: string;
    total_faults: number;
    common_fault: string;
}
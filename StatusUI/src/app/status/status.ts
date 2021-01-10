
export class Statuses {
    length: number;
    status: Status[];
}

export class Status {
    status_id: string;
    created_date: string;
    motion_detected: string;
    access_granted: string;
    access_denied: string;
    last_fault: string;
    last_user: string;
    cpu_temp: number;
    cpu_usage: number;
    memory: number;
}
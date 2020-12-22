
export class Statuses {
    length: number;
    status: Status[];
}

export class Status {
    created_date: string;
    status_id: string;
    motion_detected: string;
    access_granted: string;
    access_denied: string;
    last_fault: string;
    last_user: string;
    cpu_temp: number;
    cpu_usage: number;
    memory: number;
}
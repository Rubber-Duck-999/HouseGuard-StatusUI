
export class Hardwares {
    length: number;
    hardware: Hardware[];
}

export class Hardware {
    hardware_id: string;
    created_time: string;
    cpu_temp: number;
    cpu_usage: number;
    memory: number;
}
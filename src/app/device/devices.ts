
export class Devices {
    length: number;
    device: Device[];
}

export class Device {
    device_id: string;
    created_date: string;
    allowed_devices: number;
    blocked_devices: number;
    unknown_devices: number;
}
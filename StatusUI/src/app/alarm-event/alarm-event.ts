
export class AlarmEvent {
    length: number;
    events: Event[];
}

export class Event {
    user: string;
    state: string;
    created_time: string;
    event_id: number;
}
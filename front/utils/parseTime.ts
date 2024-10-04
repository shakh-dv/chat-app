import moment from 'moment';

export function parseTime(time: string): { hour: number, minute: number } {
    const [hour, minute] = time.split(':');
    return {hour: parseInt(hour), minute: parseInt(minute)};
}

export function parseToMinutes(time: string): number {
    const [hour, minute] = time.split(':');
    return parseInt(hour) * 60 + parseInt(minute);
}

export function minutesToStr(minutes: number): string {
    return `${Math.floor(minutes / 60)}:${minutes % 60}`;
}

export function minutesToLT(minutes: number, locale?: string): string {
    return moment().set({hour: Math.floor(minutes / 60), minute: minutes % 60}).locale(locale || 'ru').format('LT');
}

export function formatTime(time: string, locale?: string): string {
    return moment().set(parseTime(time)).locale(locale || 'ru').format('LT');
}

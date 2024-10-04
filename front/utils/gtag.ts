declare global {
    interface Window {
        dataLayer?: any[];
    }
}

export function gtag(event: string, ...params: any[]) {
    const dataLayer = window.dataLayer || [];
    dataLayer.push({ event, ...params });
}
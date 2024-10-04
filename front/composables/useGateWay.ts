import { queryToString, type ServiceResponse, serviceResponse, useToken } from '~/composables/useService';
import type { Query } from '~/types/generics';


export const useGateWay = (service: string, meta?: { auth?: boolean }) => {
    const headers: Record<string, string> = (meta || {}).auth ? { 'Authorization': `Bearer ${useToken()}` } : {};
    const _url = useGateWayUrl() + (service[0] === '/' ? service : '/' + service);
    return {
        get<T extends object = any>(id: string): ServiceResponse<T> {
            const fullUrl = _url + `/${id}`;
            return serviceResponse($fetch<T>(fullUrl, { method: 'GET', headers }));
        },
        find<T extends object = any, V = any>(query?: Query<V>): ServiceResponse<T> {
            let fullUrl = _url;
            if (query) {
                fullUrl += '?' + queryToString(query);
            }
            return serviceResponse($fetch<T>(fullUrl, { method: 'GET', headers }));
        },
        create<T extends object = any>(data: any): ServiceResponse<T> {
            return serviceResponse($fetch<T>(_url, { method: 'POST', body: data, headers }));
        },
        patch<T extends object = any>(id: string, data: any): ServiceResponse<T> {
            return serviceResponse($fetch<T>(
                _url + `/${id}`,
                { method: 'PATCH', body: data, headers },
            ));
        },
        remove<T extends object = any>(id: string | number): ServiceResponse<T> {
            return serviceResponse($fetch<T>(
                _url + `/${id}`,
                { method: 'DELETE', headers }),
            );
        },
    };
};

export function useBilling(service: string) {
    const headers = { 'Authorization': `Bearer ${useToken()}` };
    const _url = useBillingUrl() + (service[0] === '/' ? service : '/' + service);
    return {
        get<T extends object = any>(id: string): ServiceResponse<T> {
            const fullUrl = _url + `/${id}`;
            return serviceResponse($fetch<T>(fullUrl, { method: 'GET', headers }));
        },
        find<T extends object = any, V = any>(query?: Query<V>): ServiceResponse<T> {
            let fullUrl = _url;
            if (query) {
                fullUrl += '?' + queryToString(query);
            }
            return serviceResponse($fetch<T>(fullUrl, { method: 'GET', headers }));
        },
        create<T extends object = any>(data: any): ServiceResponse<T> {
            return serviceResponse($fetch<T>(_url, { method: 'POST', body: data, headers }));
        },
        patch<T extends object = any>(id: string, data: any): ServiceResponse<T> {
            return serviceResponse($fetch<T>(
                _url + `/${id}`,
                { method: 'PATCH', body: data, headers },
            ));
        },
        remove<T extends object = any>(id: string): ServiceResponse<T> {
            return serviceResponse($fetch<T>(
                _url + `/${id}`,
                { method: 'DELETE', headers }),
            );
        },
    };
}

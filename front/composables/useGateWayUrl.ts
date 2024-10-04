export function useApiUrl() {
    return useRuntimeConfig().public.apiUrl;
}

export function useBillingUrl() {
    return useRuntimeConfig().public.billingUrl;
}

export function useGateWayUrl() {
    return useRuntimeConfig().public.gateWayUrl;
}

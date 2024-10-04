import { type Ref,ref } from 'vue';

export function useAsync<T>(initialData: Partial<T> | null = null) {
    const isLoading = ref(false);
    const isLoadingMap = reactive<Record<string | number, boolean>>({});
    const data = ref<Partial<T> | null>(initialData) as Ref<T>;
    const error = ref<any>(null);

    const run = async (promise: Promise<T>, transform = (data: T) => data) => {
        isLoading.value = true;
        try {
            const result = await promise;
            data.value = transform(result);
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    const runAsync = async (promise: Promise<T>) => {
        isLoading.value = true;
        try {
            const result = await promise;
            data.value = result;
            return data.value;
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            isLoading.value = false;
        }
    };

    const runWithId = async (promise: Promise<T>, id: string | number) => {
        isLoading.value = true;
        isLoadingMap[id] = true;
        try {
            const result = await promise;
            data.value = result;
            return data.value;
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            isLoading.value = false;
            isLoadingMap[id] = false;
            delete isLoadingMap[id];
        }
    };

    return { run, isLoading, error, data, runAsync, runWithId, isLoadingMap };
}
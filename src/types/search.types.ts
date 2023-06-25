
export type SearcgAutoComplete = {
    term:string
}
export interface SearchState {
    loading: boolean;
    search: string;
    error: boolean;
    searchAutoComplete: SearcgAutoComplete[];
    canOpenAutoComplete: boolean;
}
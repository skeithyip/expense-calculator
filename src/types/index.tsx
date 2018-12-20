// src/types/index.tsx

export interface StoreState {
  readonly languageName: string;
  readonly enthusiasmLevel: number;
}

export interface GenericStoreState<T> {
  byId: { [uuid: string]: T };
  allIds: string[];
}

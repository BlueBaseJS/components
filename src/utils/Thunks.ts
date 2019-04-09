/**
 * A thunk is function that wraps an expression to delay its evaluation.
 */
export type Thunk<T> = (...params: any[]) => T;

/**
 * An object that may or may not be a Thunk
 */
export type MaybeThunk<T> = T | Thunk<T>;

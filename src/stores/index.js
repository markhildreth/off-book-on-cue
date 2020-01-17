import { produce } from "immer";
import { writable } from "svelte/store";

import { plays } from "./plays";
import { appState } from "./app_state";
import { history } from "./history";

export const loading = writable(true);
export { plays, appState, history };

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { requestUsage } from "../requests";

export interface UpdateStore {
  used?: number;
  subscription?: number;
  lastUpdateUsage: number;
  updateUsage: (force?: boolean) => Promise<void>;
}

export const UPDATE_KEY = "chat-update";

const ONE_MINUTE = 60 * 1000;

export const useUpdateStore = create<UpdateStore>()(
  persist(
    (set, get) => ({
      lastUpdateUsage: 0,

      async updateUsage(force = false) {
        const overOneMinute = Date.now() - get().lastUpdateUsage >= ONE_MINUTE;
        if (!overOneMinute && !force) return;

        set(() => ({
          lastUpdateUsage: Date.now(),
        }));

        const usage = await requestUsage();

        if (usage) {
          set(() => usage);
        }
      },
    }),
    {
      name: UPDATE_KEY,
      version: 1,
    },
  ),
);

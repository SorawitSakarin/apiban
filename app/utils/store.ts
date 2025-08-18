'use client';
import { create } from 'zustand';

interface ActiveOrg {
  orgId: string;
  setOrgId: (setOrgId: string) => void;
  branchId: number;
  setBranchId: (branchId: number) => void;
  shopId: number;
  setShopId: (shopId: number) => void;
  activeOrg: number;
  setActiveOrg: (activeOrg: number) => void;
  leavePage: boolean;
  setLeavePage: (leavePage: boolean) => void;
  leavePageUrl: string;
  setLeavePageUrl: (leavePageUrl: string) => void;
  storesHaveEatery: { id: number; name: string }[];
  setStoresHaveEatery: (
    storesHaveEatery: { id: number; name: string }[],
  ) => void;
}

export const useActiveOrgStore = create<ActiveOrg>((set) => ({
  orgId: '',
  setOrgId: (orgId: string) => set({ orgId }),
  branchId: -1,
  setBranchId: (branchId: number) => {
    set({ branchId });
    try {
      sessionStorage.setItem('selectedBranchId', String(branchId));
    } catch (error) {
      console.error('Error persisting branch ID:', error);
    }
  },
  shopId: -1,
  setShopId: (shopId: number) => {
    set({ shopId });
    try {
      sessionStorage.setItem('selectedShopId', String(shopId));
    } catch (error) {
      console.error('Error persisting shop ID:', error);
    }
  },
  activeOrg: 0,
  setActiveOrg: (activeOrg: number) => set({ activeOrg }),
  leavePage: false,
  setLeavePage: (leavePage: boolean) => set({ leavePage }),
  leavePageUrl: '',
  setLeavePageUrl: (leavePageUrl: string) => set({ leavePageUrl }),
  storesHaveEatery: [],
  setStoresHaveEatery: (storesHaveEatery: { id: number; name: string }[]) =>
    set({ storesHaveEatery }),
}));

interface Language {
  language: "en" | "th";
  setLanguage: (language: "en" | "th") => void;
}

export const useLanguageStore = create<Language>((set) => ({
  language: 'en',
  setLanguage: (language: "en" | "th") => set({ language }),
}));

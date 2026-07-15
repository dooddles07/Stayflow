import { create } from 'zustand'

interface UiState {
  searchOpen: boolean
  setSearchOpen: (open: boolean) => void
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
}

export const useUiStore = create<UiState>((set) => ({
  searchOpen: false,
  setSearchOpen: (open) => set({ searchOpen: open }),
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
}))

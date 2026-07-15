import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileBarChart,
  LayoutDashboard,
  Megaphone,
  UserCircle,
  Users,
  UtensilsCrossed,
  Waves,
} from 'lucide-react'
import type { Portal } from '#/lib/hooks/use-portal-preference'

export interface NavItem {
  label: string
  to: string
  icon: LucideIcon
}

export const portalLabels: Record<Portal, string> = {
  member: 'Member',
  staff: 'Staff',
  management: 'Management',
}

export const navConfig: Record<Portal, NavItem[]> = {
  member: [
    { label: 'Dashboard', to: '/member', icon: LayoutDashboard },
    { label: 'Facilities', to: '/member/facilities', icon: Waves },
    { label: 'Dining', to: '/member/dining', icon: UtensilsCrossed },
    { label: 'Guests', to: '/member/guests', icon: Users },
    { label: 'Events', to: '/member/events', icon: CalendarDays },
    { label: 'Notices', to: '/member/notices', icon: Megaphone },
    { label: 'Profile', to: '/member/profile', icon: UserCircle },
  ],
  staff: [
    { label: 'Dashboard', to: '/staff', icon: LayoutDashboard },
    { label: 'Bookings', to: '/staff/bookings', icon: ClipboardList },
    { label: 'Guests', to: '/staff/guests', icon: CheckCircle2 },
    { label: 'Facilities', to: '/staff/facilities', icon: Waves },
    { label: 'Dining', to: '/staff/dining', icon: UtensilsCrossed },
    { label: 'Events', to: '/staff/events', icon: CalendarDays },
  ],
  management: [
    { label: 'Dashboard', to: '/management', icon: LayoutDashboard },
    { label: 'Analytics', to: '/management/analytics', icon: BarChart3 },
    { label: 'Users', to: '/management/users', icon: Users },
    { label: 'Facilities', to: '/management/facilities', icon: Building2 },
    { label: 'Restaurants', to: '/management/restaurants', icon: UtensilsCrossed },
    { label: 'Events', to: '/management/events', icon: CalendarDays },
    { label: 'Notices', to: '/management/notices', icon: Megaphone },
    { label: 'Reports', to: '/management/reports', icon: FileBarChart },
  ],
}

export const notificationIcon = Bell

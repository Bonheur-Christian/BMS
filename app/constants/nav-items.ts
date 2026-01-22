import { LayoutDashboard, Building2, Users, ClipboardList, BarChart3, Settings, LogOut, Menu } from 'lucide-react'

export const navItems = [
    {
        href: '/dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        href: '/dashboard/businesses',
        label: 'Businesses',
        icon: Building2,
    },
    {
        href: '/dashboard/workers',
        label: 'Workers',
        icon: Users,
    },
    {
        href: '/dashboard/work-assignments',
        label: 'Tasks',
        icon: ClipboardList,
    },
    {
        href: '/dashboard/analytics',
        label: 'Analytics',
        icon: BarChart3,
    },

]
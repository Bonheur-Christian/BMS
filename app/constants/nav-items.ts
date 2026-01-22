import { LayoutDashboard, Building2, Users, ClipboardList, BarChart3, Settings, LogOut, Menu } from 'lucide-react'

export const navItems = [
    {
        href: '/portal/business-owner/dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        href: '/portal/business-owner/businesses',
        label: 'Businesses',
        icon: Building2,
    },
    {
        href: '/portal/business-owner/workers',
        label: 'Workers',
        icon: Users,
    },
    {
        href: '/portal/business-owner/work-assignments',
        label: 'Tasks',
        icon: ClipboardList,
    },
    {
        href: '/portal/business-owner/analytics',
        label: 'Analytics',
        icon: BarChart3,
    },

]
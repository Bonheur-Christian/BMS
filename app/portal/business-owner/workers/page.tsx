'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Search, MoreVertical, CheckCircle, Clock, XCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState('')

    const teamMembers = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Owner/Admin',
            department: 'Executive',
            status: 'active',
            joinedDate: '2022-01-15',
            avatar: 'JD',
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'Engineering Lead',
            department: 'Engineering',
            status: 'active',
            joinedDate: '2023-03-20',
            avatar: 'SJ',
        },
        {
            id: 3,
            name: 'Mike Chen',
            email: 'mike@example.com',
            role: 'Marketing Manager',
            department: 'Marketing',
            status: 'active',
            joinedDate: '2023-06-10',
            avatar: 'MC',
        },
        {
            id: 4,
            name: 'Emma Davis',
            email: 'emma@example.com',
            role: 'Sales Director',
            department: 'Sales',
            status: 'pending',
            joinedDate: '2024-01-05',
            avatar: 'ED',
        },
        {
            id: 5,
            name: 'James Wilson',
            email: 'james@example.com',
            role: 'Operations Manager',
            department: 'Operations',
            status: 'inactive',
            joinedDate: '2023-02-28',
            avatar: 'JW',
        },
    ]

    const filteredMembers = teamMembers.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const StatusBadge = ({ status }: { status: string }) => {
        const config = {
            active: { icon: CheckCircle, bg: 'bg-primary/10', text: 'text-primary', label: 'Active' },
            pending: { icon: Clock, bg: 'bg-yellow-500/10', text: 'text-yellow-500', label: 'Pending' },
            inactive: { icon: XCircle, bg: 'bg-foreground/10', text: 'text-foreground/60', label: 'Inactive' },
        }
        const statusConfig = config[status as keyof typeof config]
        const Icon = statusConfig.icon
        return (
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.text}`}>
                <Icon className="w-3 h-3" />
                {statusConfig.label}
            </div>
        )
    }

    return (
        <div className="p-6 space-y-8 w-[95%] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">Team Members</h1>
                    <p className="text-foreground/60">Manage your team and permissions</p>
                </div>
                <Link href="workers/invite">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                        <Plus className="w-4 h-4" />
                        Invite Member
                    </Button>
                </Link>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                <Input
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card/50 border-border/50 text-foreground placeholder:text-foreground/40"
                />
            </div>

            {/* Team Stats */}
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Members', value: teamMembers.length, color: 'text-primary' },
                    { label: 'Active', value: teamMembers.filter(m => m.status === 'active').length, color: 'text-primary' },
                    { label: 'Pending', value: teamMembers.filter(m => m.status === 'pending').length, color: 'text-yellow-500' },
                ].map((stat, i) => (
                    <Card key={i} className="border-border/50 bg-card/50 backdrop-blur p-4">
                        <p className="text-sm text-foreground/60">{stat.label}</p>
                        <p className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                    </Card>
                ))}
            </div>

            {/* Team Members Table */}
            <Card className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b border-border/50 bg-foreground/5">
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-foreground/60">Member</th>
                                <th className="p-4 text-left text-sm font-semibold text-foreground/60">Email</th>
                                <th className="p-4 text-left text-sm font-semibold text-foreground/60">Role</th>
                                <th className="p-4 text-left text-sm font-semibold text-foreground/60">Department</th>
                                <th className="p-4 text-left text-sm font-semibold text-foreground/60">Status</th>
                                <th className="p-4 text-left text-sm font-semibold text-foreground/60">Joined</th>
                                <th className="p-4 text-right text-sm font-semibold text-foreground/60">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers.map((member) => (
                                <tr key={member.id} className="border-b border-border/50 last:border-0 hover:bg-foreground/5 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                                                {member.avatar}
                                            </div>
                                            <span className="font-medium text-foreground">{member.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-foreground/70 text-sm flex items-center gap-2">
                                        <Mail className="w-3 h-3" />
                                        {member.email}
                                    </td>
                                    <td className="p-4 text-foreground/70 text-sm">{member.role}</td>
                                    <td className="p-4 text-foreground/70 text-sm">{member.department}</td>
                                    <td className="p-4">
                                        <StatusBadge status={member.status} />
                                    </td>
                                    <td className="p-4 text-foreground/70 text-sm">{new Date(member.joinedDate).toLocaleDateString()}</td>
                                    <td className="p-4 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem className="cursor-pointer">View Profile</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">Edit Role</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">Change Department</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer text-destructive">Remove Member</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
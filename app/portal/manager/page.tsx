'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, AlertCircle, TrendingUp, CheckCircle, Clock, Plus, Eye } from 'lucide-react'
import Link from 'next/link'

export default function ManagerPortalPage() {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Senior Engineer',
            tasksAssigned: 3,
            completed: 8,
            inProgress: 2,
            performance: 92,
        },
        {
            name: 'Mike Chen',
            role: 'Marketing Manager',
            tasksAssigned: 5,
            completed: 15,
            inProgress: 3,
            performance: 88,
        },
        {
            name: 'Emma Davis',
            role: 'Sales Representative',
            tasksAssigned: 4,
            completed: 12,
            inProgress: 1,
            performance: 95,
        },
        {
            name: 'James Wilson',
            role: 'Operations Specialist',
            tasksAssigned: 2,
            completed: 6,
            inProgress: 0,
            performance: 78,
        },
    ]

    const recentActivity = [
        { type: 'task_completed', message: 'Sarah Johnson completed "API Documentation"', time: '1 hour ago' },
        { type: 'task_assigned', message: 'Assigned new task to Mike Chen', time: '3 hours ago' },
        { type: 'milestone', message: 'Team reached 50 completed tasks this month', time: '5 hours ago' },
        { type: 'alert', message: 'James Wilson has 1 overdue task', time: '6 hours ago' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-white font-bold text-sm">BMS</span>
                        </div>
                        <div>
                            <p className="font-bold text-foreground text-sm">Manager Portal</p>
                            <p className="text-xs text-foreground/60">John Doe</p>
                        </div>
                    </div>
                    <Link href="/dashboard/work-assignments/create">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                            <Plus className="w-4 h-4" />
                            Assign Task
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-20 pb-8 px-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Welcome Section */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold text-foreground">Team Dashboard 👨‍💼</h1>
                        <p className="text-foreground/60">Manage your team, track performance, and monitor progress</p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { label: 'Team Members', value: teamMembers.length, icon: Users, color: 'text-primary' },
                            { label: 'Active Tasks', value: 10, icon: Clock, color: 'text-yellow-500' },
                            { label: 'Completed', value: 41, icon: CheckCircle, color: 'text-primary' },
                            { label: 'Avg Performance', value: '88%', icon: TrendingUp, color: 'text-primary' },
                        ].map((metric, i) => {
                            const Icon = metric.icon
                            return (
                                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur p-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm text-foreground/60">{metric.label}</p>
                                            <p className={`text-3xl font-bold mt-2 ${metric.color}`}>{metric.value}</p>
                                        </div>
                                        <Icon className="w-6 h-6 opacity-50" />
                                    </div>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Team Performance */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Team Performance</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="border-b border-border/50">
                                    <tr>
                                        <th className="p-4 text-left text-sm font-semibold text-foreground/60">Member</th>
                                        <th className="p-4 text-left text-sm font-semibold text-foreground/60">Role</th>
                                        <th className="p-4 text-center text-sm font-semibold text-foreground/60">Assigned</th>
                                        <th className="p-4 text-center text-sm font-semibold text-foreground/60">Completed</th>
                                        <th className="p-4 text-center text-sm font-semibold text-foreground/60">In Progress</th>
                                        <th className="p-4 text-right text-sm font-semibold text-foreground/60">Performance</th>
                                        <th className="p-4 text-right text-sm font-semibold text-foreground/60">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teamMembers.map((member, idx) => (
                                        <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-foreground/5 transition-colors">
                                            <td className="p-4 font-medium text-foreground">{member.name}</td>
                                            <td className="p-4 text-foreground/70 text-sm">{member.role}</td>
                                            <td className="p-4 text-center text-foreground font-medium">{member.tasksAssigned}</td>
                                            <td className="p-4 text-center text-primary font-medium">{member.completed}</td>
                                            <td className="p-4 text-center text-yellow-500 font-medium">{member.inProgress}</td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <div className="w-16 h-2 rounded-full bg-foreground/10 overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-primary to-accent"
                                                            style={{ width: `${member.performance}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-foreground w-10 text-right">{member.performance}%</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-right">
                                                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* Recent Activity and Alerts */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Recent Activity */}
                        <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
                            <h3 className="text-lg font-bold text-foreground mb-6">Recent Activity</h3>
                            <div className="space-y-4">
                                {recentActivity.map((activity, i) => (
                                    <div key={i} className="flex gap-4 pb-4 border-b border-border/50 last:border-0">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <div className="flex-1">
                                            <p className="text-sm text-foreground">{activity.message}</p>
                                            <p className="text-xs text-foreground/50 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Alerts & Insights */}
                        <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
                            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-yellow-500" />
                                Alerts & Insights
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                    <p className="text-sm font-medium text-yellow-500 mb-1">⚠️ Overdue Tasks</p>
                                    <p className="text-xs text-foreground/70">1 task is overdue. Review with James Wilson.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                                    <p className="text-sm font-medium text-primary mb-1">✓ Team Goals</p>
                                    <p className="text-xs text-foreground/70">Team is on track to complete monthly targets.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                                    <p className="text-sm font-medium text-primary mb-1">⭐ Top Performer</p>
                                    <p className="text-xs text-foreground/70">Emma Davis has 95% performance rating this month.</p>
                                </div>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
                                    View Full Report
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

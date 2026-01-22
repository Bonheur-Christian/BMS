'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Search, MoreVertical, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Suspense } from 'react'
import Loading from './Loading'

export default function WorkAssignmentsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')

    const tasks = [
        {
            id: 1,
            title: 'Complete API Documentation',
            description: 'Write comprehensive documentation for the REST API endpoints',
            assignee: 'Sarah Johnson',
            status: 'in-progress',
            priority: 'high',
            dueDate: '2024-02-15',
            progress: 65,
        },
        {
            id: 2,
            title: 'Design Marketing Campaign',
            description: 'Create visual assets and copy for Q1 marketing campaign',
            assignee: 'Mike Chen',
            status: 'pending',
            priority: 'medium',
            dueDate: '2024-02-20',
            progress: 0,
        },
        {
            id: 3,
            title: 'Client Presentation Preparation',
            description: 'Prepare slides and talking points for upcoming client meeting',
            assignee: 'Emma Davis',
            status: 'completed',
            priority: 'high',
            dueDate: '2024-01-30',
            progress: 100,
        },
        {
            id: 4,
            title: 'System Infrastructure Upgrade',
            description: 'Upgrade server infrastructure to support increased traffic',
            assignee: 'James Wilson',
            status: 'in-progress',
            priority: 'critical',
            dueDate: '2024-02-10',
            progress: 45,
        },
        {
            id: 5,
            title: 'Q1 Budget Planning',
            description: 'Prepare detailed budget proposal for Q1 operations',
            assignee: 'John Doe',
            status: 'pending',
            priority: 'medium',
            dueDate: '2024-02-25',
            progress: 0,
        },
    ]

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = filterStatus === 'all' || task.status === filterStatus
        return matchesSearch && matchesStatus
    })

    const StatusIcon = ({ status }: { status: string }) => {
        const icons = {
            completed: <CheckCircle className="w-4 h-4 text-primary" />,
            'in-progress': <Clock className="w-4 h-4 text-yellow-500" />,
            pending: <AlertCircle className="w-4 h-4 text-foreground/50" />,
        }
        return icons[status as keyof typeof icons]
    }

    const PriorityBadge = ({ priority }: { priority: string }) => {
        const colors = {
            critical: 'bg-destructive/10 text-destructive',
            high: 'bg-yellow-500/10 text-yellow-500',
            medium: 'bg-primary/10 text-primary',
            low: 'bg-foreground/10 text-foreground/60',
        }
        return (
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${colors[priority as keyof typeof colors]}`}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </span>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="p-6 space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">Work Assignments</h1>
                        <p className="text-foreground/60">Manage tasks and track progress</p>
                    </div>
                    <Link href="/dashboard/work-assignments/create">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                            <Plus className="w-4 h-4" />
                            Create Task
                        </Button>
                    </Link>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <Input
                        placeholder="Search tasks or assignees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-card/50 border-border/50 text-foreground placeholder:text-foreground/40"
                    />
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { label: 'Total Tasks', value: tasks.length, color: 'text-primary' },
                        { label: 'In Progress', value: tasks.filter(t => t.status === 'in-progress').length, color: 'text-yellow-500' },
                        { label: 'Pending', value: tasks.filter(t => t.status === 'pending').length, color: 'text-foreground/60' },
                        { label: 'Completed', value: tasks.filter(t => t.status === 'completed').length, color: 'text-primary' },
                    ].map((stat, i) => (
                        <Card key={i} className="border-border/50 bg-card/50 backdrop-blur p-4">
                            <p className="text-sm text-foreground/60">{stat.label}</p>
                            <p className={`text-2xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                        </Card>
                    ))}
                </div>

                {/* Tabs */}
                <Tabs defaultValue="all" onValueChange={setFilterStatus}>
                    <TabsList className="grid w-full grid-cols-4 bg-card/50 border border-border/50 p-1">
                        <TabsTrigger value="all" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                            All Tasks
                        </TabsTrigger>
                        <TabsTrigger value="pending" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                            Pending
                        </TabsTrigger>
                        <TabsTrigger value="in-progress" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                            In Progress
                        </TabsTrigger>
                        <TabsTrigger value="completed" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                            Completed
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value={filterStatus} className="space-y-4 mt-6">
                        {filteredTasks.map((task) => (
                            <Card key={task.id} className="border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/30 transition-colors">
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <StatusIcon status={task.status} />
                                                <h3 className="text-lg font-bold text-foreground">{task.title}</h3>
                                            </div>
                                            <p className="text-sm text-foreground/60">{task.description}</p>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">Edit Task</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">Reassign</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer text-destructive">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-6">
                                            <div>
                                                <p className="text-xs text-foreground/60">Assigned to</p>
                                                <p className="text-sm font-medium text-foreground">{task.assignee}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-foreground/60">Due Date</p>
                                                <p className="text-sm font-medium text-foreground">{new Date(task.dueDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <PriorityBadge priority={task.priority} />
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 h-2 rounded-full bg-foreground/10 overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                                                        style={{ width: `${task.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-foreground/60 w-8">{task.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </TabsContent>
                </Tabs>
            </div>
        </Suspense>
    )
}

'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, Clock, AlertCircle, Eye, MapPin, Calendar, MessageSquare } from 'lucide-react'

export default function WorkerPortalPage() {
  const myTasks = [
    {
      id: 1,
      title: 'Complete API Documentation',
      status: 'in-progress',
      priority: 'high',
      assignedBy: 'John Doe',
      dueDate: '2024-02-15',
      progress: 65,
      description: 'Write comprehensive documentation for the REST API endpoints',
    },
    {
      id: 2,
      title: 'Code Review for Authentication Module',
      status: 'pending',
      priority: 'medium',
      assignedBy: 'John Doe',
      dueDate: '2024-02-20',
      progress: 0,
      description: 'Review and provide feedback on the new authentication implementation',
    },
    {
      id: 3,
      title: 'Fix Critical Bug in Payment Module',
      status: 'in-progress',
      priority: 'critical',
      assignedBy: 'John Doe',
      dueDate: '2024-02-10',
      progress: 85,
      description: 'Investigate and fix the payment processing error reported by users',
    },
  ]

  const StatusIndicator = ({ status }: { status: string }) => {
    const config = {
      pending: { icon: AlertCircle, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
      'in-progress': { icon: Clock, color: 'text-primary', bg: 'bg-primary/10' },
      completed: { icon: CheckCircle, color: 'text-primary', bg: 'bg-primary/10' },
    }
    const item = config[status as keyof typeof config]
    const Icon = item.icon
    return (
      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${item.bg} ${item.color}`}>
        <Icon className="w-3 h-3" />
        {status.replace('-', ' ').toUpperCase()}
      </div>
    )
  }

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
              <p className="font-bold text-foreground text-sm">Worker Portal</p>
              <p className="text-xs text-foreground/60">Sarah Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-border/50 text-foreground hover:bg-foreground/5 bg-transparent">
              Messages
            </Button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:opacity-80 transition">
              SJ
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Welcome, Sarah 👋</h1>
            <p className="text-foreground/60">Here are your assigned tasks and responsibilities</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'My Tasks', value: myTasks.length, icon: Clock },
              { label: 'In Progress', value: myTasks.filter(t => t.status === 'in-progress').length, icon: AlertCircle },
              { label: 'Completed', value: 12, icon: CheckCircle },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-foreground/60">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                    </div>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* My Tasks */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">My Tasks</h2>
            <div className="space-y-4">
              {myTasks.map((task) => (
                <Card key={task.id} className="border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="space-y-4">
                    {/* Task Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {task.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mt-1">{task.description}</p>
                      </div>
                      <StatusIndicator status={task.status} />
                    </div>

                    {/* Task Details */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Calendar className="w-4 h-4" />
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <MapPin className="w-4 h-4" />
                        Assigned by: {task.assignedBy}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/60 mb-1">Progress</p>
                        <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-border/50 text-foreground hover:bg-foreground/5 gap-2 bg-transparent">
                        <MessageSquare className="w-4 h-4" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <Card className="border-border/50 bg-card/50 backdrop-blur p-6 border-l-4 border-l-primary">
            <h3 className="font-bold text-foreground mb-3">Performance Tips</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>✓ Update task progress regularly to keep your team informed</li>
              <li>✓ Communicate any blockers or concerns with your manager</li>
              <li>✓ Review due dates and prioritize accordingly</li>
              <li>✓ Use comments to ask questions or provide updates</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

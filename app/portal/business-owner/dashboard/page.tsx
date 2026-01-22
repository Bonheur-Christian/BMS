'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TrendingUp, Users, Building2, ClipboardList, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    {
      label: 'Active Businesses',
      value: '3',
      icon: Building2,
      color: 'text-primary',
      trend: '+1 this month',
    },
    {
      label: 'Team Members',
      value: '24',
      icon: Users,
      color: 'text-accent',
      trend: '+5 this month',
    },
    {
      label: 'Pending Tasks',
      value: '8',
      icon: ClipboardList,
      color: 'text-primary',
      trend: '2 overdue',
    },
    {
      label: 'Revenue',
      value: '$45.2K',
      icon: TrendingUp,
      color: 'text-accent',
      trend: '+12% this month',
    },
  ]

  const recentActivities = [
    { type: 'team', title: 'Added Sarah Johnson to Tech Team', time: '2 hours ago' },
    { type: 'task', title: 'Completed Q4 Planning Review', time: '5 hours ago' },
    { type: 'business', title: 'Created new inventory system', time: '1 day ago' },
    { type: 'team', title: 'Updated role permissions for Managers', time: '2 days ago' },
  ]

  const quickActions = [
    {
      label: 'Create Business',
      description: 'Set up a new business entity',
      icon: Building2,
      href: '/dashboard/businesses/create',
    },
    {
      label: 'Add Team Member',
      description: 'Invite someone to your team',
      icon: Users,
      href: '/dashboard/team/invite',
    },
    {
      label: 'Assign Work',
      description: 'Create and assign new tasks',
      icon: ClipboardList,
      href: '/dashboard/work-assignments/create',
    },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Welcome, John 👋</h1>
        <p className="text-foreground/60">Here&apos;s what&apos;s happening with your businesses today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur p-6 space-y-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-foreground/60 font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs text-foreground/50">{stat.trend}</p>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link key={index} href={action.href}>
                <Card className="border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-semibold text-foreground">{action.label}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{action.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Recent Activity and Overview */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur p-6">
          <h2 className="text-lg font-bold text-foreground mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.title}</p>
                  <p className="text-xs text-foreground/50 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Overview Card */}
        <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
          <h2 className="text-lg font-bold text-foreground mb-6">Overview</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-foreground/60">Primary Business</p>
              <p className="font-semibold text-foreground">Tech Startup Inc</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-foreground/60">Your Role</p>
              <p className="font-semibold text-foreground">Owner/Admin</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-foreground/60">Members Online</p>
              <p className="font-semibold text-foreground">12 of 24</p>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              View All Businesses
            </Button>
          </div>
        </Card>
      </div>

      {/* Alerts Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur p-6 border-l-4 border-l-destructive">
        <div className="flex gap-4">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Pending Action Required</h3>
            <p className="text-sm text-foreground/60 mt-1">
              2 team members need to complete their onboarding. 3 tasks are overdue.
            </p>
            <Button variant="outline" className="mt-3 border-border/50 text-foreground hover:bg-foreground/5 bg-transparent" size="sm">
              Review Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

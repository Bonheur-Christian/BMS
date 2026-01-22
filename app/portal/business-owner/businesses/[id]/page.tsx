'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building2, Users, Settings, Edit, ArrowLeft, TrendingUp, BarChart3, Globe } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BusinessDetailPage() {
  const params = useParams()
  const businessId = params.id

  // Mock data
  const business = {
    name: 'Tech Startup Inc',
    industry: 'Software Development',
    website: 'https://techstartup.com',
    employees: 24,
    departments: 4,
    founded: 2022,
    location: 'San Francisco, CA, USA',
    description: 'Leading software development company specializing in cloud solutions',
    revenue: '$2.5M',
  }

  const departments = [
    { name: 'Engineering', members: 10, lead: 'Sarah Johnson' },
    { name: 'Marketing', members: 4, lead: 'Mike Chen' },
    { name: 'Sales', members: 6, lead: 'Emma Davis' },
    { name: 'Operations', members: 4, lead: 'James Wilson' },
  ]

  const teamMembers = [
    { name: 'John Doe', role: 'Owner/Admin', department: 'Executive', status: 'Active' },
    { name: 'Sarah Johnson', role: 'Engineering Lead', department: 'Engineering', status: 'Active' },
    { name: 'Mike Chen', role: 'Marketing Manager', department: 'Marketing', status: 'Active' },
    { name: 'Emma Davis', role: 'Sales Director', department: 'Sales', status: 'Active' },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Link href="/dashboard/businesses" className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Businesses
          </Link>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{business.name}</h1>
              <p className="text-foreground/60 mt-1">{business.industry}</p>
            </div>
          </div>
        </div>
        <Link href={`/dashboard/businesses/${businessId}/settings`}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </Link>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Employees', value: business.employees, icon: Users },
          { label: 'Departments', value: business.departments, icon: Building2 },
          { label: 'Founded', value: business.founded, icon: Globe },
          { label: 'Revenue', value: business.revenue, icon: TrendingUp },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i} className="border-border/50 bg-card/50 backdrop-blur p-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/60">{stat.label}</p>
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </Card>
          )
        })}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border/50 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Overview
          </TabsTrigger>
          <TabsTrigger value="departments" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Departments
          </TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Team
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60">Website</p>
                  <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    {business.website}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="text-foreground font-medium">{business.location}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-2">Description</p>
                <p className="text-foreground/70">{business.description}</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Departments Tab */}
        <TabsContent value="departments" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">Departments</h3>
            <Link href={`/dashboard/businesses/${businessId}/departments/create`}>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Add Department
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {departments.map((dept, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground">{dept.name}</h4>
                    <p className="text-sm text-foreground/60 mt-1">Led by {dept.lead}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{dept.members}</p>
                    <p className="text-xs text-foreground/60">Members</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">Team Members</h3>
            <Link href={`/dashboard/team/invite?business=${businessId}`}>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Add Member
              </Button>
            </Link>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border/50">
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-foreground/60">Name</th>
                    <th className="p-4 text-left text-sm font-semibold text-foreground/60">Role</th>
                    <th className="p-4 text-left text-sm font-semibold text-foreground/60">Department</th>
                    <th className="p-4 text-left text-sm font-semibold text-foreground/60">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr key={index} className="border-b border-border/50 last:border-0 hover:bg-foreground/5 transition-colors">
                      <td className="p-4 text-foreground font-medium">{member.name}</td>
                      <td className="p-4 text-foreground/70 text-sm">{member.role}</td>
                      <td className="p-4 text-foreground/70 text-sm">{member.department}</td>
                      <td className="p-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{member.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

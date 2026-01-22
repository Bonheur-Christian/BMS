'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CreateTaskPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'medium',
    dueDate: '',
    department: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const teamMembers = [
    'Sarah Johnson',
    'Mike Chen',
    'Emma Davis',
    'James Wilson',
    'John Doe',
  ]

  const departments = ['Engineering', 'Marketing', 'Sales', 'Operations']
  const priorities = ['low', 'medium', 'high', 'critical']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Redirect to tasks list
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <Link href="/dashboard/work-assignments" className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Tasks
        </Link>
        <h1 className="text-3xl font-bold text-foreground">Create New Task</h1>
        <p className="text-foreground/60">Assign work to your team members</p>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Title */}
          <div>
            <Label htmlFor="title" className="text-foreground">
              Task Title *
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter task title"
              className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the task in detail"
              className="mt-2 min-h-32 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
            />
          </div>

          {/* Grid for assignments */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Assignee */}
            <div>
              <Label htmlFor="assignee" className="text-foreground">
                Assign To *
              </Label>
              <Select value={formData.assignee} onValueChange={(value) => handleSelectChange(value, 'assignee')}>
                <SelectTrigger className="mt-2 bg-input border-border/50 text-foreground">
                  <SelectValue placeholder="Select team member" />
                </SelectTrigger>
                <SelectContent>
                  {teamMembers.map((member) => (
                    <SelectItem key={member} value={member}>
                      {member}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Department */}
            <div>
              <Label htmlFor="department" className="text-foreground">
                Department
              </Label>
              <Select value={formData.department} onValueChange={(value) => handleSelectChange(value, 'department')}>
                <SelectTrigger className="mt-2 bg-input border-border/50 text-foreground">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Priority and Due Date */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Priority */}
            <div>
              <Label htmlFor="priority" className="text-foreground">
                Priority *
              </Label>
              <Select value={formData.priority} onValueChange={(value) => handleSelectChange(value, 'priority')}>
                <SelectTrigger className="mt-2 bg-input border-border/50 text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Due Date */}
            <div>
              <Label htmlFor="dueDate" className="text-foreground">
                Due Date *
              </Label>
              <Input
                id="dueDate"
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleInputChange}
                className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                required
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-2">Task Assignment</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>✓ Assignee will receive a notification</li>
              <li>✓ Task will appear in their work queue</li>
              <li>✓ Progress can be tracked and updated</li>
              <li>✓ Task history is auditable</li>
            </ul>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <Link href="/dashboard/work-assignments" className="flex-1">
              <Button variant="outline" className="w-full border-border/50 text-foreground hover:bg-foreground/5 bg-transparent">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Task'}
              {!isLoading && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

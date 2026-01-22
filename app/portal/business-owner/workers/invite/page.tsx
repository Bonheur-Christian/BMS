'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Plus, X, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function InviteTeamPage() {
  const [invites, setInvites] = useState([{ email: '', role: 'Member', department: '' }])
  const [isLoading, setIsLoading] = useState(false)

  const departments = ['Engineering', 'Marketing', 'Sales', 'Operations', 'HR', 'Finance']
  const roles = [
    'Admin',
    'Manager',
    'Lead',
    'Member',
  ]

  const addInvite = () => {
    setInvites([...invites, { email: '', role: 'Member', department: '' }])
  }

  const removeInvite = (index: number) => {
    setInvites(invites.filter((_, i) => i !== index))
  }

  const updateInvite = (index: number, field: string, value: string) => {
    const updatedInvites = [...invites]
    updatedInvites[index] = { ...updatedInvites[index], [field]: value }
    setInvites(updatedInvites)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Redirect or show success message
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <Link href="/dashboard/team" className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Team
        </Link>
        <h1 className="text-3xl font-bold text-foreground">Invite Team Members</h1>
        <p className="text-foreground/60">Add new members to your organization</p>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Invite Cards */}
          <div className="space-y-4">
            {invites.map((invite, index) => (
              <div key={index} className="p-6 border border-border/50 rounded-lg bg-foreground/5 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground">Invitation {index + 1}</h3>
                  {invites.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeInvite(index)}
                      className="text-destructive hover:text-destructive/80 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div>
                    <Label htmlFor={`email-${index}`} className="text-foreground">
                      Email Address *
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                      <Input
                        id={`email-${index}`}
                        type="email"
                        placeholder="user@example.com"
                        value={invite.email}
                        onChange={(e) => updateInvite(index, 'email', e.target.value)}
                        className="pl-10 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                        required
                      />
                    </div>
                  </div>

                  {/* Role and Department */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`role-${index}`} className="text-foreground">
                        Role *
                      </Label>
                      <Select value={invite.role} onValueChange={(value) => updateInvite(index, 'role', value)}>
                        <SelectTrigger className="mt-2 bg-input border-border/50 text-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor={`department-${index}`} className="text-foreground">
                        Department
                      </Label>
                      <Select value={invite.department} onValueChange={(value) => updateInvite(index, 'department', value)}>
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
                </div>
              </div>
            ))}
          </div>

          {/* Add More Button */}
          <Button
            type="button"
            variant="outline"
            onClick={addInvite}
            className="w-full border-border/50 text-foreground hover:bg-foreground/5 gap-2 bg-transparent"
          >
            <Plus className="w-4 h-4" />
            Add Another Invitation
          </Button>

          {/* Info Box */}
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>✓ Invitations will be sent to the email addresses</li>
              <li>✓ Members will receive a link to accept the invitation</li>
              <li>✓ Once accepted, they'll be added to your team with the specified role</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4 border-t border-border/50">
            <Link href="/dashboard/team" className="flex-1">
              <Button variant="outline" className="w-full border-border/50 text-foreground hover:bg-foreground/5 bg-transparent">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? 'Sending Invitations...' : `Send ${invites.length} Invitation${invites.length > 1 ? 's' : ''}`}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

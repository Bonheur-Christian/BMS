'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, Save, AlertTriangle, Trash2, Shield, Bell, Lock } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function BusinessSettingsPage() {
  const params = useParams()
  const businessId = params.id
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('general')

  const business = {
    name: 'Tech Startup Inc',
    industry: 'Software Development',
    website: 'https://techstartup.com',
    email: 'contact@techstartup.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA, USA',
    taxId: 'EIN: 45-1234567',
    employees: 24,
    founded: 2022,
    description: 'Leading software development company specializing in cloud solutions',
    apiKey: 'bms_live_1a2b3c4d5e6f7g8h9i0j',
  }

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Shield },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'danger', label: 'Danger Zone', icon: AlertTriangle },
  ]

  return (
    <div className="p-6 space-y-8 w-[95%] mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <Link href={`/dashboard/businesses/${businessId}`} className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm w-fit">
          <ArrowLeft className="w-4 h-4" />
          Back to Business
        </Link>
        <h1 className="text-4xl font-bold text-foreground">Business Settings</h1>
        <p className="text-foreground/60">Manage your business configuration and preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 overflow-x-auto border-b border-border/50 pb-4">
        {tabs.map(tab => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 font-medium text-sm transition-all whitespace-nowrap ${activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground/60 hover:text-foreground'
                }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* GENERAL SETTINGS */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">General Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="business-name">Business Name</Label>
                <Input id="business-name" defaultValue={business.name} placeholder="Enter business name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" defaultValue={business.industry} placeholder="e.g., Software Development" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" defaultValue={business.email} placeholder="contact@business.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue={business.phone} placeholder="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" defaultValue={business.website} placeholder="https://example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue={business.location} placeholder="City, State, Country" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax-id">Tax ID / EIN</Label>
                <Input id="tax-id" defaultValue={business.taxId} placeholder="EIN or Tax ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="founded">Founded Year</Label>
                <Input id="founded" type="number" defaultValue={business.founded} placeholder="2022" />
              </div>
            </div>
            <div className="space-y-2 mt-6">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                defaultValue={business.description}
                placeholder="Business description and details"
                className="w-full px-3 py-2 rounded-md border border-border/50 bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>
            <Button onClick={handleSave} disabled={isSaving} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-6">
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </Card>
        </div>
      )}

      {/* SECURITY SETTINGS */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Enable 2FA</p>
                    <p className="text-sm text-foreground/60">Secure your account with two-factor authentication</p>
                  </div>
                  <Button variant="outline" className="border-border/50 text-foreground bg-transparent">
                    Configure
                  </Button>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Session Management</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Current Session</p>
                      <p className="text-xs text-foreground/60">Last active: 2 minutes ago</p>
                    </div>
                    <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Active</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">IP Whitelist</h3>
                <p className="text-sm text-foreground/60 mb-4">Restrict access to specific IP addresses</p>
                <Input placeholder="Enter IP address (e.g., 192.168.1.1)" className="mb-3" />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add IP Address</Button>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Password Policy</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox id="min-length" defaultChecked />
                    <Label htmlFor="min-length" className="text-sm">Minimum 12 characters</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="special-chars" defaultChecked />
                    <Label htmlFor="special-chars" className="text-sm">Require special characters</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="expiry" />
                    <Label htmlFor="expiry" className="text-sm">Password expiry every 90 days</Label>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* NOTIFICATIONS */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Task Assignments</p>
                  <p className="text-sm text-foreground/60">Receive notifications when tasks are assigned</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border/50" />
              </div>

              <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Team Updates</p>
                  <p className="text-sm text-foreground/60">Get notified about team activity and changes</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border/50" />
              </div>

              <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Overdue Tasks</p>
                  <p className="text-sm text-foreground/60">Alert when tasks become overdue</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border/50" />
              </div>

              <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Performance Reports</p>
                  <p className="text-sm text-foreground/60">Weekly performance and analytics reports</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded border-border/50" />
              </div>

              <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Security Alerts</p>
                  <p className="text-sm text-foreground/60">Critical security notifications and alerts</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border/50" />
              </div>
            </div>

            <div className="border-t border-border/50 mt-6 pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notification Channels</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="email-notif" defaultChecked />
                  <Label htmlFor="email-notif" className="text-sm">Email Notifications</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="sms-notif" />
                  <Label htmlFor="sms-notif" className="text-sm">SMS Notifications</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="push-notif" defaultChecked />
                  <Label htmlFor="push-notif" className="text-sm">Push Notifications</Label>
                </div>
              </div>
            </div>

            <Button onClick={handleSave} disabled={isSaving} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-6">
              <Save className="w-4 h-4" />
              Save Preferences
            </Button>
          </Card>
        </div>
      )}



      {/* DANGER ZONE */}
      {activeTab === 'danger' && (
        <div className="space-y-6">
          <Card className="border-red-500/20 bg-red-500/5 backdrop-blur p-6 border-l-4 border-l-red-500">
            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Danger Zone
            </h2>

            <div className="space-y-6">
              <div className="border-b border-border/50 pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Export Business Data</h3>
                <p className="text-sm text-foreground/60 mb-4">Download all business data in CSV format</p>
                <Button variant="outline" className="border-border/50 text-foreground bg-transparent">
                  Export Data
                </Button>
              </div>

              <div className="border-b border-border/50 pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Deactivate Business</h3>
                <p className="text-sm text-foreground/60 mb-4">Temporarily deactivate this business. You can reactivate it later.</p>
                <Button variant="outline" className="border-yellow-500/30 text-yellow-600 bg-transparent hover:bg-yellow-500/10">
                  Deactivate Business
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-500 mb-2">Delete Business</h3>
                <p className="text-sm text-foreground/60 mb-4">Permanently delete this business and all associated data. This action cannot be undone.</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                  <Trash2 className="w-4 h-4" />
                  Delete Business
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

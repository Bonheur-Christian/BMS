'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit2, Save, X } from 'lucide-react';

interface ProfileData {
  name: string;
  position: string;
  businessUnit: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  email: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
  profilePhoto: string;
  joinDate: string;
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: 'John Doe',
    position: 'Staff',
    businessUnit: 'Warehouse Operations',
    status: 'Active',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    emergencyContact: 'Jane Doe',
    emergencyPhone: '+1 (555) 987-6543',
    profilePhoto: '👤',
    joinDate: '2023-06-15',
  });

  const [editData, setEditData] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profile);
  };

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setEditData({ ...editData, [field]: value });
  };

  const statusColor = {
    Active: 'text-green-600 bg-green-50',
    'On Leave': 'text-orange-600 bg-orange-50',
    Inactive: 'text-gray-600 bg-gray-50',
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Worker Profile</h2>
        {!isEditing && (
          <Button
            onClick={handleEdit}
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </Button>
        )}
      </div>

      <Card className="p-8">
        <div className="flex items-start gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-5xl">
              {profile.profilePhoto}
            </div>
            {isEditing && (
              <button className="text-sm text-primary hover:underline">Change Photo</button>
            )}
          </div>

          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={e => handleInputChange('name', e.target.value)}
                      disabled
                      className="w-full px-3 py-2 border border-border rounded bg-secondary text-foreground opacity-60"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Read-only</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Position</label>
                    <input
                      type="text"
                      value={editData.position}
                      onChange={e => handleInputChange('position', e.target.value)}
                      disabled
                      className="w-full px-3 py-2 border border-border rounded bg-secondary text-foreground opacity-60"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Read-only</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Unit
                    </label>
                    <input
                      type="text"
                      value={editData.businessUnit}
                      onChange={e => handleInputChange('businessUnit', e.target.value)}
                      disabled
                      className="w-full px-3 py-2 border border-border rounded bg-secondary text-foreground opacity-60"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Read-only</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                    <select
                      value={editData.status}
                      onChange={e => handleInputChange('status', e.target.value)}
                      disabled
                      className="w-full px-3 py-2 border border-border rounded bg-secondary text-foreground opacity-60"
                    >
                      <option>Active</option>
                      <option>On Leave</option>
                      <option>Inactive</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">Read-only</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={e => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      disabled
                      className="w-full px-3 py-2 border border-border rounded bg-secondary text-foreground opacity-60"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Read-only</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      value={editData.emergencyContact}
                      onChange={e => handleInputChange('emergencyContact', e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={editData.emergencyPhone}
                      onChange={e => handleInputChange('emergencyPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="flex-1 bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{profile.name}</h3>
                  <p className="text-lg text-muted-foreground">{profile.position}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Business Unit</p>
                    <p className="font-medium text-foreground">{profile.businessUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className={`font-medium px-3 py-1 rounded inline-block ${statusColor[profile.status as keyof typeof statusColor]}`}>
                      {profile.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-foreground">{profile.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-foreground">{profile.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Emergency Contact</p>
                    <p className="font-medium text-foreground">{profile.emergencyContact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Emergency Phone</p>
                    <p className="font-medium text-foreground">{profile.emergencyPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                    <p className="font-medium text-foreground">
                      {new Date(profile.joinDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6 border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-3">Profile Information</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• You can edit your phone number, emergency contact, and profile photo</li>
          <li>• Your name, position, and business unit are read-only and managed by your manager</li>
          <li>• Keep your emergency contact information up to date for safety protocols</li>
          <li>• Contact HR if you need to update other profile information</li>
        </ul>
      </Card>
    </div>
  );
}

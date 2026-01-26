'use client';

import { Card } from '@/components/ui/card';
import { AlertCircle, FileText, TrendingUp } from 'lucide-react';

interface Announcement {
    id: string;
    title: string;
    content: string;
    type: 'Announcement' | 'Policy' | 'Urgent';
    date: string;
    priority: 'Normal' | 'High';
}

const announcements: Announcement[] = [
    {
        id: '1',
        title: 'New Safety Protocol Update',
        content:
            'Effective immediately, all workers must follow the updated safety protocol for handling hazardous materials. Please review the attached guidelines and confirm your understanding within 24 hours.',
        type: 'Urgent',
        date: '2025-01-26',
        priority: 'High',
    },
    {
        id: '2',
        title: 'Scheduled Maintenance - Warehouse Closure',
        content:
            'The warehouse will be closed on January 28-29 for routine maintenance. No operations scheduled for these dates. Regular operations resume on January 30.',
        type: 'Announcement',
        date: '2025-01-24',
        priority: 'Normal',
    },
    {
        id: '3',
        title: 'Employee Recognition Program',
        content:
            'We are pleased to announce the launch of our new Employee Recognition Program. Workers who exceed performance targets will receive bonuses and recognition.',
        type: 'Announcement',
        date: '2025-01-23',
        priority: 'Normal',
    },
    {
        id: '4',
        title: 'Updated Work Schedule Policy',
        content:
            'New work schedule policy is now in effect. Please refer to the HR portal for your assigned shifts and the updated overtime procedures.',
        type: 'Policy',
        date: '2025-01-22',
        priority: 'Normal',
    },
    {
        id: '5',
        title: 'Equipment Upgrade Announcement',
        content:
            'New equipment will be deployed next week to improve efficiency. Training sessions are scheduled for all workers. Attendance is mandatory.',
        type: 'Announcement',
        date: '2025-01-20',
        priority: 'Normal',
    },
];

export default function AnnouncementsPage() {
    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Urgent':
                return <AlertCircle className="w-5 h-5 text-destructive" />;
            case 'Policy':
                return <FileText className="w-5 h-5 text-accent" />;
            default:
                return <TrendingUp className="w-5 h-5 text-primary" />;
        }
    };

    const getTypeColor = (type: string, priority: string) => {
        if (priority === 'High') {
            return 'border-l-4 border-l-destructive bg-red-50';
        }
        switch (type) {
            case 'Urgent':
                return 'border-l-4 border-l-destructive bg-red-50';
            case 'Policy':
                return 'border-l-4 border-l-accent bg-blue-50';
            default:
                return 'border-l-4 border-l-primary';
        }
    };

    const urgentAnnouncements = announcements.filter(a => a.priority === 'High');
    const otherAnnouncements = announcements.filter(a => a.priority !== 'High');

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Announcements & Updates</h2>

            {urgentAnnouncements.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-destructive flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Urgent Notices
                    </h3>
                    <div className="space-y-3">
                        {urgentAnnouncements.map(announcement => (
                            <Card
                                key={announcement.id}
                                className={`p-4 ${getTypeColor(announcement.type, announcement.priority)}`}
                            >
                                <div className="flex items-start gap-4">
                                    {getTypeIcon(announcement.type)}
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-foreground">{announcement.title}</h3>
                                        <p className="text-foreground mt-2">{announcement.content}</p>
                                        <p className="text-sm text-muted-foreground mt-3">
                                            {new Date(announcement.date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">Recent Updates</h3>
                <div className="space-y-3">
                    {otherAnnouncements.map(announcement => (
                        <Card
                            key={announcement.id}
                            className={`p-4 ${getTypeColor(announcement.type, announcement.priority)}`}
                        >
                            <div className="flex items-start gap-4">
                                {getTypeIcon(announcement.type)}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-foreground">{announcement.title}</h3>
                                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                                            {announcement.type}
                                        </span>
                                    </div>
                                    <p className="text-foreground text-sm mb-2">{announcement.content}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {new Date(announcement.date).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

'use client';

import { EmptyState } from "@/components/common/EmptyNotificationState";
import { NotificationFilters, type FilterType } from "@/components/common/NotificationFilters";
import { NotificationItem } from "@/components/common/NotificationItem";
import { useState, useMemo } from "react";
import { Bell, CheckCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
    id: string;
    title: string;
    message: string;
    type: "info" | "success" | "warning" | "error";
    timestamp: Date;
    read: boolean;
    category: string;
}

// Sample data
const initialNotifications: Notification[] = [
    {
        id: "1",
        title: "New team member joined",
        message: "Sarah Johnson has joined the Marketing team. Welcome them to the organization!",
        type: "info",
        timestamp: new Date(Date.now() - 5 * 60000),
        read: false,
        category: "Team",
    },
    {
        id: "2",
        title: "Project milestone completed",
        message: "Q4 Marketing Campaign has reached its first milestone. Great progress team!",
        type: "success",
        timestamp: new Date(Date.now() - 30 * 60000),
        read: false,
        category: "Projects",
    },
    {
        id: "3",
        title: "Budget approval required",
        message: "The Q1 2024 budget request is pending your approval. Please review the attached documents.",
        type: "warning",
        timestamp: new Date(Date.now() - 2 * 3600000),
        read: false,
        category: "Finance",
    },
    {
        id: "4",
        title: "System maintenance scheduled",
        message: "Scheduled maintenance will occur on Sunday from 2:00 AM to 6:00 AM EST.",
        type: "info",
        timestamp: new Date(Date.now() - 5 * 3600000),
        read: true,
        category: "System",
    },
    {
        id: "5",
        title: "Payment processing failed",
        message: "Invoice #INV-2024-001 payment failed. Please update the payment method.",
        type: "error",
        timestamp: new Date(Date.now() - 24 * 3600000),
        read: true,
        category: "Billing",
    },
    {
        id: "6",
        title: "Monthly report ready",
        message: "Your December 2023 business performance report is ready for download.",
        type: "success",
        timestamp: new Date(Date.now() - 48 * 3600000),
        read: true,
        category: "Reports",
    },
    {
        id: "7",
        title: "Security alert",
        message: "A new login was detected from an unrecognized device. If this wasn't you, please secure your account.",
        type: "warning",
        timestamp: new Date(Date.now() - 72 * 3600000),
        read: false,
        category: "Security",
    },
    {
        id: "8",
        title: "Integration connected",
        message: "Slack integration has been successfully connected to your workspace.",
        type: "success",
        timestamp: new Date(Date.now() - 96 * 3600000),
        read: true,
        category: "Integrations",
    },
];

export default function Notifications() {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

    const filteredNotifications = useMemo(() => {
        switch (activeFilter) {
            case "unread":
                return notifications.filter((n) => !n.read);
            default:
                return notifications;
        }
    }, [notifications, activeFilter]);

    const counts = useMemo(() => ({
        all: notifications.length,
        unread: notifications.filter((n) => !n.read).length,
    }), [notifications]);

    const handleMarkAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    };

    const handleMarkAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    const handleDelete = (id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <Bell className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
                            <p className="text-sm text-muted-foreground">
                                {unreadCount > 0
                                    ? `You have ${unreadCount} unread notification${unreadCount !== 1 ? "s" : ""}`
                                    : "You're all caught up!"}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleMarkAllAsRead}
                            disabled={unreadCount === 0}
                            className="gap-2"
                        >
                            <CheckCheck className="h-4 w-4" />
                            Mark all as read
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="mt-6">
                    <NotificationFilters
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                        counts={counts}
                    />
                </div>

                <div className="mt-6 space-y-3">
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                                onMarkAsRead={handleMarkAsRead}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <EmptyState filter={activeFilter} />
                    )}
                </div>
            </div>
        </div>
    );
}

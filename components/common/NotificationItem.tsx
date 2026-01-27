import { cn } from "@/lib/utils";
import { CheckCircle, AlertTriangle, Info, XCircle, MoreHorizontal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    timestamp: Date;
    read: boolean;
    category?: string;
}

interface NotificationItemProps {
    notification: Notification;
    onMarkAsRead: (id: string) => void;
    onDelete: (id: string) => void;
}

const typeConfig = {
    info: {
        icon: Info,
        bgClass: "bg-info/10",
        iconClass: "text-info",
        borderClass: "border-l-info",
    },
    success: {
        icon: CheckCircle,
        bgClass: "bg-success/10",
        iconClass: "text-success",
        borderClass: "border-l-success",
    },
    warning: {
        icon: AlertTriangle,
        bgClass: "bg-warning/10",
        iconClass: "text-warning",
        borderClass: "border-l-warning",
    },
    error: {
        icon: XCircle,
        bgClass: "bg-destructive/10",
        iconClass: "text-destructive",
        borderClass: "border-l-destructive",
    },
};

function formatRelativeTime(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
}

export function NotificationItem({ notification, onMarkAsRead, onDelete }: NotificationItemProps) {
    const config = typeConfig[notification.type];
    const Icon = config.icon;

    return (
        <div
            className={cn(
                "group relative flex items-start gap-4 p-4 border-l-4 rounded-lg transition-all duration-200",
                "hover:shadow-md hover:translate-x-1",
                config.borderClass,
                notification.read ? "bg-card opacity-70" : "bg-card shadow-sm"
            )}
        >
            {/* Unread indicator */}
            {!notification.read && (
                <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary animate-pulse" />
            )}

            {/* Icon */}
            <div className={cn("flex-shrink-0 p-2 rounded-full", config.bgClass)}>
                <Icon className={cn("h-5 w-5", config.iconClass)} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h4 className={cn(
                            "text-sm font-medium text-foreground",
                            !notification.read && "font-semibold"
                        )}>
                            {notification.title}
                        </h4>
                        {notification.category && (
                            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                {notification.category}
                            </span>
                        )}
                    </div>
                    <span className="flex-shrink-0 text-xs text-muted-foreground">
                        {formatRelativeTime(notification.timestamp)}
                    </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {notification.message}
                </p>
            </div>

            {/* Actions */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {!notification.read && (
                            <DropdownMenuItem onClick={() => onMarkAsRead(notification.id)}>
                                <Check className="mr-2 h-4 w-4" />
                                Mark as read
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                            onClick={() => onDelete(notification.id)}
                            className="text-destructive focus:text-destructive"
                        >
                            <XCircle className="mr-2 h-4 w-4" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

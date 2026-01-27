import { Inbox, CheckCircle } from "lucide-react";
import { FilterType } from "./NotificationFilters";

interface EmptyStateProps {
    filter: FilterType;
}

const emptyStates: Record<FilterType, { icon: React.ElementType; title: string; description: string }> = {
    all: {
        icon: Inbox,
        title: "No notifications yet",
        description: "When you receive notifications, they'll appear here.",
    },
    unread: {
        icon: CheckCircle,
        title: "All caught up!",
        description: "You've read all your notifications. Great job staying on top of things!",
    },


};

export function EmptyState({ filter }: EmptyStateProps) {
    const { icon: Icon, title, description } = emptyStates[filter];

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="p-4 bg-muted rounded-full mb-4">
                <Icon className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
        </div>
    );
}

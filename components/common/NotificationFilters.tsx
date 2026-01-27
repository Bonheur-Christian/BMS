import { cn } from "@/lib/utils";
import { Bell, Inbox } from "lucide-react";

export type FilterType = "all" | "unread";

interface NotificationFiltersProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    counts: Record<FilterType, number>;
}

const filters: { key: FilterType; label: string; icon: React.ElementType }[] = [
    { key: "all", label: "All", icon: Inbox },
    { key: "unread", label: "Unread", icon: Bell },

];

export function NotificationFilters({ activeFilter, onFilterChange, counts }: NotificationFiltersProps) {
    return (
        <div className="flex items-center gap-1 p-1 bg-muted rounded-lg overflow-x-auto">
            {filters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.key;
                const count = counts[filter.key];

                return (
                    <button
                        key={filter.key}
                        onClick={() => onFilterChange(filter.key)}
                        className={cn(
                            "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-primary/50",
                            isActive
                                ? "bg-card text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{filter.label}</span>
                        {count > 0 && (
                            <span
                                className={cn(
                                    "min-w-[1.25rem] h-5 flex items-center justify-center px-1.5 text-xs font-semibold rounded-full",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground"
                                )}
                            >
                                {count > 99 ? "99+" : count}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}

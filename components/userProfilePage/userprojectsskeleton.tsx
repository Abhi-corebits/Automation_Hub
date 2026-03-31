import { Skeleton } from "../ui/skeleton";

export default function UserProjectsSkeleton() {
    const cards = Array.from({ length: 6 });
    const badges = Array.from({ length: 3 });

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-6">
                {cards.map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-900/40 backdrop-blur-xl p-5 border border-gray-800/50 rounded-2xl overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-video bg-gray-800/50 rounded-xl overflow-hidden mb-4">
                            <Skeleton className="w-full h-full bg-gray-800/70" />
                        </div>

                        {/* Title */}
                        <Skeleton className="h-6 w-3/4 mb-2 bg-gray-800/70 rounded" />

                        {/* Description */}
                        <div className="space-y-2 mb-4">
                            <Skeleton className="h-4 w-full bg-gray-800/70 rounded" />
                            <Skeleton className="h-4 w-5/6 bg-gray-800/70 rounded" />
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {badges.map((_, j) => (
                                <Skeleton key={j} className="h-7 w-16 rounded-full bg-gray-800/70" />
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-gray-800/50">
                            {/* Left Actions */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Skeleton className="h-10 w-20 rounded-xl bg-gray-800/70" />
                                {/* Uncomment if comments button is active
                                <Skeleton className="h-10 w-24 rounded-xl bg-gray-800/70" />
                                */}
                            </div>

                            {/* Copy Workflow Button */}
                            <Skeleton className="w-full sm:w-auto h-10 sm:w-32 rounded-xl bg-gray-800/70" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import { Skeleton } from "@/components/ui/skeleton.tsx";

function WeatherSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid-6 gap-6">
        <Skeleton className="h-[300px] wi-full rounded-lg" />
        <Skeleton className="h-[300px] wi-full rounded-lg" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
export default WeatherSkeleton;

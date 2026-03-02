import { Skeleton } from "@/components/ui/skeleton"

// Shared eyebrow/title skeleton for sections
const SectionHeaderSkeleton = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
    <Skeleton className="h-4 w-32 rounded-full mb-4" />
    <Skeleton className="h-10 w-[280px] md:w-[480px] rounded-md" />
  </div>
)

export function DownloadSkeleton() {
  return (
    <section className="py-[120px] bg-bg w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-[24px] bg-[#0c0c0f] border border-[#1a1a1d] p-8 flex flex-col items-center">
              <Skeleton className="w-[120px] h-[120px] rounded-full mb-8" />
              <Skeleton className="h-8 w-24 mb-4" />
              <Skeleton className="h-4 w-32 mb-8" />
              <Skeleton className="h-12 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSkeleton() {
  return (
    <section className="py-[120px] bg-bg w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-[#0f0f11] rounded-[24px] border border-[#1a1a1d] p-8 min-h-[140px] flex items-center gap-5">
              <Skeleton className="w-14 h-14 rounded-[16px] shrink-0" />
              <div className="w-full">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CompareSkeleton() {
  return (
    <section className="py-[120px] bg-bg w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <SectionHeaderSkeleton />
        <div className="overflow-x-auto w-full">
          <div className="w-full flex flex-col border border-border-DEFAULT rounded-md">
            <div className="flex border-b border-border-DEFAULT bg-[#111]">
              <div className="flex-1 p-4"><Skeleton className="h-4 w-24" /></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-1 p-4 border-l border-border-DEFAULT flex justify-center">
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
              <div key={row} className="flex border-b border-border-DEFAULT">
                <div className="flex-1 p-4"><Skeleton className="h-4 w-48" /></div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex-1 p-4 border-l border-border-DEFAULT flex justify-center">
                    <Skeleton className="h-4 w-4" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GenericSectionSkeleton() {
  return (
    <section className="py-[120px] bg-bg w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto opacity-50">
        <SectionHeaderSkeleton />
        <div className="w-full h-[400px] bg-[#0c0c0f] border border-[#1a1a1d] rounded-2xl animate-pulse" />
      </div>
    </section>
  )
}

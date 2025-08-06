import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function OperationsLoading() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 侧边导航骨架 */}
      <div className="w-20 bg-neutral-900">
        <div className="p-4">
          <Skeleton className="w-12 h-12 rounded-lg bg-neutral-800" />
        </div>
        <div className="px-3 space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-14 h-12 rounded-lg bg-neutral-800" />
          ))}
        </div>
      </div>

      {/* 主内容区域骨架 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部导航骨架 */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="w-48 h-5" />
                <Skeleton className="w-32 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="w-64 h-10 rounded-md" />
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>

        {/* 主要内容骨架 */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* 页面标题骨架 */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="w-48 h-8" />
                <Skeleton className="w-64 h-5" />
              </div>
              <Skeleton className="w-24 h-10 rounded-md" />
            </div>

            {/* 统计卡片骨架 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Skeleton className="w-20 h-4" />
                        <Skeleton className="w-16 h-8" />
                      </div>
                      <Skeleton className="w-12 h-12 rounded-lg" />
                    </div>
                    <div className="mt-4">
                      <Skeleton className="w-24 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 标签页骨架 */}
            <div className="space-y-6">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="flex-1 h-10 rounded-md" />
                ))}
              </div>

              {/* 内容区域骨架 */}
              <Card>
                <CardHeader>
                  <Skeleton className="w-32 h-6" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Skeleton className="w-64 h-10 rounded-md" />
                        <Skeleton className="w-20 h-10 rounded-md" />
                      </div>
                      <Skeleton className="w-24 h-10 rounded-md" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i}>
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Skeleton className="w-20 h-6" />
                                <Skeleton className="w-16 h-5 rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <Skeleton className="w-full h-4" />
                                <Skeleton className="w-3/4 h-4" />
                              </div>
                              <div className="flex justify-between items-center">
                                <Skeleton className="w-20 h-8 rounded-md" />
                                <Skeleton className="w-8 h-8 rounded-md" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

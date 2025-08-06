"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { NarrowNavigation } from "@/components/narrow-navigation"
import { WelcomeCard } from "@/components/welcome-card"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { RecentActivities } from "@/components/recent-activities"
import { QuickAccessPanel } from "@/components/quick-access-panel"
import { IntelligentEngineCard } from "@/components/intelligent-engine-card"

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* 侧边导航 */}
      <div className="w-20 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl">
        <NarrowNavigation />
      </div>

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航 */}
        <DashboardHeader />

        {/* 主要内容 */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8 animate-slide-in-left">
            {/* 欢迎卡片 */}
            <WelcomeCard />

            {/* 核心指标 */}
            <PerformanceMetrics />

            {/* 内容网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧：最近活动 */}
              <div className="lg:col-span-2">
                <RecentActivities />
              </div>

              {/* 右侧：快速访问和智能引擎 */}
              <div className="space-y-8">
                <QuickAccessPanel />
                <IntelligentEngineCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

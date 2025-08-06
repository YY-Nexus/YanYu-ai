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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <WelcomeCard />
              <PerformanceMetrics />
              <RecentActivities />
            </div>
            <div className="space-y-6">
              <QuickAccessPanel />
              <IntelligentEngineCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

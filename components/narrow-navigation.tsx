"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, BarChart3, Users, Building2, Gift, UserCheck, Settings, Cog } from 'lucide-react'

const navigation = [
  { name: "首页", href: "/", icon: Home },
  { name: "数据分析", href: "/analytics", icon: BarChart3 },
  { name: "协同办公", href: "/collaboration", icon: Users },
  { name: "智能办公", href: "/office", icon: Building2 },
  { name: "员工激励", href: "/incentive", icon: Gift },
  { name: "客户关系", href: "/crm", icon: UserCheck },
  { name: "运营管理", href: "/operations", icon: Cog },
  { name: "系统设置", href: "/settings", icon: Settings },
]

export function NarrowNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-50">
      <div className="flex flex-col items-center py-4 space-y-4">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">Y</span>
        </div>
        
        <nav className="flex flex-col space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg"
                    : "hover:bg-white/10 hover:scale-110"
                )}
                title={item.name}
              >
                <item.icon 
                  className={cn(
                    "h-6 w-6 transition-colors",
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                  )} 
                />
                
                <div className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {item.name}
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

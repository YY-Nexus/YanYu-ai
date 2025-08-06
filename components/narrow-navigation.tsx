"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Building2, BarChart3, MessageSquare, Zap, Trophy, UserCheck, Settings } from "lucide-react"
import Image from "next/image"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const navigationItems: NavigationItem[] = [
  {
    name: "首页概览",
    href: "/",
    icon: Home,
    color: "text-blue-400",
  },
  {
    name: "运营管理",
    href: "/operations",
    icon: Building2,
    color: "text-green-400",
  },
  {
    name: "数据中心",
    href: "/analytics",
    icon: BarChart3,
    color: "text-purple-400",
  },
  {
    name: "协作沟通",
    href: "/collaboration",
    icon: MessageSquare,
    color: "text-cyan-400",
  },
  {
    name: "智能办公",
    href: "/office",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    name: "员工激励",
    href: "/incentive",
    icon: Trophy,
    color: "text-orange-400",
  },
  {
    name: "客户关系",
    href: "/crm",
    icon: UserCheck,
    color: "text-pink-400",
  },
  {
    name: "系统设置",
    href: "/settings",
    icon: Settings,
    color: "text-gray-400",
  },
]

export function NarrowNavigation() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="h-full flex flex-col">
      {/* Logo区域 */}
      <div className="p-3 border-b border-neutral-700">
        <Link href="/">
          <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-105 transition-transform">
            <div className="w-12 h-12 relative">
              <Image src="/logo.png" alt="YanYu Cloud Logo" width={48} height={48} className="rounded-lg" priority />
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-white leading-tight">YY</div>
              <div className="text-xs text-gray-300 leading-tight">Cloud</div>
            </div>
          </div>
        </Link>
      </div>

      {/* 导航菜单 */}
      <div className="flex-1 py-4">
        <ul className="space-y-2 px-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            const isHovered = hoveredItem === item.name

            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex items-center justify-center w-full h-12 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800",
                  )}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-white" : item.color)} />

                  {/* 悬停提示 */}
                  {isHovered && !isActive && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-neutral-800 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
                      {item.name}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-neutral-800 rotate-45"></div>
                    </div>
                  )}
                </Link>

                {/* 活跃状态指示器 */}
                {isActive && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-1 h-6 bg-cyan-300 rounded-full"></div>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {/* 底部用户信息 */}
      <div className="p-4 border-t border-neutral-700">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <span className="text-white font-medium text-sm">管</span>
        </div>
      </div>
    </nav>
  )
}

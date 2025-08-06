"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BarChart3, Users, MessageSquare, Settings, Zap, Trophy, ArrowRight } from "lucide-react"

export function QuickAccessPanel() {
  const quickActions = [
    {
      title: "数据分析",
      description: "查看实时业务数据",
      icon: BarChart3,
      href: "/analytics",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      badge: "实时",
    },
    {
      title: "团队管理",
      description: "管理团队成员",
      icon: Users,
      href: "/operations",
      color: "text-green-600",
      bgColor: "bg-green-50",
      badge: "156人",
    },
    {
      title: "消息中心",
      description: "查看最新消息",
      icon: MessageSquare,
      href: "/collaboration",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      badge: "3条新消息",
    },
    {
      title: "智能助手",
      description: "AI辅助决策",
      icon: Zap,
      href: "/office",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      badge: "在线",
    },
    {
      title: "激励系统",
      description: "员工激励管理",
      icon: Trophy,
      href: "/incentive",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      badge: "新任务",
    },
    {
      title: "系统设置",
      description: "平台配置管理",
      icon: Settings,
      href: "/settings",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      badge: null,
    },
  ]

  return (
    <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-700">快速访问</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-3 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3 w-full">
                  <div className={`p-2 rounded-lg ${action.bgColor} shadow-sm`}>
                    <action.icon className={`h-4 w-4 ${action.color}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-gray-700">{action.title}</span>
                      {action.badge && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {action.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

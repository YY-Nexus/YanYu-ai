"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, FileText, Users, MessageSquare, BarChart3, Zap } from 'lucide-react'

const quickActions = [
  {
    title: "创建项目",
    description: "开始新的协作项目",
    icon: Plus,
    color: "from-blue-500 to-cyan-500",
    action: "create-project"
  },
  {
    title: "安排会议",
    description: "预定团队会议",
    icon: Calendar,
    color: "from-green-500 to-emerald-500",
    action: "schedule-meeting"
  },
  {
    title: "新建文档",
    description: "创建协作文档",
    icon: FileText,
    color: "from-purple-500 to-indigo-500",
    action: "new-document"
  },
  {
    title: "邀请成员",
    description: "添加团队成员",
    icon: Users,
    color: "from-orange-500 to-red-500",
    action: "invite-member"
  },
  {
    title: "发送消息",
    description: "团队即时通讯",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-500",
    action: "send-message"
  },
  {
    title: "查看报告",
    description: "数据分析报告",
    icon: BarChart3,
    color: "from-yellow-500 to-amber-500",
    action: "view-reports"
  },
]

export function QuickAccessPanel() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg shadow-lg">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            快速操作
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 bg-transparent transition-all duration-300 hover:scale-105"
            >
              <div className={`p-2 bg-gradient-to-r ${action.color} rounded-lg shadow-lg`}>
                <action.icon className="h-4 w-4 text-white" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-sm">{action.title}</div>
                <div className="text-xs text-gray-500">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

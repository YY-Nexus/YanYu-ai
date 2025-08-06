"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Clock, Eye, MessageSquare, FileText, Users, Settings } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "system",
      title: "YanYu Cloud系统更新",
      description: "平台核心功能优化，新增AI智能分析模块",
      time: "2分钟前",
      icon: Settings,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      type: "user",
      title: "新用户注册",
      description: "张小明 加入了运营管理团队",
      time: "15分钟前",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      type: "document",
      title: "文档更新",
      description: "《YanYu Cloud操作手册》已更新至v2.1版本",
      time: "1小时前",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      type: "message",
      title: "团队消息",
      description: "产品团队发布了新的功能需求讨论",
      time: "2小时前",
      icon: MessageSquare,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      type: "analytics",
      title: "数据报告",
      description: "本周运营数据分析报告已生成",
      time: "3小时前",
      icon: Eye,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ]

  return (
    <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-700">最近活动</CardTitle>
          <Button variant="ghost" size="sm" className="hover:bg-gray-100 rounded-lg transition-all duration-300">
            查看全部
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0 shadow-sm`}>
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">{activity.title}</h4>
                  <div className="flex items-center text-xs text-gray-500 ml-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>

                {activity.avatar && (
                  <div className="flex items-center mt-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-xs">
                        张
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-500 ml-2">新团队成员</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

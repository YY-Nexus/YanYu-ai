"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MessageSquare, FileText, Users, CheckCircle } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: "message",
    title: "李四发送了新消息",
    description: "关于Q1季度销售计划的讨论",
    time: "2分钟前",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "new"
  },
  {
    id: 2,
    type: "document",
    title: "产品需求文档已更新",
    description: "王五更新了移动端功能规格说明",
    time: "15分钟前",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "updated"
  },
  {
    id: 3,
    type: "meeting",
    title: "团队会议即将开始",
    description: "每周例会将在30分钟后开始",
    time: "30分钟后",
    icon: Users,
    color: "from-purple-500 to-indigo-500",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "upcoming"
  },
  {
    id: 4,
    type: "task",
    title: "任务已完成",
    description: "赵六完成了用户界面设计任务",
    time: "1小时前",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "completed"
  },
]

export function RecentActivities() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg shadow-lg">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            最近活动
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`p-2 bg-gradient-to-r ${activity.color} rounded-lg shadow-lg`}>
                <activity.icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      activity.status === "new"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : activity.status === "updated"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : activity.status === "upcoming"
                        ? "bg-purple-50 text-purple-700 border-purple-200"
                        : "bg-orange-50 text-orange-700 border-orange-200"
                    }
                  >
                    {activity.status === "new" && "新消息"}
                    {activity.status === "updated" && "已更新"}
                    {activity.status === "upcoming" && "即将开始"}
                    {activity.status === "completed" && "已完成"}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-xs">
                      用
                    </AvatarFallback>
                  </Avatar>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

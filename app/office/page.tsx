"use client"

import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Building2, Wifi, Thermometer, Lightbulb, Car, Coffee, Users, Calendar, MapPin, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

export default function OfficePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                智能办公
              </h1>
              <p className="text-gray-600 mt-2">智能化办公环境管理</p>
            </div>
            <Badge className="bg-green-100 text-green-700 border-green-300 px-4 py-2 font-medium">
              <CheckCircle className="h-4 w-4 mr-2" />
              系统正常运行
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">室内温度</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      22°C
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Thermometer className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">舒适范围内</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">照明状态</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                      85%
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">自动调节中</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">网络状态</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      优秀
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <Wifi className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">延迟 12ms</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">在线人数</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      24
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">总容量 50人</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    会议室状态
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "会议室A", capacity: 8, status: "使用中", until: "15:30", color: "from-red-500 to-pink-500" },
                  { name: "会议室B", capacity: 12, status: "空闲", until: "", color: "from-green-500 to-emerald-500" },
                  { name: "会议室C", capacity: 6, status: "已预订", until: "14:00", color: "from-yellow-500 to-amber-500" },
                  { name: "会议室D", capacity: 20, status: "空闲", until: "", color: "from-green-500 to-emerald-500" },
                ].map((room, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-gradient-to-r ${room.color} rounded-lg`}>
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{room.name}</h4>
                        <p className="text-sm text-gray-600">容量 {room.capacity} 人</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          room.status === "使用中"
                            ? "bg-red-100 text-red-700 border-red-300"
                            : room.status === "空闲"
                            ? "bg-green-100 text-green-700 border-green-300"
                            : "bg-yellow-100 text-yellow-700 border-yellow-300"
                        }
                      >
                        {room.status}
                      </Badge>
                      {room.until && (
                        <p className="text-xs text-gray-500 mt-1">至 {room.until}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    停车位管理
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      18
                    </p>
                    <p className="text-gray-600 font-medium">可用车位</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      32
                    </p>
                    <p className="text-gray-600 font-medium">已占用</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>使用率</span>
                    <span>64%</span>
                  </div>
                  <div className="relative">
                    <Progress value={64} className="h-3 bg-gray-200" />
                    <div
                      className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "64%" }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-lg text-gray-700">预约信息</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">A区 (VIP)</span>
                      <Badge className="bg-blue-100 text-blue-700 border-blue-300">2个空位</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">B区 (普通)</span>
                      <Badge className="bg-green-100 text-green-700 border-green-300">16个空位</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">C区 (访客)</span>
                      <Badge className="bg-red-100 text-red-700 border-red-300">已满</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  办公设施预订
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "咖啡机",
                    location: "茶水间A",
                    status: "正常",
                    nextMaintenance: "2024-02-01",
                    usage: 85,
                    color: "from-brown-500 to-amber-600"
                  },
                  {
                    name: "打印机",
                    location: "办公区B",
                    status: "维护中",
                    nextMaintenance: "2024-01-20",
                    usage: 45,
                    color: "from-gray-500 to-slate-600"
                  },
                  {
                    name: "投影仪",
                    location: "会议室A",
                    status: "使用中",
                    nextMaintenance: "2024-02-15",
                    usage: 70,
                    color: "from-blue-500 to-indigo-600"
                  },
                ].map((facility, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 bg-gradient-to-r ${facility.color} rounded-lg`}>
                        <Coffee className="h-5 w-5 text-white" />
                      </div>
                      <Badge
                        className={
                          facility.status === "正常"
                            ? "bg-green-100 text-green-700 border-green-300"
                            : facility.status === "维护中"
                            ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                            : "bg-blue-100 text-blue-700 border-blue-300"
                        }
                      >
                        {facility.status}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{facility.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{facility.location}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>使用率</span>
                        <span>{facility.usage}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={facility.usage} className="h-2 bg-gray-200" />
                        <div
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${facility.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${facility.usage}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-3 text-xs text-gray-500">
                      下次维护: {facility.nextMaintenance}
                    </div>
                    
                    <Button
                      size="sm"
                      className={`w-full mt-3 bg-gradient-to-r ${facility.color} hover:shadow-lg text-white`}
                      disabled={facility.status === "维护中"}
                    >
                      {facility.status === "维护中" ? "维护中" : "立即预订"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

"use client"

import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Gift, Trophy, Star, TrendingUp, Award, Target, Zap, Crown, Medal, Sparkles } from 'lucide-react'

export default function IncentivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                员工激励
              </h1>
              <p className="text-gray-600 mt-2">激发团队潜能，共创辉煌成就</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300 px-4 py-2 font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                本月积分: 2,450
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">我的积分</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                      2,450
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-yellow-600" />
                  <span className="text-yellow-600 font-semibold">+180</span>
                  <span className="text-gray-500">本周</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">团队排名</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      #3
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">共 12 个团队</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">获得徽章</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      8
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">总共 15 种</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">目标完成</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      87%
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">本月目标</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    排行榜
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "李四", points: 3250, rank: 1, avatar: "/placeholder.svg?height=40&width=40", change: "+50" },
                  { name: "王五", points: 2890, rank: 2, avatar: "/placeholder.svg?height=40&width=40", change: "+30" },
                  { name: "张三", points: 2450, rank: 3, avatar: "/placeholder.svg?height=40&width=40", change: "+180" },
                  { name: "赵六", points: 2120, rank: 4, avatar: "/placeholder.svg?height=40&width=40", change: "+20" },
                  { name: "钱七", points: 1980, rank: 5, avatar: "/placeholder.svg?height=40&width=40", change: "+15" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl hover:shadow-lg transition-all duration-300 ${
                      user.rank <= 3 
                        ? "bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200" 
                        : "bg-gradient-to-r from-gray-50 to-gray-100"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        {user.rank === 1 && (
                          <Crown className="absolute -top-2 -right-2 h-5 w-5 text-yellow-500" />
                        )}
                        <Avatar className="h-12 w-12 ring-2 ring-orange-200">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                            {user.name[0]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-gray-900">{user.name}</span>
                          {user.rank <= 3 && (
                            <Medal className={`h-4 w-4 ${
                              user.rank === 1 ? "text-yellow-500" : 
                              user.rank === 2 ? "text-gray-400" : "text-amber-600"
                            }`} />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.points} 积分</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        user.rank === 1 ? "text-yellow-600" :
                        user.rank === 2 ? "text-gray-500" :
                        user.rank === 3 ? "text-amber-600" : "text-gray-400"
                      }`}>
                        #{user.rank}
                      </div>
                      <div className="text-xs text-green-600 font-semibold">
                        {user.change}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    成就徽章
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { name: "早起鸟", icon: "🌅", earned: true, color: "from-orange-500 to-red-500" },
                    { name: "团队之星", icon: "⭐", earned: true, color: "from-yellow-500 to-amber-500" },
                    { name: "创新达人", icon: "💡", earned: true, color: "from-blue-500 to-cyan-500" },
                    { name: "效率专家", icon: "⚡", earned: false, color: "from-gray-400 to-gray-500" },
                    { name: "学习标兵", icon: "📚", earned: true, color: "from-green-500 to-emerald-500" },
                    { name: "协作大师", icon: "🤝", earned: true, color: "from-purple-500 to-indigo-500" },
                    { name: "质量守护", icon: "🛡️", earned: false, color: "from-gray-400 to-gray-500" },
                    { name: "月度MVP", icon: "🏆", earned: true, color: "from-pink-500 to-rose-500" },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className={`relative p-4 rounded-xl text-center transition-all duration-300 hover:scale-110 ${
                        badge.earned 
                          ? "bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl" 
                          : "bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"
                      }`}
                    >
                      <div className={`text-2xl mb-2 ${badge.earned ? "" : "grayscale"}`}>
                        {badge.icon}
                      </div>
                      <p className={`text-xs font-medium ${
                        badge.earned ? "text-gray-700" : "text-gray-400"
                      }`}>
                        {badge.name}
                      </p>
                      {badge.earned && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-700">进度追踪</h4>
                  <div className="space-y-3">
                    {[
                      { name: "本月目标", current: 87, target: 100, color: "from-green-500 to-emerald-500" },
                      { name: "学习时长", current: 24, target: 30, color: "from-blue-500 to-cyan-500" },
                      { name: "协作项目", current: 5, target: 8, color: "from-purple-500 to-indigo-500" },
                    ].map((goal, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">{goal.name}</span>
                          <span className="text-gray-600">{goal.current}/{goal.target}</span>
                        </div>
                        <div className="relative">
                          <Progress value={(goal.current / goal.target) * 100} className="h-2 bg-gray-200" />
                          <div
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${(goal.current / goal.target) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <span>积分商城</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { name: "星巴克咖啡券", points: 500, stock: 12, image: "☕" },
                  { name: "带薪假期1天", points: 2000, stock: 5, image: "🏖️" },
                  { name: "团建活动券", points: 1500, stock: 8, image: "🎉" },
                  { name: "健身房月卡", points: 3000, stock: 3, image: "💪" },
                ].map((reward, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center space-y-3">
                      <div className="text-4xl">{reward.image}</div>
                      <h4 className="font-bold text-white">{reward.name}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <Zap className="h-4 w-4 text-yellow-300" />
                          <span className="font-bold text-yellow-300">{reward.points} 积分</span>
                        </div>
                        <p className="text-indigo-100 text-sm">库存: {reward.stock}</p>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
                        disabled={reward.points > 2450}
                      >
                        {reward.points > 2450 ? "积分不足" : "立即兑换"}
                      </Button>
                    </div>
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

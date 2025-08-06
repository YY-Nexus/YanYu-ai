"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Trophy,
  Target,
  TrendingUp,
  Gift,
  Star,
  Award,
  Zap,
  Users,
  Heart,
  DollarSign,
  Calendar,
  Crown,
  Medal,
  Sparkles,
  Diamond,
} from "lucide-react"

export default function IncentivePage() {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null)

  const challenges = [
    {
      id: 1,
      title: "月度销售冠军",
      difficulty: "困难",
      reward: 5000,
      progress: 75,
      participants: 12,
      deadline: "7天后",
      description: "本月销售额达到50万元",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      id: 2,
      title: "团队协作达人",
      difficulty: "中等",
      reward: 2000,
      progress: 60,
      participants: 8,
      deadline: "15天后",
      description: "完成5个跨部门协作项目",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      id: 3,
      title: "创新提案王",
      difficulty: "简单",
      reward: 1000,
      progress: 90,
      participants: 15,
      deadline: "3天后",
      description: "提交3个有效改进建议",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
  ]

  const leaderboard = [
    {
      rank: 1,
      name: "张三",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 8520,
      level: "钻石",
      badge: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
    {
      rank: 2,
      name: "李四",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 7890,
      level: "黄金",
      badge: "🥈",
      color: "from-gray-400 to-gray-600",
    },
    {
      rank: 3,
      name: "王五",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 7234,
      level: "黄金",
      badge: "🥉",
      color: "from-amber-600 to-orange-700",
    },
    {
      rank: 4,
      name: "赵六",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 6789,
      level: "白银",
      badge: "⭐",
      color: "from-blue-400 to-blue-600",
    },
    {
      rank: 5,
      name: "钱七",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 6234,
      level: "白银",
      badge: "⭐",
      color: "from-purple-400 to-purple-600",
    },
  ]

  const rewards = [
    {
      id: 1,
      name: "苹果 MacBook Pro",
      points: 50000,
      stock: 2,
      category: "电子产品",
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 2,
      name: "带薪年假 3天",
      points: 15000,
      stock: 10,
      category: "假期福利",
      color: "from-green-500 to-emerald-600",
    },
    { id: 3, name: "健身房年卡", points: 8000, stock: 5, category: "健康福利", color: "from-orange-500 to-red-500" },
    {
      id: 4,
      name: "星巴克咖啡券",
      points: 500,
      stock: 50,
      category: "日常福利",
      color: "from-amber-500 to-yellow-600",
    },
  ]

  const performanceData = [
    { category: "工作质量", score: 85, trend: "+5%", color: "from-blue-500 to-cyan-500" },
    { category: "团队协作", score: 92, trend: "+8%", color: "from-green-500 to-emerald-500" },
    { category: "创新能力", score: 78, trend: "+12%", color: "from-purple-500 to-indigo-500" },
    { category: "学习成长", score: 88, trend: "+3%", color: "from-orange-500 to-red-500" },
  ]

  const teamChallenges = [
    {
      id: 1,
      title: "季度业绩突破",
      type: "团队挑战",
      participants: 25,
      progress: 68,
      reward: "团队旅游基金 ¥50,000",
      status: "进行中",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "客户满意度提升",
      type: "个人挑战",
      participants: 1,
      progress: 45,
      reward: "现金奖励 ¥3,000",
      status: "进行中",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const wishes = [
    {
      id: 1,
      title: "办公环境改善",
      progress: 80,
      budget: 15000,
      status: "实施中",
      votes: 45,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "员工健身房",
      progress: 30,
      budget: 50000,
      status: "筹备中",
      votes: 78,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "弹性工作时间",
      progress: 95,
      budget: 0,
      status: "即将实现",
      votes: 92,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 页面标题 */}
        <div className="flex items-center justify-between animate-slide-in-left">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              员工激励体系
            </h1>
            <p className="text-gray-600 mt-3 text-lg">激发潜能，成就卓越团队</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className="text-orange-600 border-orange-300 bg-orange-50 px-4 py-2 text-sm font-medium"
            >
              <Diamond className="h-4 w-4 mr-2" />
              我的积分: 6,234
            </Badge>
            <Badge
              variant="outline"
              className="text-purple-600 border-purple-300 bg-purple-50 px-4 py-2 text-sm font-medium"
            >
              <Crown className="h-4 w-4 mr-2" />
              白银等级
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="tasks" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="tasks"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Target className="h-4 w-4 mr-2" />
              任务中心
            </TabsTrigger>
            <TabsTrigger
              value="rewards"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Gift className="h-4 w-4 mr-2" />
              奖励看板
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              绩效分析
            </TabsTrigger>
            <TabsTrigger
              value="betting"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Zap className="h-4 w-4 mr-2" />
              对赌机制
            </TabsTrigger>
            <TabsTrigger
              value="finance"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <DollarSign className="h-4 w-4 mr-2" />
              收支管理
            </TabsTrigger>
            <TabsTrigger
              value="wishes"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Heart className="h-4 w-4 mr-2" />
              心愿通道
            </TabsTrigger>
          </TabsList>

          {/* 任务中心 */}
          <TabsContent value="tasks" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <Card
                  key={challenge.id}
                  className={`hover:shadow-xl transition-all duration-500 cursor-pointer border-0 bg-white/90 backdrop-blur-sm hover:scale-105 ${
                    selectedChallenge === challenge.id ? "ring-4 ring-orange-300 shadow-2xl" : ""
                  }`}
                  onClick={() => setSelectedChallenge(challenge.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold text-gray-700">{challenge.title}</CardTitle>
                      <Badge
                        className={`${
                          challenge.difficulty === "困难"
                            ? "bg-red-100 text-red-700 border-red-300"
                            : challenge.difficulty === "中等"
                              ? "bg-orange-100 text-orange-700 border-orange-300"
                              : "bg-green-100 text-green-700 border-green-300"
                        } font-medium`}
                      >
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">进度</span>
                      <span className="font-bold text-lg text-blue-600">{challenge.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={challenge.progress} className="h-3 bg-gray-100" />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${challenge.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 font-medium">{challenge.participants}人参与</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 font-medium">{challenge.deadline}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-orange-500" />
                        <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          ¥{challenge.reward}
                        </span>
                      </div>
                      <Button
                        className={`bg-gradient-to-r ${challenge.color} hover:shadow-lg text-white px-6 py-2 rounded-lg transition-all duration-300`}
                      >
                        参与挑战
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    我的任务统计
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      8
                    </div>
                    <div className="text-gray-600 font-medium">进行中任务</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      23
                    </div>
                    <div className="text-gray-600 font-medium">已完成任务</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      ¥12,500
                    </div>
                    <div className="text-gray-600 font-medium">累计奖励</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      85%
                    </div>
                    <div className="text-gray-600 font-medium">完成率</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 奖励看板 */}
          <TabsContent value="rewards" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 排行榜 */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                      <Crown className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      积分排行榜
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboard.map((user) => (
                      <div
                        key={user.rank}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{user.badge}</div>
                          <Avatar className="h-12 w-12 ring-2 ring-gray-200">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} />
                            <AvatarFallback className={`bg-gradient-to-r ${user.color} text-white font-bold`}>
                              {user.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-lg text-gray-700">{user.name}</div>
                            <div className="text-gray-600 font-medium">{user.level}等级</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            {user.points.toLocaleString()}
                          </div>
                          <div className="text-gray-600 font-medium">积分</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 奖励商城 */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                      <Gift className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      奖励商城
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rewards.map((reward) => (
                      <div
                        key={reward.id}
                        className="flex items-center justify-between p-4 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        <div>
                          <div className="font-bold text-lg text-gray-700">{reward.name}</div>
                          <div className="text-gray-600 font-medium">
                            {reward.category} • 库存: {reward.stock}
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-bold text-lg bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}
                          >
                            {reward.points.toLocaleString()}
                          </div>
                          <Button
                            size="sm"
                            className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg"
                          >
                            兑换
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Medal className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    6,234
                  </div>
                  <div className="text-gray-600 font-medium">我的积分</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Star className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    白银
                  </div>
                  <div className="text-gray-600 font-medium">当前等级</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    +15%
                  </div>
                  <div className="text-gray-600 font-medium">本月增长</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 绩效分析 */}
          <TabsContent value="performance" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {performanceData.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl">
                      <span className="text-gray-700">{item.category}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 font-bold">
                        {item.trend}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">评分</span>
                      <span className="font-bold text-2xl text-blue-600">{item.score}分</span>
                    </div>
                    <div className="relative">
                      <Progress value={item.score} className="h-4 bg-gray-100" />
                      <div
                        className={`absolute top-0 left-0 h-4 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <div className="text-gray-600 font-medium">
                      {item.score >= 90
                        ? "🌟 优秀"
                        : item.score >= 80
                          ? "👍 良好"
                          : item.score >= 70
                            ? "✅ 合格"
                            : "📈 需改进"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    综合绩效趋势
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      85.8
                    </div>
                    <div className="text-gray-600 font-medium">综合评分</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      +7%
                    </div>
                    <div className="text-gray-600 font-medium">较上月提升</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      A级
                    </div>
                    <div className="text-gray-600 font-medium">绩效等级</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      前15%
                    </div>
                    <div className="text-gray-600 font-medium">部门排名</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 对赌机制 */}
          <TabsContent value="betting" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamChallenges.map((challenge) => (
                <Card
                  key={challenge.id}
                  className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-gray-700">{challenge.title}</CardTitle>
                      <Badge
                        className={
                          challenge.type === "团队挑战"
                            ? "bg-blue-100 text-blue-700 border-blue-300"
                            : "bg-green-100 text-green-700 border-green-300"
                        }
                      >
                        {challenge.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">进度</span>
                      <span className="font-bold text-lg text-blue-600">{challenge.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={challenge.progress} className="h-3 bg-gray-100" />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${challenge.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 font-medium">{challenge.participants}人参与</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                        {challenge.status}
                      </Badge>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                      <div className="text-gray-600 font-medium mb-1">奖励</div>
                      <div className="font-bold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        {challenge.reward}
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${challenge.color} hover:shadow-lg text-white py-3 rounded-xl transition-all duration-300`}
                    >
                      {challenge.type === "团队挑战" ? "加入团队" : "接受挑战"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    对赌统计
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      3
                    </div>
                    <div className="text-gray-600 font-medium">参与挑战</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      2
                    </div>
                    <div className="text-gray-600 font-medium">成功完成</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      ¥8,000
                    </div>
                    <div className="text-gray-600 font-medium">累计奖励</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      67%
                    </div>
                    <div className="text-gray-600 font-medium">成功率</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 收支管理 */}
          <TabsContent value="finance" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      激励预算
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                    ¥125,000
                  </div>
                  <div className="text-gray-600 font-medium mb-4">本月预算</div>
                  <div className="relative">
                    <Progress value={68} className="h-3 bg-gray-100" />
                    <div
                      className="absolute top-0 left-0 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "68%" }}
                    />
                  </div>
                  <div className="text-gray-600 font-medium mt-2">已使用 68%</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      支出统计
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                    ¥85,200
                  </div>
                  <div className="text-gray-600 font-medium mb-2">本月支出</div>
                  <div className="text-green-600 font-medium">较上月 -12%</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      奖励发放
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                    156
                  </div>
                  <div className="text-gray-600 font-medium mb-2">本月发放次数</div>
                  <div className="text-green-600 font-medium">较上月 +23%</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-700">支出分类分析</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">任务奖励</span>
                    <div className="flex items-center gap-4">
                      <div className="relative w-32">
                        <Progress value={45} className="h-3 bg-gray-100" />
                        <div
                          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "45%" }}
                        />
                      </div>
                      <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        ¥38,250
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">绩效奖金</span>
                    <div className="flex items-center gap-4">
                      <div className="relative w-32">
                        <Progress value={30} className="h-3 bg-gray-100" />
                        <div
                          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        ¥25,560
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">福利兑换</span>
                    <div className="flex items-center gap-4">
                      <div className="relative w-32">
                        <Progress value={15} className="h-3 bg-gray-100" />
                        <div
                          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "15%" }}
                        />
                      </div>
                      <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        ¥12,780
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">其他支出</span>
                    <div className="flex items-center gap-4">
                      <div className="relative w-32">
                        <Progress value={10} className="h-3 bg-gray-100" />
                        <div
                          className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "10%" }}
                        />
                      </div>
                      <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        ¥8,610
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 心愿通道 */}
          <TabsContent value="wishes" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishes.map((wish) => (
                <Card
                  key={wish.id}
                  className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                        <Heart className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700">{wish.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">实现进度</span>
                      <span className="font-bold text-lg text-blue-600">{wish.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={wish.progress} className="h-3 bg-gray-100" />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${wish.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${wish.progress}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">预算</span>
                      <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {wish.budget > 0 ? `¥${wish.budget.toLocaleString()}` : "无需预算"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <Badge
                        className={
                          wish.status === "即将实现"
                            ? "bg-green-100 text-green-700 border-green-300"
                            : wish.status === "实施中"
                              ? "bg-blue-100 text-blue-700 border-blue-300"
                              : "bg-orange-100 text-orange-700 border-orange-300"
                        }
                      >
                        {wish.status}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-gray-600 font-medium">{wish.votes}票</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <Heart className="h-4 w-4 mr-2" />
                      支持心愿
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    心愿实现统计
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                      12
                    </div>
                    <div className="text-gray-600 font-medium">已实现心愿</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      8
                    </div>
                    <div className="text-gray-600 font-medium">进行中</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      92%
                    </div>
                    <div className="text-gray-600 font-medium">员工满意度</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      4.8
                    </div>
                    <div className="text-gray-600 font-medium">幸福感评分</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

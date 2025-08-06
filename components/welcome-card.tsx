"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export function WelcomeCard() {
  const currentTime = new Date().toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
  })

  return (
    <Card className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white overflow-hidden relative border-0 shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image src="/logo.png" alt="YanYu Cloud Logo" width={48} height={48} className="rounded-lg" priority />
              </div>
              <div>
                <h1 className="text-2xl font-bold">欢迎回到 YanYu Cloud Sharing E-center</h1>
                <p className="text-blue-100">言语云享e中心 · 让智能运营更简单</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold">管理员</span>，您好！今天是 {currentTime}
              </p>
              <p className="text-blue-100">一言一语一成长；一点一滴一翱翔</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">在线用户: 156</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">今日活跃: +23%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm">AI助手就绪</span>
              </div>
            </div>

            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              开始今日工作
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* 装饰性元素 */}
          <div className="hidden lg:block relative">
            <div className="w-32 h-32 bg-white/10 rounded-full absolute -top-8 -right-8"></div>
            <div className="w-20 h-20 bg-white/20 rounded-full absolute top-8 right-8"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

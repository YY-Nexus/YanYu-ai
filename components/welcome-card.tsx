"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, TrendingUp, Users, Calendar } from 'lucide-react'

export function WelcomeCard() {
  return (
    <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-8 w-8" />
              <h1 className="text-3xl font-bold">欢迎回来，张三！</h1>
            </div>
            <p className="text-orange-100 text-lg">
              今天是美好的一天，让我们一起创造更多价值
            </p>
            <div className="flex items-center space-x-6 text-orange-100">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>2024年1月15日</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>团队成员：24人在线</span>
              </div>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="h-5 w-5" />
                <span className="text-2xl font-bold">+15.2%</span>
              </div>
              <p className="text-orange-100 text-sm">本月业绩增长</p>
            </div>
            <Button 
              variant="secondary" 
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
            >
              查看详细报告
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

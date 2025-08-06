"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BarChart3, Building2, ChevronDown, Headphones, Home, MessageSquare, Settings, Trophy, Zap } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItemProps {
  icon: React.ReactNode
  label: string
  href?: string
  isActive?: boolean
  children?: React.ReactNode
}

function NavItem({ icon, label, href, isActive, children }: NavItemProps) {
  const [open, setOpen] = useState(false)

  if (children) {
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-full">
        <CollapsibleTrigger
          className={cn(
            "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md",
            isActive
              ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-700 dark:text-teal-400 font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-accent",
          )}
        >
          <div className="flex items-center">
            {icon}
            <span className="ml-2">{label}</span>
          </div>
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "transform rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-8 mt-1 space-y-1">{children}</CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link
      href={href || "#"}
      className={cn(
        "flex items-center px-3 py-2 text-sm rounded-md",
        isActive
          ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-700 dark:text-teal-400 font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-accent",
      )}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  )
}

function SubNavItem({ label, href, isActive }: { label: string; href?: string; isActive?: boolean }) {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "flex items-center px-3 py-1.5 text-xs rounded-md",
        isActive
          ? "bg-accent text-accent-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
      )}
    >
      {label}
    </Link>
  )
}

export function MainNavigation() {
  return (
    <div className="flex flex-col h-full space-y-1 py-2">
      <NavItem icon={<Home className="h-4 w-4" />} label="首页概览" isActive />

      {/* 运营管理中心 */}
      <NavItem icon={<Building2 className="h-4 w-4" />} label="运营管理中心">
        <SubNavItem label="组织架构" />
        <SubNavItem label="员工管理" />
        <SubNavItem label="权限管理" />
        <SubNavItem label="考勤排班" />
        <SubNavItem label="文档中心" />
        <SubNavItem label="个人数据" />
      </NavItem>

      {/* 业绩数字看板 */}
      <NavItem icon={<BarChart3 className="h-4 w-4" />} label="业绩数字看板">
        <SubNavItem label="核心业绩指标" />
        <SubNavItem label="营销专项指标" />
        <SubNavItem label="时间维度分析" />
        <SubNavItem label="达成率管理" />
      </NavItem>

      {/* 协作沟通平台 */}
      <NavItem icon={<MessageSquare className="h-4 w-4" />} label="协作沟通平台">
        <SubNavItem label="工作协同" />
        <SubNavItem label="智能运管助理" />
        <SubNavItem label="沟通渠道" />
        <SubNavItem label="学习平台" />
      </NavItem>

      {/* 智能办公助手 */}
      <NavItem icon={<Zap className="h-4 w-4" />} label="智能办公助手">
        <SubNavItem label="流程自动化" />
        <SubNavItem label="时间管理" />
        <SubNavItem label="OA审批" />
        <SubNavItem label="效能工具" />
      </NavItem>

      {/* 员工激励体系 */}
      <NavItem icon={<Trophy className="h-4 w-4" />} label="员工激励体系">
        <SubNavItem label="任务中心" />
        <SubNavItem label="奖励看板" />
        <SubNavItem label="绩效分析" />
        <SubNavItem label="对赌机制" />
        <SubNavItem label="收支管理" />
        <SubNavItem label="心愿通道" />
      </NavItem>

      {/* 客户关系引擎 */}
      <NavItem icon={<Headphones className="h-4 w-4" />} label="客户关系引擎">
        <SubNavItem label="数字人服务" />
        <SubNavItem label="客户档案" />
        <SubNavItem label="需求分析" />
        <SubNavItem label="精准营销" />
      </NavItem>

      {/* 系统设置中心 */}
      <NavItem icon={<Settings className="h-4 w-4" />} label="系统设置中心">
        <SubNavItem label="健康助理" />
        <SubNavItem label="秘钥管理" />
        <SubNavItem label="系统配置" />
        <SubNavItem label="应用下载" />
      </NavItem>
    </div>
  )
}

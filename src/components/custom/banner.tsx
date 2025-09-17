"use client"

import { useEffect, useState } from "react"
import { TicketPercent, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

// Define the launch date - October 31st, 2025
const launchDate = new Date('2025-10-31T00:00:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export const Banner = () => {
  // Banner temporarily disabled
  return null

  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    // Calculate immediately and then every second
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible || timeLeft.isExpired) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-muted text-foreground px-4 py-3">
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <div
            className="bg-primary/15 flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
            aria-hidden="true"
          >
            <TicketPercent className="opacity-80" size={16} />
          </div>
          <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">InTown is currently in demo mode</p>
              <p className="text-muted-foreground text-sm">
                Full app launching October 31st—join the waitlist!
              </p>
            </div>
            <div className="flex gap-3 max-md:flex-wrap">
              <div className="divide-primary-foreground dark:divide-primary-foreground/10 bg-primary/15 flex items-center divide-x rounded-md text-sm tabular-nums">
                {timeLeft.days > 0 && (
                  <span className="flex h-8 items-center justify-center p-2">
                    {timeLeft.days}
                    <span className="text-muted-foreground">d</span>
                  </span>
                )}
                <span className="flex h-8 items-center justify-center p-2">
                  {timeLeft.hours.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">h</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">m</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">s</span>
                </span>
              </div>

              <Button 
                size="sm" 
                className="text-sm" 
                onClick={() => window.open('https://intown.guide', '_blank')}
              >
                Join Waitlist
              </Button>

              
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}

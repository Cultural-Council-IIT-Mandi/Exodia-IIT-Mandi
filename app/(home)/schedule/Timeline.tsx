import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimelineEvent {
  time: string
  title: string
  description: string
  venue: string
}

interface EventDays {
  day1: TimelineEvent[]
  day2: TimelineEvent[]
  day3: TimelineEvent[]
}

const events: EventDays = {
  day1: [
    {
      time: '9:00 AM',
      title: 'Freshers Orientation',
      description: 'A welcoming event for new students, introducing them to the college community, activities, and facilities.',
      venue: 'Main Auditorium, College Campus'
    },
    {
      time: '10:00 AM',
      title: 'TechFest 2021 - Keynote Speech',
      description: 'A keynote speech on the latest tech innovations and trends.',
      venue: 'Tech Lab, College Campus'
    },
    // More events for day1...
  ],
  day2: [
    {
      time: '9:00 AM',
      title: 'Cultural Fest Opening Ceremony',
      description: 'The opening ceremony to kick off the week-long cultural festival.',
      venue: 'College Grounds and Various Halls'
    },
    {
      time: '11:00 AM',
      title: 'Sports Day - Track Events',
      description: 'The start of the track events for Sports Day, with competitions in sprinting and relay races.',
      venue: 'College Sports Complex'
    },
    // More events for day2...
  ],
  day3: [
    {
      time: '1:00 PM',
      title: 'Annual Convocation',
      description: 'The graduation ceremony where degrees are awarded to students completing their academic programs.',
      venue: 'Graduation Hall, College Campus'
    },
    // More events for day3...
  ]
}

const TimelineItem: React.FC<{ event: TimelineEvent }> = ({ event }) => {
  return (
    <motion.div
      className="mb-32 first:mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-xl">
        <div className="text-5xl font-bold mb-4 ">{event.time}</div>
        <ul className="list-disc ml-5 space-y-2">
          <li className="text-xl leading-relaxed">{event.title}</li>
          <li className="text-xl leading-relaxed">{event.description}</li>
        </ul>
      </div>
    </motion.div>
  )
}

const ScrollTimeline: React.FC<{selectedDay: keyof EventDays}> = ({selectedDay}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (timelineRef.current) {
      const { top, height } = timelineRef.current.getBoundingClientRect()
      const clickPosition = e.clientY - top
      const newIndex = Math.floor((clickPosition / height) * events[selectedDay].length)
      const targetIndex = Math.max(0, Math.min(newIndex, events[selectedDay].length - 1))
      setActiveIndex(targetIndex)
      if (containerRef.current) {
        const targetScroll = targetIndex * (containerRef.current.scrollHeight / events[selectedDay].length)
        containerRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        })
      }
    }
  }

  const navigateTimeline = (direction: 'up' | 'down') => {
    setActiveIndex((prev) => {
      const newIndex = direction === 'up' 
        ? Math.max(0, prev - 1)
        : Math.min(events[selectedDay].length - 1, prev + 1)
      
      if (containerRef.current) {
        const targetScroll = newIndex * (containerRef.current.scrollHeight / events[selectedDay].length)
        containerRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        })
      }
      return newIndex
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight } = containerRef.current
        const newIndex = Math.round((scrollTop / scrollHeight) * events[selectedDay].length)
        setActiveIndex(Math.max(0, Math.min(newIndex, events[selectedDay].length - 1)))
      }
    }

    containerRef.current?.addEventListener('scroll', handleScroll)
    return () => containerRef.current?.removeEventListener('scroll', handleScroll)
  }, [selectedDay])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        navigateTimeline('up')
      } else if (e.key === 'ArrowDown') {
        navigateTimeline('down')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="h-[70vh] flex items-center justify-center ">
      <div className="relative w-1/2 h-3/4 px-10  overflow-hidden">
        <div className="absolute  left-4 top-1/2 transform -translate-y-1/2 z-10">
          <div
            ref={timelineRef}
            className="h-[300px] w-0.5 bg-yellow-400 relative cursor-pointer "
            onClick={handleTimelineClick}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={events[selectedDay].length - 1}
            aria-valuenow={activeIndex}
            aria-label="Timeline navigation"
            tabIndex={0}
          >
            <motion.div
              className="absolute w-3 h-3 bg-yellow-400 rounded-full -translate-x-[5px]"
              animate={{ 
                top: `${(activeIndex / (events[selectedDay].length - 1)) * 100}%` 
              }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 15,
                mass: 0.8
              }}
            />
          </div>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3">
          <button
            onClick={() => navigateTimeline('up')}
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-opacity hover:opacity-75 disabled:opacity-50"
            disabled={activeIndex === 0}
            aria-label="↑"
          >
            ↑
          </button>
          <button
            onClick={() => navigateTimeline('down')}
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-opacity hover:opacity-75 disabled:opacity-50"
            disabled={activeIndex === events[selectedDay].length - 1}
            aria-label="↓"
          >
            ↓
          </button>
        </div>
        <div 
          ref={containerRef}
          className="h-full overflow-y-auto px-16 mt-20 scrollbar-hide"
        >
          {events[selectedDay].map((event, index) => (
            <TimelineItem key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollTimeline

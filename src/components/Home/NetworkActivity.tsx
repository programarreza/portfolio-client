"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ContributionDay {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

const NetworkActivity = () => {
  const [contributions, setContributions] = useState<
    ContributionDay[][] | null
  >(null);
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const daysLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const fetchContributions = async () => {
      setIsLoading(true);
      try {
        const url = selectedYear
          ? `https://github-contributions-api.deno.dev/programarreza.json?year=${selectedYear}`
          : "https://github-contributions-api.deno.dev/programarreza.json";

        const response = await fetch(url);
        console.log({ response });
        const data = await response.json();
        // The API returns an array of weeks, where each week is an array of days
        setContributions(data.contributions);
        setTotalCommits(data.totalContributions);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, [selectedYear]);

  const getIntensityClass = (level: string) => {
    switch (level) {
      case "FOURTH_QUARTILE":
        return "bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]";
      case "THIRD_QUARTILE":
        return "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]";
      case "SECOND_QUARTILE":
        return "bg-green-600 opacity-80";
      case "FIRST_QUARTILE":
        return "bg-green-700 opacity-60";
      default:
        return "bg-white/5";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];

    // Add ordinal suffix (st, nd, rd, th)
    const suffix = (d: number) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${month} ${day}${suffix(day)}`;
  };

  const getMonthLabels = () => {
    if (!contributions || contributions.length === 0) return [];
    const labels: { month: string; index: number }[] = [];

    // Always start with the month of the first contribution week
    const firstDate = new Date(contributions[0][0].date);
    let lastMonth = firstDate.getMonth();
    labels.push({ month: months[lastMonth], index: 0 });

    contributions.forEach((week, index) => {
      // Find if any day in this week is the 1st of the month
      const firstOfMonthDay = week.find(
        (day) => new Date(day.date).getDate() === 1,
      );
      if (firstOfMonthDay) {
        const date = new Date(firstOfMonthDay.date);
        const monthIndex = date.getMonth();
        // Only push if it's a different month than the last label
        if (monthIndex !== lastMonth) {
          labels.push({ month: months[monthIndex], index });
          lastMonth = monthIndex;
        }
      }
    });

    return labels;
  };

  return (
    <section className="py-32 px-8 relative bg-slate-950" id="network-activity">
      <div className="max-w-screen-2xl mx-auto">
        <span className="label-md text-purple-400 tracking-[0.3em] block mb-4 font-headline uppercase text-xs font-bold">
          NETWORK ACTIVITY
        </span>
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-12 font-headline uppercase tracking-tight">
          GITHUB_CONTRIBUTIONS
        </h2>

        <div className="glass-prism p-8 md:p-12 bg-slate-900/50 relative overflow-hidden mb-16 rounded-xl border border-white/5 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 min-w-0">
              {/* Header row with months */}
              <div className="relative h-6 mb-2 ml-12 overflow-hidden">
                {getMonthLabels().map((label, i) => (
                  <span
                    key={i}
                    className="absolute text-[10px] text-slate-500 font-headline uppercase tracking-[0.2em]"
                    style={{ left: `${(label.index / 53) * 100}%` }}
                  >
                    {label.month}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 h-32">
                {/* Day labels aligned to 7 rows */}
                <div className="grid grid-rows-7 py-0.5 text-[9px] text-slate-500 font-headline uppercase tracking-tight opacity-50 w-8">
                  <span className="row-start-2">Mon</span>
                  <span className="row-start-4">Wed</span>
                  <span className="row-start-6">Fri</span>
                </div>

                {/* The Grid - Using arbitrary values for 53 columns and 7 rows */}
                <div className="flex-1 grid grid-cols-[repeat(53,1fr)] gap-1 h-full min-w-0">
                  {isLoading
                    ? Array.from({ length: 53 }).map((_, weekIdx) => (
                        <div
                          key={weekIdx}
                          className="grid grid-rows-[repeat(7,1fr)] gap-1"
                        >
                          {Array.from({ length: 7 }).map((_, dayIdx) => (
                            <div
                              key={dayIdx}
                              className="w-full h-full bg-white/5 rounded-sm animate-pulse"
                            />
                          ))}
                        </div>
                      ))
                    : contributions?.map((week, weekIdx) => (
                        <div
                          key={weekIdx}
                          className="grid grid-rows-[repeat(7,1fr)] gap-1"
                        >
                          {week.map((day, dayIdx) => (
                            <motion.div
                              key={day.date}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: weekIdx * 0.01 + dayIdx * 0.001,
                              }}
                              whileHover={{ scale: 1.5, zIndex: 10 }}
                              onMouseEnter={() => setHoveredDay(day)}
                              onMouseLeave={() => setHoveredDay(null)}
                              className={`w-full h-full rounded-sm ${getIntensityClass(day.contributionLevel)} transition-all duration-300 cursor-crosshair relative`}
                            >
                              <AnimatePresence>
                                {hoveredDay?.date === day.date && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: -45, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                                  >
                                    <div className="bg-slate-900/95 border border-white/10 px-4 py-2 rounded-lg shadow-2xl backdrop-blur-md whitespace-nowrap">
                                      <p className="text-[11px] font-headline font-bold text-white tracking-wide">
                                        {day.contributionCount} contributions
                                        <span className="text-slate-500 font-normal ml-2 lowercase">
                                          on {formatDate(day.date)}
                                        </span>
                                      </p>
                                      {/* Arrow */}
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900/95" />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>
                      ))}
                </div>
              </div>
            </div>

            {/* Year Selector */}
            <div className="flex flex-row lg:flex-col gap-2 justify-center lg:justify-start">
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-4 py-2 rounded-md text-[10px] font-headline font-bold transition-all duration-300 ${
                  selectedYear === null
                    ? "bg-primary text-prism-background shadow-[0_0_20px_rgba(0,238,252,0.4)] scale-105"
                    : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
              >
                LAST 12M
              </button>
            </div>
          </div>

          {/* Legend and Sync status */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
            <div className="text-[10px] text-slate-500 font-headline uppercase tracking-widest opacity-40">
              Real-time sync for programarreza@gmail.com
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-[10px] text-slate-500 font-headline uppercase tracking-widest opacity-50">
                <span>LESS</span>
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 bg-white/5 rounded-sm" />
                  <div className="w-3.5 h-3.5 bg-green-900 opacity-40 rounded-sm" />
                  <div className="w-3.5 h-3.5 bg-green-600 opacity-60 rounded-sm" />
                  <div className="w-3.5 h-3.5 bg-green-500 opacity-90 rounded-sm" />
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-sm" />
                </div>
                <span>MORE</span>
              </div>

              <div className="px-5 py-2.5 glass-prism bg-white/5 flex items-center gap-3 border border-white/10 rounded-lg shadow-inner">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,1)]" />
                <span className="text-[10px] text-white font-headline font-bold tracking-[0.2em] uppercase">
                  REAL-TIME SYNC ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-between gap-12">
          <div className="flex gap-16">
            <div className="group">
              <div className="text-3xl font-bold text-white font-headline group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                {isLoading ? "---" : `${totalCommits.toLocaleString()}+`}
              </div>
              <div className="label-md text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-3 opacity-60 font-headline">
                {selectedYear
                  ? `${selectedYear} COMMITS`
                  : "CONTRIBUTIONS (12M)"}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white font-headline group-hover:text-purple-400 transition-colors uppercase tracking-tight">
                48
              </div>
              <div className="label-md text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-3 opacity-60 font-headline">
                REPOSITORIES
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white font-headline group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                12
              </div>
              <div className="label-md text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-3 opacity-60 font-headline">
                OSS PROJECTS
              </div>
            </div>
          </div>

          <button className="group relative px-10 py-4 overflow-hidden border border-white/10 rounded-lg transition-all hover:border-cyan-400/50">
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-[10px] text-slate-300 font-headline font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors">
              PREVIEW INFRASTRUCTURE
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NetworkActivity;

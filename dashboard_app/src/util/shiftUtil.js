export const shifts = [
    {
        name:'FM',
        days:['Mån','Tis','Ons',"Tor",'Fre'],
        start: {hour: 6, minute:0},
        end:{hour:14, minute:12}
    },
    {
        name:'EM',
        days:['Mån','Tis','Ons',"Tor"],
        start: {hour: 14, minute:0},
        end:{hour:23, minute:12}
    },
    {
        name:'EM',
        days:['Fre'],
        start: {hour: 14, minute:0},
        end:{hour:20, minute:0}
    },
    {
        name:'Natt',
        days:['Mån','Tis','Ons',"Tor",'Fre'],
        start: {hour: 23, minute:0},
        end:{hour:6, minute:12}
    } 
]
// Helper function to check if current time is within a shift
function isWithinShift(currentHour, currentMinute, start, end) {
    // Case 1: Normal shift (start and end are within the same day)
    if (start.hour < end.hour || (start.hour === end.hour && start.minute < end.minute)) {
      return (
        (currentHour > start.hour || (currentHour === start.hour && currentMinute >= start.minute)) &&
        (currentHour < end.hour || (currentHour === end.hour && currentMinute <= end.minute))
      );
    }
    // Case 2: Overnight shift (crosses midnight)
    else {
      return (
        (currentHour > start.hour || (currentHour === start.hour && currentMinute >= start.minute)) ||
        (currentHour < end.hour || (currentHour === end.hour && currentMinute <= end.minute))
      );
    }
  }
  
  export function getCurrentShift(time = null) {
    const now = time || new Date();
    const swedishDays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
    const currentDay = swedishDays[now.getDay()]; // ✅ Matches shift data
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();


    // Find all active shifts at the current time
    const activeShifts = shifts.filter(
      (shift) =>
        shift.days.includes(currentDay) &&
        isWithinShift(currentHour, currentMinute, shift.start, shift.end)
    );
  
    // Find the next shift
    const nextShift = shifts.find((shift) => {
      if (!shift.days.includes(currentDay)) return false;
      return (
        currentHour < shift.start.hour ||
        (currentHour === shift.start.hour && currentMinute < shift.start.minute)
      );
    });
  
    // If two shifts overlap, show transition (Shift1 → Shift2)
    if (activeShifts.length === 2) {
      return `${activeShifts[0].name} → ${activeShifts[1].name}`;
    }
  
    // If only one shift is active, return it
    if (activeShifts.length === 1) {
      return activeShifts[0].name;
    }
  
    // If no shift is active but we have a next shift
    return nextShift ? `Waiting for ${nextShift.name}` : "No Active Shift";
  }

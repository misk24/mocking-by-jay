import { EquipmentOption, TimeSlot } from "./type";

export const TIME_SLOTS: TimeSlot[] = [
  { label: "9:00 AM - 12:00 PM", value: "9:00 AM - 12:00 PM" },
  { label: "12:00 PM - 3:00 PM", value: "12:00 PM - 3:00 PM" },
  { label: "3:00 PM - 6:00 PM", value: "3:00 PM - 6:00 PM" },
  { label: "6:00 PM - 9:00 PM", value: "6:00 PM - 9:00 PM" },
  { label: "9:00 PM - 12:00 AM", value: "9:00 PM - 12:00 AM" },
]

export const EQUIPMENT_OPTIONS: EquipmentOption[] = [
  { id: "microphone", label: "Professional Microphone", rate: "$50/session" },
  { id: "mixing", label: "Mixing Console", rate: "$75/session" },
  { id: "monitors", label: "Studio Monitors", rate: "Included" },
  { id: "instruments", label: "Instruments (Guitar, Keys)", rate: "$30/session" },
  { id: "engineer", label: "Audio Engineer", rate: "$100/session" },
]
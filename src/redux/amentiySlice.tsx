import { create } from "zustand";
import TimeSlot from "../types/TimeSlot";
import Amenity from "../types/Amenity";

type StoreType = {
  amenity?: Amenity;
  monthNo?: number | Number;
  yearNo?: number | Number;
  dateNo?: number | Number;
  timeSlot?: TimeSlot;
  bookingCount?: number | Number;
  userId?: string;
  setAmenity: (newValue: Amenity) => void;
  setMonthNo: (newValue: Number | number) => void;
  setYearNo: (newValue: Number | number) => void;
  setDateNo: (newValue: Number | number) => void;
  setTimeSlot: (newValue: number) => void;
  setBookingCount: (newValue: number) => void;
  setUserId: (newValue: string) => void;
};

const useAmenitiesStore = create<StoreType>((set) => ({
  userId: undefined,
  amenity: undefined,
  monthNo: undefined,
  yearNo: undefined,
  dateNo: undefined,
  timeSlot: undefined,
  bookingCount: 0,
  setUserId: (newValue: string) =>
    set(() => ({
      userId: newValue,
    })),
  setAmenity: (newValue: Amenity) =>
    set(() => ({
      amenity: newValue,
    })),
  setMonthNo: (newValue: Number) =>
    set(() => ({
      monthNo: newValue,
    })),
  setYearNo: (newValue: Number) =>
    set(() => ({
      yearNo: newValue,
    })),
  setDateNo: (newValue: Number) =>
    set(() => ({
      dateNo: newValue,
    })),
  setTimeSlot: (newValue: number) =>
    set(() => ({
      timeSlot: { from: newValue, to: newValue + 1 },
    })),
  setBookingCount: (newValue: number) =>
    set(() => ({
      bookingCount: newValue,
    })),
}));

export default useAmenitiesStore;

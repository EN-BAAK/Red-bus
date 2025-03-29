export type AppRoutes = {
  name: string;
  path: string;
};

export type Travel = {
  id: number;
  name: string;
  price: number | null;
  desc: string;
  startDate: Date;
  endDate: Date;
  image?: string;
};

export type TravelFilters = {
  name: string;
  startDate: string;
  endDate: string;
  maxPrice: number | null;
};

export type ExDate = {
  year: number;
  month: number;
  day: number;
};

export type AddTravelForm = {
  name: string;
  price: number | null;
  desc: string;
  startDate: ExDate;
  endDate: ExDate;
};

export type BusBookingSlot = {
  id: number;
  capacity: number;
  travelId: number;
  reserved: number[];
};

export type TravelRoute = {
  id: number;
  capacity: number;
  travelId: number;
  reserved: number[];
  name: string;
};

export type AppRoutes = {
  name: string;
  path: string;
};

export type Travel = {
  id: number;
  name: string;
  price: number;
  desc: string;
  startDate: Date;
  endDate: Date;
  image: string;
};

export type TravelFilters = {
  name: string;
  startDate: string;
  endDate: string;
  maxPrice: number | null;
};

export type Engine = {
  acceleration: number;
  displacement: number;
  price: number;
  power: number;
  vMax: number;
  id: number;
  gearbox: string;
  name: string;
};

export type Color = {
  description: string;
  color: string;
  name: string;
  id: number;
  price: number;
};

export interface DataVehicle {
  vehicleId: number;
  engineId: number;
  colorId: number;
  price: number;
  id: number;
  manufacturer: string;
  model: string;
  engines: Engine[];
  colors: Color[];
}

export interface HiddenSpecsProps {
  engineData: Engine;
  colorData: Color;
  isExpanded: boolean;
}

export interface VehicleInformationProps {
  dataVehicle: DataVehicle;
  exactEngineData: Engine;
  exactColorData: Color;
  isExpanded: boolean;
  onToggleDropdown: () => void;
}

export interface DisplayError {
  dataVehicle: DataVehicle | null;
  isError: boolean;
}

import { VehicleInformationProps } from "./constans/vehicle.types";
import {
  convertKwToKm,
  formatToCurrency,
  replaceDotWithComma,
} from "./utils/utils";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  AdditionalEquipment,
  BasicConfiguration,
  DropdownButtonWrapper,
  SeparatorLine,
  ToggleDropdownButton,
  TotalPrice,
} from "./styled-components/vehicleInformation";

const VehicleInformation = ({
  dataVehicle,
  exactEngineData,
  isExpanded,
  exactColorData,
  onToggleDropdown,
}: VehicleInformationProps) => {
  const basicConfiguration = `
    ${dataVehicle.manufacturer} 
    ${dataVehicle.model} 
    ${replaceDotWithComma(exactEngineData.power)} kW / 
    ${convertKwToKm(exactEngineData.power)} KM 
    ${exactEngineData.gearbox}
  `;

  return (
    <div>
      <h1>Podsumowanie konfiguracji</h1>
      <BasicConfiguration>
        <p>{basicConfiguration}</p>
        <span>{formatToCurrency(dataVehicle!.price)}</span>
      </BasicConfiguration>
      <AdditionalEquipment>
        <p>Wyposażenie dodatkowe</p>
        <span>
          {formatToCurrency(exactEngineData!.price + exactColorData!.price)}
        </span>
      </AdditionalEquipment>
      <SeparatorLine />
      <TotalPrice>
        <h3>Całkowita cena</h3>
        <h3>
          {formatToCurrency(
            dataVehicle!.price + exactEngineData!.price + exactColorData!.price
          )}
        </h3>
      </TotalPrice>
      <DropdownButtonWrapper isExpanded={isExpanded}>
        <ToggleDropdownButton
          onClick={onToggleDropdown}
          isExpanded={isExpanded}
        >
          <KeyboardArrowDownIcon />
          {isExpanded ? "Pokaż mniej" : "Pokaż więcej"}
        </ToggleDropdownButton>
      </DropdownButtonWrapper>
    </div>
  );
};

export default VehicleInformation;

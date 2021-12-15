import { HiddenSpecsProps } from "./constans/vehicle.types";
import {
  replaceDotWithComma,
  getEngineCapacity,
  formatToCurrency,
  convertKwToKm,
} from "./utils/utils";

import {
  HiddenSpecsWrapper,
  SeparatorLine,
  EngineDetails,
  ColorDetails,
  EngineSpecs,
  ColorValue,
  PriceValue,
  ColorName,
} from "./styled-components/vehicleInformation";

const HiddenVehicleInformation = ({
  engineData,
  colorData,
  isExpanded,
}: HiddenSpecsProps) => {
  const engineSpecs = `
    ${convertKwToKm(engineData.power)} KM 
    (${replaceDotWithComma(engineData.power)} kW);
    0-100 km/h: ${engineData.acceleration} s;
    V-max: ${engineData.vMax} km/h;
  `;

  return (
    <HiddenSpecsWrapper isExpanded={isExpanded}>
      <EngineDetails>
        <h3>Wybrany silnik</h3>
        <EngineSpecs>
          <span>{getEngineCapacity(engineData.name)}</span>
          <p>{engineData.gearbox}</p>
        </EngineSpecs>
        <p>{engineSpecs}</p>
      </EngineDetails>
      <SeparatorLine />
      <h3>Wybrany kolor lakieru</h3>
      <ColorDetails>
        <div>
          <ColorName>{colorData.name}</ColorName>
          <p>{colorData.description}</p>
        </div>
        <ColorValue color={colorData.color} />
        <PriceValue>+ {formatToCurrency(colorData.price)}</PriceValue>
      </ColorDetails>
    </HiddenSpecsWrapper>
  );
};

export default HiddenVehicleInformation;

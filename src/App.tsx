import { useCallback, useEffect, useMemo, useState } from "react";

import HiddenVehicleInformation from "./HiddenVehicleInformation";
import { useTypedSelector } from "./hooks/useTypedSelector";
import VehicleInformation from "./VehicleInformation";
import { useActions } from "./hooks/useActions";

import {
  ErrorMessage,
  InnerWrapper,
  SearchWrapper,
  Wrapper,
} from "./styled-components/vehicleInformation";
import Spinner from "./styled-components/spinner";

const displayErrorMessage = ({
  exactColorData,
  exactEngineData,
  dataVehicle,
  isError,
}: any) => {
  if (!exactColorData || !exactEngineData || !dataVehicle || isError) {
    return (
      <ErrorMessage>We coudn't fetch data! Please type a number!</ErrorMessage>
    );
  }
};

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vehicleId, setVehicleId] = useState("1");
  const [value, setValue] = useState("");
  const { searchVehicle } = useActions();

  const {
    data: dataVehicle,
    isError,
    isLoading,
  } = useTypedSelector((state) => state.vehicle);

  useEffect(() => {
    searchVehicle(vehicleId);
  }, [vehicleId]);

  const exactColorData = useMemo(
    () => dataVehicle?.colors.find((color) => color.id === dataVehicle.colorId),
    [dataVehicle]
  );

  const exactEngineData = useMemo(
    () =>
      dataVehicle?.engines.find((engine) => engine.id === dataVehicle.engineId),
    [dataVehicle]
  );

  const onToggleDropdown = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  if (isLoading) {
    return <Spinner />;
  }

  const ErrorMessage = displayErrorMessage({
    exactColorData,
    exactEngineData,
    dataVehicle,
    isError,
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  };

  return (
    <Wrapper>
      <h3>Type a vehicle id</h3>
      <SearchWrapper>
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder="vehicle id"
        />
        <button onClick={() => setVehicleId(value)}>Find vehicle</button>
      </SearchWrapper>
      <InnerWrapper>
        {ErrorMessage}
        {!ErrorMessage && (
          <>
            <VehicleInformation
              dataVehicle={dataVehicle!}
              exactEngineData={exactEngineData!}
              exactColorData={exactColorData!}
              isExpanded={isExpanded}
              onToggleDropdown={onToggleDropdown}
            />
            <HiddenVehicleInformation
              isExpanded={isExpanded}
              engineData={exactEngineData!}
              colorData={exactColorData!}
            />
          </>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default App;

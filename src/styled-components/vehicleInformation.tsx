import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 800px;
  margin: 30px auto 0;
  padding: 20px 30px 0;
  height: 100%;
  border: solid black 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColorValue = styled.div<{ color: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const ToggleDropdownButton = styled.button<{ isExpanded: boolean }>`
  position: absolute;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: white;
  font-size: 18px;
  width: 180px;
  cursor: pointer;
  border: none;
  svg {
    transform: ${({ isExpanded }) => isExpanded && "rotate(180deg)"};
    font-size: 25px;
  }
`;

export const DropdownButtonWrapper = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  border-bottom: 3px solid black;
  border: ${({ isExpanded }) => !isExpanded && "none"};
`;

export const ErrorMessage = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const HiddenSpecsWrapper = styled.div<{ isExpanded: boolean }>`
  overflow: hidden;
  transition: 0.3s;
  max-height: ${({ isExpanded }) => (isExpanded ? "500px" : "0")};
`;

export const SeparatorLine = styled.div`
  width: 100%;
  border-bottom: 2px solid rgba(55, 55, 55, 0.1);
`;

export const ColorDetails = styled(Flex)`
  position: relative;
  margin-bottom 40px;
`;

export const AdditionalEquipment = styled(Flex)`
  margin: 10px 0;
`;

export const EngineSpecs = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const TotalPrice = styled(Flex)`
  margin-bottom: 50px;
`;

export const EngineDetails = styled.div`
  margin-top: 50px;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const BasicConfiguration = styled(Flex)`
  margin-top: 30px;
`;

export const PriceValue = styled.span`
  font-weight: bold;
`;

export const ColorName = styled.p`
  font-weight: bold;
`;

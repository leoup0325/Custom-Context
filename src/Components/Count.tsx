import styled from "styled-components";

import { useSettingsContext } from "../hooks/useSettingsContext";

function Count() {
  const { value, updateValue } = useSettingsContext();

  function onMinus() {
    updateValue((value?.index || 0) - 1);
  }

  function onPlus() {
    updateValue((value?.index || 0) + 1);
  }

  return (
    <Wrapper>
      <CountRender>{value?.index || 0}</CountRender>
      <ButtonGroups>
        <button onClick={onMinus}>-</button>
        <button onClick={onPlus}>+</button>
      </ButtonGroups>
    </Wrapper>
  );
}

export default Count;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const CountRender = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

const ButtonGroups = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

import React, { Component } from "react";
import styled from "styled-components";
import Button from "material-ui/Button";

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
`;

function StyledComponentsButton() {
  return (
    <div>
      <Button>
        Material-UI
      </Button>
      <StyledButton>
        Styled Components
      </StyledButton>
    </div>
  );
}

export default StyledComponentsButton;

import styled from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 16px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
`;

export const LegendColor = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color || "#000"};
  border-radius: 2px; 
`;

export const LegendText = styled.span`
  font-size: 14px;
  color: #333; 
  font-family: Arial, sans-serif;
`;

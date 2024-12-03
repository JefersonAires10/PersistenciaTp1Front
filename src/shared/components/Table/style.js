import styled from "styled-components";
import { Table } from "antd";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%; 
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  margin-bottom: 16px;
`;

export const StyledTable = styled(Table)`
  .ant-table {
    border: none;
  }

  .ant-table-thead > tr > th {
    background-color: #f9f9f9;
    color: #000;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid #e8e8e8;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
    color: #333;
    font-size: 14px;
    border-bottom: 1px solid #e8e8e8;
  }

  .ant-table-tbody > tr:nth-child(odd) {
    background-color: #f7f7f7;
  }

  .ant-table-tbody > tr:hover {
    background-color: #e6f7ff; 
  }
`;

export const DivActions = styled.div`
  display: flex;
  gap: 0.35rem;
  align-items: center;
`;


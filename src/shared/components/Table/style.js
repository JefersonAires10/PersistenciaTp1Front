import styled from "styled-components";

// export const Container = styled.div`
//     margin: 0 auto;
//     width: 80%; // Centraliza a tabela
// `

// export const Div = styled.div`
//     width: 50vw;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: aliceblue;
// `

// export const Header = styled.div`
//     width: 50vw;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;  
// `

// export const Title = styled.h3`
//     font-size: 20px;
//     color: #000;
//     font-family: Arial, sans-serif;
// `

// export const ContainerTable = styled.div`
//     width: 50vw;
// `

import { Table } from "antd";

// Container geral
export const Container = styled.div`
  margin: 0 auto;
  width: 80%; // Centraliza a tabela
`;

// Título
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #000; // Preto
  margin-bottom: 16px;
`;

// Estilo para o Ant Design Table
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

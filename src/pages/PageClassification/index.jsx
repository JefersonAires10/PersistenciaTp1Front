import TableComponent from "../../shared/components/Table";
import HeaderTable from "../../shared/components/HeaderTable";
import Legend from "../../shared/components/Legend";
import * as S from "./style";
import { Divider } from "antd";

const PageClassification = () => {
    return (
        <S.Container>
            <HeaderTable />
            <Divider />
            <TableComponent />
            <Legend />
        </S.Container>
    );
}

export default PageClassification;
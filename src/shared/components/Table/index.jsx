import * as S from "./style";
import createColumns from "./columns.jsx";
import ModalAction from "../ModalActions";
import { useEquipe } from "../../../hooks/EquipeContext.jsx";

const TableComponent = () => {
    const {
        equipes,
        deleteEquipe,
        isModalVisible,
        initialValues,
        handleModalClose,
        handleModalSubmit,
        handleEditEquipe,
    } = useEquipe();

    const columns = createColumns(handleEditEquipe, deleteEquipe);

    return (
        <>
            <S.StyledTable
                dataSource={equipes.map((equipe) => ({ ...equipe, key: equipe.id }))}
                columns={columns}
                pagination={false}
            />
            <ModalAction
                visible={isModalVisible}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
                initialValues={initialValues}
            />
        </>
    );
};

export default TableComponent;

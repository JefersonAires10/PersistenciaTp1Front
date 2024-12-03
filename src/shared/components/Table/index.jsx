import * as S from "./style";
import createColumns from "./columns.jsx";
import ModalAction from "../ModalActions";
import { useEquipe } from "../../../hooks/EquipeContext.jsx";
import EquipeService from "../../services/Equipe/EquipeService.js";
import { notification } from "antd";


const TableComponent = () => {
    const {
        equipes,
        deleteEquipe,
        isModalVisible,
        initialValues,
        setIsModalVisible,
        fetchEquipes,
        handleEditEquipe,
    } = useEquipe();

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleModalSubmit = async (values) => {
        try {
            let response;
            if (initialValues) {
                response = await EquipeService.updateEquipe(initialValues.id, values);
                if (response.status === 200) {
                    notification.success({
                        message: 'Sucesso',
                        description: 'Equipe atualizada com sucesso!',
                    });
                }
            } else {
                response = await EquipeService.createEquipe(values);
                if (response.status === 201) {
                    notification.success({
                        message: 'Sucesso',
                        description: 'Equipe cadastrada com sucesso!',
                    });
                }
            }
            setIsModalVisible(false);
            fetchEquipes();
        } catch (error) {
            console.error(error);
            notification.error({
                message: 'Erro',
                description: 'Ocorreu um erro ao salvar a equipe.',
            });
        }
    };

    const columns = createColumns(handleEditEquipe, deleteEquipe);

    return (
        <S.Container>
            <S.StyledTable
                dataSource={equipes}
                columns={columns}
                pagination={false}
            />
            <ModalAction
                visible={isModalVisible}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
                initialValues={initialValues}
            />
        </S.Container>
    );
};

export default TableComponent;

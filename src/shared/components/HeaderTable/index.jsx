import { Divider, Input, Button, notification } from "antd";
import * as S from "./style";
import { useEquipe } from "../../../hooks/EquipeContext.jsx";
import EquipeService from "../../services/Equipe/EquipeService.js";

const HeaderTable = () => {
    const { handleSearch, searchTerm, setIsModalVisible } = useEquipe();

    const handleDownloadTable = async () => {
        try {
            const response = await EquipeService.downloadTable();
            if (response.status === 200) {
                notification.success({
                    message: 'Sucesso',
                    description: 'Tabela baixada com sucesso!',
                });
            }
        } catch (error) {
            console.error(error);
            notification.error({
                message: 'Erro',
                description: 'Ocorreu um erro ao baixar a tabela.',
            });
        }
    };

    return (
        <>
            <S.Title>TABELA</S.Title>
            <Divider />
            <S.Container>
                <Input
                    placeholder="Pesquisar equipe"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: "200px" }}
                />
                <Button type="primary" onClick={handleDownloadTable}>Baixar Tabela</Button>
                <Button type="primary" onClick={() => setIsModalVisible(true)}>Adicionar Equipe</Button>
            </S.Container>
        </>
    );
};

export default HeaderTable;

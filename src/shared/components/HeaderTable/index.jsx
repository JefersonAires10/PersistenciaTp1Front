import { Divider, Input, Button, notification } from "antd";
import * as S from "./style";
import EquipeService from "../../services/Equipe/EquipeService";
import { useEquipe } from "../../../hooks/EquipeContext";

const HeaderTable = () => {
    const { handleSearch, searchTerm, setIsModalVisible } = useEquipe();

    const handleDownloadTable = async () => {
        const response = await EquipeService.downloadTable();
        if (response.status === 200) {
            notification.success({
                message: 'Sucesso',
                description: 'Tabela baixada com sucesso!',
            });
        }
    };

    return (
        <>
            <S.Title>TABELA</S.Title>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <Input
                    placeholder="Pesquisar equipe"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: "200px" }}
                />
                <Button type="primary" onClick={handleDownloadTable}>Baixar Tabela</Button>
                <Button type="primary" onClick={() => setIsModalVisible(true)}>Adicionar Equipe</Button>
            </div>
        </>
    );
};

export default HeaderTable;
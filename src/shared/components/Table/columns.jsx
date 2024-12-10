import { PencilSimpleLine, TrashSimple } from "phosphor-react";
import { Popconfirm, Tooltip } from "antd";
import * as S from "./style";

const createColumns = (handleEditEquipe, deleteEquipe) => [
    {
        title: "Classificação",
        dataIndex: "rank",
        key: "classification",
        render: (text, record, index) => {
            const colorMap = {
                blue: index < 6,
                cyan: index >= 6 && index < 8,
                green: index >= 8 && index < 13,
                "#333": index >= 13 && index < 16,
                red: index >= 16,
            };

            const color = Object.keys(colorMap).find(key => colorMap[key]);

            return (
                <span style={{ color, fontWeight: "bold" }}>
                    {index + 1}
                </span>
            );
        },
    },
    {
        title: "Nome",
        dataIndex: "nome",
        key: "name",
    },
    {
        title: "Apelido",
        dataIndex: "apelido",
        key: "nickname",
    },
    {
        title: "Estádio",
        dataIndex: "estadio",
        key: "stadium",
    },
    {
        title: "Pontos",
        key: "points",
        render: (record) => record.info_tabela.pontos,
    },
    {
        title: "Jogos",
        dataIndex: "jogos",
        key: "games",
        render: (text, record) => record.info_tabela.jogos,
    },
    {
        title: "Vitórias",
        key: "wins",
        render: (record) => record.info_tabela.vitorias,
    },
    {
        title: "Empates",
        key: "draws",
        render: (record) => record.info_tabela.empates,
    },
    {
        title: "Derrotas",
        key: "losses",
        render: (record) => record.info_tabela.derrotas,
    },
    {
        title: "Qnt. Jogadores",
        dataIndex: "jogadores_registrados",
        key: "player_count",
    },
    {
        key: "actions",
        render: (_, record) => (
            <S.DivActions>
                <Tooltip title="Editar">
                    <PencilSimpleLine size={20} onClick={() => handleEditEquipe(record)} cursor="pointer" />
                </Tooltip>
                <Popconfirm
                    title="Deseja realmente excluir?"
                    onConfirm={() => deleteEquipe(record.id)}
                    onCancel={() => console.log("Cancelar")}
                    okText="Sim"
                    cancelText="Não"
                >
                    <Tooltip title="Excluir">
                        <TrashSimple size={20} cursor="pointer" />
                    </Tooltip>
                </Popconfirm>
            </S.DivActions>
        ),
    },
];


export default createColumns;

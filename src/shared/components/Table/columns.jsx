import { PencilSimpleLine, TrashSimple } from "phosphor-react";
import { Popconfirm } from "antd";
import * as S from "./style";

const createColumns = (handleEditEquipe, deleteEquipe) => [
    {
        title: "Classificação",
        dataIndex: "rank",
        key: "rank",
        render: (text, record, index) => {
            let color = "";

            if (index < 6) color = "blue";
            else if (index < 8) color = "cyan";
            else if (index < 13) color = "green";
            else if (index < 16) color = "#333";
            else color = "red";

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
        key: "nome",
    },
    {
        title: "Apelido",
        dataIndex: "apelido",
        key: "apelido",
    },
    {
        title: "Estádio",
        dataIndex: "estadio",
        key: "estadio",
    },
    {
        title: "Pontos",
        key: "info_tabela.pontos",
        render: (record) => record.info_tabela.pontos,
    },
    {
        title: "Jogos",
        dataIndex: "jogos",
        render: (text, record) => record.info_tabela.jogos,
    },
    {
        title: "Vitórias",
        key: "info_tabela.vitorias",
        render: (record) => record.info_tabela.vitorias,
    },
    {
        title: "Empates",
        key: "info_tabela.empates",
        render: (record) => record.info_tabela.empates,
    },
    {
        title: "Derrotas",
        key: "info_tabela.derrotas",
        render: (record) => record.info_tabela.derrotas,
    },
    {
        title: "Qnt. Jogadores",
        dataIndex: "jogadores_registrados",
        key: "jogadores_registrados",
    },
    {
        key: "actions",
        render: (_, record) => (
            <S.DivActions>
                <PencilSimpleLine size={20} onClick={() => handleEditEquipe(record)} />
                <Popconfirm
                    title="Deseja realmente excluir?"
                    onConfirm={() => deleteEquipe(record.id)}
                    onCancel={() => console.log("Cancelar")}
                    okText="Sim"
                    cancelText="Não"
                >
                    <TrashSimple size={20} />
                </Popconfirm>
            </S.DivActions>
        ),
    },
];

export default createColumns;

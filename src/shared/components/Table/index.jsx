import { useState, useEffect } from "react";
import EquipeService from "../../services/Equipe/EquipeService";
import { Divider, Input, Button, Select } from "antd";
import * as S from "./style";
import Legend from "../Legend";

const TableComponent = () => {
    const [equipes, setEquipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEquipes, setFilteredEquipes] = useState([]);
    const [selectedRange, setSelectedRange] = useState(null);

    const fetchEquipes = async () => {
        try {
            const response = await EquipeService.getAllEquipes();
            const sortedEquipes = response.data.sort((a, b) => b.info_tabela.pontos - a.info_tabela.pontos);
            setEquipes(sortedEquipes);
            setFilteredEquipes(sortedEquipes);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchEquipes();
    }, []);

    useEffect(() => {
        if (!selectedRange) {
            setFilteredEquipes(equipes);
            return;
        }

        const [minPoints, maxPoints] = selectedRange.split("-").map(Number);
        const filtered = equipes.filter(equipe =>
            equipe.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
            equipe.info_tabela.pontos >= minPoints &&
            equipe.info_tabela.pontos <= maxPoints
        );
        setFilteredEquipes(filtered);
    }, [searchTerm, selectedRange, equipes]);

    const handleDownload = () => {
        console.log("Baixar tabela");
    };

    const handleAddEquipe = () => {
        console.log("Adicionar equipe");
    };

    const columns = [
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
        }
    ];

    return (
        <S.Container>
            <S.Title>TABELA</S.Title>
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <Input
                    placeholder="Pesquisar equipe"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: "200px" }}
                />
                <Select
                    value={selectedRange}
                    style={{ width: "200px" }}
                    onChange={setSelectedRange}
                    allowClear
                    placeholder="Filtrar por pontos"
                >
                    <Select.Option value="0-10">0 - 10</Select.Option>
                    <Select.Option value="10-20">10 - 20</Select.Option>
                    <Select.Option value="20-30">20 - 30</Select.Option>
                    <Select.Option value="30-40">30 - 40</Select.Option>
                    <Select.Option value="40-50">40 - 50</Select.Option>
                    <Select.Option value="50-100">50 - 100</Select.Option>
                </Select>

                <Button onClick={handleDownload}>Baixar Tabela</Button>
                <Button type="primary" onClick={handleAddEquipe}>Adicionar Equipe</Button>
            </div>
            <S.StyledTable
                dataSource={filteredEquipes}
                columns={columns}
                pagination={false}
            />
            <Legend />
        </S.Container>
    );
};

export default TableComponent;

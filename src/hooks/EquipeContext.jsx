import { createContext, useState, useContext } from 'react';
import EquipeService from '../shared/services/Equipe/EquipeService';
import PropTypes from 'prop-types';
import { notification } from 'antd';

const EquipeContext = createContext();

export const EquipeProvider = ({ children }) => {
    const [equipes, setEquipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [initialValues, setInitialValues] = useState(null);

    const fetchEquipes = async () => {
        try {
            const response = await EquipeService.getAllEquipes();
            const sortedEquipes = response.data.sort((a, b) => b.info_tabela.pontos - a.info_tabela.pontos);
            setEquipes(sortedEquipes);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditEquipe = (equipe) => {
        setInitialValues(equipe);
        setIsModalVisible(true);
    };

    const handleSearch = async (term) => {
        setSearchTerm(term);
        try {
            const response = await EquipeService.searchEquipe(term);
            if (response.status === 200) {
                setEquipes(response.data);
            } else {
                notification.error({
                    message: 'Erro',
                    description: 'Ocorreu um erro ao buscar a equipe.',
                });
            }
        } catch (error) {
            console.error(error);
            notification.error({
                message: 'Erro',
                description: 'Ocorreu um erro ao buscar a equipe.',
            });
        }
    };

    const deleteEquipe = async (id) => {
        try {
            const response = await EquipeService.deleteEquipe(id);
            if (response.status === 204) {
                notification.success({
                    message: 'Sucesso',
                    description: 'Equipe excluída com sucesso!',
                });
                fetchEquipes();
            } else {
                notification.error({
                    message: 'Erro',
                    description: 'Ocorreu um erro ao excluir a equipe.',
                });
            }
        } catch (error) {
            console.error(error);
            notification.error({
                message: 'Erro',
                description: 'Ocorreu um erro ao excluir a equipe.',
            });
        }
    };

    return (
        <EquipeContext.Provider
            value={{
                equipes,
                setEquipes,
                fetchEquipes,
                handleSearch,
                searchTerm,
                deleteEquipe,
                isModalVisible,
                setIsModalVisible,
                initialValues,
                setInitialValues,
                handleEditEquipe,
            }}
        >

            {children}
        </EquipeContext.Provider>
    );
};

export const useEquipe = () => {
    return useContext(EquipeContext);
};

EquipeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
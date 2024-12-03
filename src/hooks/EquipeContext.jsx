import { createContext, useState, useContext, useCallback } from 'react';
import EquipeService from '../shared/services/Equipe/EquipeService';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import { debounce } from '../utils/debounce';

const EquipeContext = createContext();

export const EquipeProvider = ({ children }) => {
    const [equipes, setEquipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [initialValues, setInitialValues] = useState(null);

    const handleEditEquipe = (equipe) => {
        setInitialValues(equipe);
        setIsModalVisible(true);
    };

    const fetchEquipes = async () => {
        try {
            const response = await EquipeService.getAllEquipes();
            const sortedEquipes = response.data.sort((a, b) => b.info_tabela.pontos - a.info_tabela.pontos);
            setEquipes(sortedEquipes);
        } catch (error) {
            console.error(error);
        }
    };

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

    const handleSearch = useCallback(
        debounce(async (value) => {
            try {
                const response = await EquipeService.searchEquipe(value);
                setEquipes(response.data);
            } catch (error) {
                console.error(error);
            }
        }, 500),
        []
    );

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        handleSearch(value);
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
                handleSearch: handleSearchChange,
                searchTerm,
                deleteEquipe,
                isModalVisible,
                setIsModalVisible,
                initialValues,
                setInitialValues,
                handleEditEquipe,
                handleModalClose,
                handleModalSubmit,
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
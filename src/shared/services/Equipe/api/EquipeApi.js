import api from "../../api/axios";

export default new (class EquipeApi {
    async getAllEquipes() {
        try {
            const response = await api.get('api/equipes')
            return response
        } catch (error) {
            return error
        }
    }

    async createEquipe(data) {
        try {
            const response = await api.post('api/equipes', data)
            return response
        } catch (error) {
            return error
        }
    }

    async updateEquipe(id, data) {
        try {
            const response = await api.put(`api/equipes/${id}`, data)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteEquipe(id) {
        try {
            const response = await api.delete(`api/equipes/${id}`)
            return response
        } catch (error) {
            return error
        }
    }

    async downloadTable() {
        try {
            const response = await api.get('api/equipes/export', {
                responseType: 'blob',
            });
    
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
    
            const link = document.createElement('a');
            link.href = url;
    
            const fileName = 'equipes.zip';
            link.setAttribute('download', fileName);
    
            document.body.appendChild(link);
            link.click();
    
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
            throw error;
        }
    }

    async searchEquipe(searchTerm) {
        try {
            const response = await api.get(`api/equipes/search?search=${searchTerm}`)
            return response
        } catch (error) {
            return error
        }
    }

})()
import EquipeApi from "./api/EquipeApi";

class EquipeService {
    async getAllEquipes() {
        try {
            const response = await EquipeApi.getAllEquipes()
            return response
        } catch (error) {
            return error
        }
    }

    async createEquipe(data) {
        try {
            const response = await EquipeApi.createEquipe(data)
            return response
        } catch (error) {
            return error
        }
    }

    async updateEquipe(id, data) {
        try {
            const response = await EquipeApi.updateEquipe(id, data)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteEquipe(id) {
        try {
            const response = await EquipeApi.deleteEquipe(id)
            return response
        } catch (error) {
            return error
        }
    }

    async downloadTable() {
        try {
            const response = await EquipeApi.downloadTable()
            return response
        } catch (error) {
            return error
        }
    }

   async searchEquipe(searchTerm) {
        try {
            const response = await EquipeApi.searchEquipe(searchTerm)
            return response
        } catch (error) {
            return error
        }
    }
}

export default new EquipeService()
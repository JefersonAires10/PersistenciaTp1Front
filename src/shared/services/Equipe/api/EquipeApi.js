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
})()
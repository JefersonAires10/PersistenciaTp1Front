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
}

export default new EquipeService()
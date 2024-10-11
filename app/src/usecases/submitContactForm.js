import { toast } from "react-toastify";
import Control from "../utils/control";

export class SubmitContactForm {
  constructor(apiService) {
    this.apiService = apiService;
  }

  validateFormData = (formData) => {
    if (
      !Control.isValidInputText(formData.name) ||
      !Control.isValidInputText(formData.message) ||
      !Control.isValidInputText(formData.email) || 
      !Control.isValidEmail(formData.email)
    ) {
      return "Veuillez remplir les champs obligatoires";
    }
    return null;
  };

  async execute(formData, setFormData) {
    try {
      const errorMessage = this.validateFormData(formData);
      
      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }

      // Envoi du formulaire
      
      const res = await this.apiService.post("/api/contact", formData);
      

      if (!res.ok) {
        toast.error("Erreur lors de la soumission du formulaire !");
        return;
      }

      const data = await res.json();
      toast.success(data.message);
      setFormData({
        name: "",
        companyName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Erreur lors de l'exécution de SubmitContactForm:",
        error.toString()
      );
      toast.error("Erreur lors de la soumission du formulaire");
    }
  }
}

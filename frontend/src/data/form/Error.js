const requiredContent = "There is a problem with your password";

const createValidationRule = (content, value = true) => ({ content, value });

const data = {
  password: {
    required: createValidationRule(requiredContent),
    minLength: createValidationRule("Votre mot de passe est trop court !", 10),
    age: { min: 18, max: 99 },
    email: {
      content: "Votre email a un problème",
      pattern: /^[A-Za-z]+$/i,
    },
  },
  email: { required: createValidationRule(requiredContent) },
  tel: { required: createValidationRule(requiredContent) },
  codePostal: { required: createValidationRule(requiredContent) },
  adresse: { required: createValidationRule(requiredContent) },
  ville: { required: createValidationRule(requiredContent) },
  profession: { required: createValidationRule(requiredContent) },
  description: { required: createValidationRule(requiredContent) },
};

export default data;

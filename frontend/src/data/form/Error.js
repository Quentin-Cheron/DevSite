let requiredContent = "There is a probleme with your password";

const data = {
    password: {
        required: {
            content: requiredContent,
            value: true
        },
        minLength: {
            content: "Votre mot de passe est trop court !",
            value: 10
        },
        age: {
            min: 18,
            max: 99
        },
        email: {
            content: "Votre email a un problème",
            pattern: /^[A-Za-z]+$/i
        }
    },
    email: {
        required: {
            content: requiredContent,
            value: true
        },
    },
    tel: {
        required: {
            content: requiredContent,
            value: true
        },
    },
    codePostal: {
        required: {
            content: requiredContent,
            value: true
        },
    },
    adresse: {
        required: {
            content: requiredContent,
            value: true
        },
    },
    ville: {
        required: {
            content: requiredContent,
            value: true
        },
    },
    profession: {
        required: {
            content: requiredContent,
            value: true
        },
    },
    description: {
        required: {
            content: requiredContent,
            value: true
        },
    }
}

export default data;
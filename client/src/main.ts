import {DateWrapper, ListWrapper, StringWrapper, validateAdherent} from "./result";

declare const PR: any;

// ===== Start Model =====
let model = {
    email: {content: new StringWrapper("")},
    nom: {content: new StringWrapper("")},
    prenom: {content: new StringWrapper("")},
    adresse: {
        voie: new StringWrapper(""),
        codePostal: {content: new StringWrapper("")},
        ville: new StringWrapper("")
    },
    telephones: new ListWrapper([
        {
            nom: new StringWrapper(""),
            telephone: {content: new StringWrapper("")}
        },
        {
            nom: new StringWrapper(""),
            telephone: {content: new StringWrapper("")}
        }
    ]),
    adhesions: new ListWrapper([
        {
            periode: {start: new DateWrapper(new Date()), end: new DateWrapper(new Date())},
            membres: new ListWrapper([
                {
                    nom: {content: new StringWrapper("")},
                    prenom: {content: new StringWrapper("")},
                    naissance: null,
                    activite: new StringWrapper("")
                },
                {
                    nom: {content: new StringWrapper("")},
                    prenom: {content: new StringWrapper("")},
                    naissance: null,
                    activite: new StringWrapper("")
                }
            ])
        },
        {
            periode: {start: new DateWrapper(new Date()), end: new DateWrapper(new Date())},
            membres: new ListWrapper([])
        }
    ])
};

// ===== Update model =====

Array.from(document.querySelectorAll("input")).forEach((input: HTMLInputElement) => {
    input.addEventListener("input", () => {
        const name = input.getAttribute("name");
        const value = input.value;
        switch (input.getAttribute("data-type")) {
            case "stringWrapper":
                updateDeep(name, model, {content: new StringWrapper(value)});
                break;
            case "string":
                updateDeep(name, model, new StringWrapper(value));
                break;
            case "date":
                updateDeep(name, model, new DateWrapper(new Date(value)));
                break;
            default:
                // ignore
        }
        reload();
    });
});

function replaceNatives(_, value) {
    if (value instanceof StringWrapper) {
        return value["inner"];
    } else if (value instanceof ListWrapper) {
        return value["inner"];
    } else if (value instanceof DateWrapper) {
        return (value["inner"] as Date).toISOString();
    } else {
        return value;
    }
}

function updateDeep(attribute, object, value) {
    const parts = attribute.split(".");
    let parent = object;
    for (let i = 0; i < parts.length - 1; i++) {
        if (parent) {
            parent = parent[parts[i]];
        }
    }
    if (parent) {
        parent[parts[parts.length - 1]] = value;
    }
}

// ===== Reload =====

function reload() {
    const $input = document.querySelector("#input-json");
    const $output = document.querySelector("#form-result");
    const validations = formValidation(model);
    $input.textContent = JSON.stringify(model, replaceNatives, " ");
    $output.textContent = JSON.stringify(validations, null, " ");
    $input.classList.remove("prettyprinted");
    $output.classList.remove("prettyprinted");
    PR.prettyPrint();
}

reload();

// ===== Form validation =====

function formValidation(input) {
    return validateAdherent(input);
}
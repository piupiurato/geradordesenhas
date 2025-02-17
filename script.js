function gerarSenha() {
    let tamanho = document.getElementById("tamanho").value;
    let incluirMaiusculas = document.getElementById("maiusculas").checked;
    let incluirMinusculas = document.getElementById("minusculas").checked;
    let incluirNumeros = document.getElementById("numeros").checked;
    let incluirSimbolos = document.getElementById("simbolos").checked;

    let caracteres = "";
    if (incluirMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirMinusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirSimbolos) caracteres += "!@#$%^&*()_+[]{}<>?/";

    if (caracteres === "") {
        document.getElementById("mensagem").textContent = "Selecione pelo menos uma opção!";
        return;
    }

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    document.getElementById("senha").value = senha;
    document.getElementById("mensagem").textContent = "Senha gerada com sucesso!";
}

function copiarSenha() {
    let senha = document.getElementById("senha");
    senha.select();
    document.execCommand("copy");
    document.getElementById("mensagem").textContent = "Senha copiada!";
}

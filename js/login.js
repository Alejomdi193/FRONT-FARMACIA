const entrar = document.getElementById('ingresar');

entrar.addEventListener("click", console.log("ingreso correcto"), Validar());

async function Validar() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        Username: username,
        Password: password
    };

    try {
        const response = await fetch("http://localhost:5284/apiFarmacia/User/validate-credentials", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {

            window.location.href = "index.html";
        } else {
            console.error("datos incorrectos");
        }
    } catch (error) {
        console.error("Error en la conoxion", error);
    }
}



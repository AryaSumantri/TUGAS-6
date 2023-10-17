//membuat perogram pengecekan use
//function unutk mrlakukan pengecekan user berdasarkan data user
function Cekuser(data_username, data_passaword){
    let user = [
        ['admin', 'admin123'],
        ['santri', 'santri123'],
        ['hasan', 'hasanganteng'],
    ]

    for (user of user){
        let U = user[0]
        let P = user[1]

        if (U == data_username && P == data_passaword)
        {
            window.location = "home.html"
        }
    }
}


//membuat perogram pengecekan user
function Login(){

    let username = document.getElementById('username').value

    let password = document.getElementById('password').value

    if (username.length < 1 || password.length < 1)
    {
        alert("isi username dan password terlebih dahulu")
    }

    else if (password.length < 8)
    {
        alert("password minimal 8 karakter")
    }

    else{
      Cekuser(username, password)
    }

}

document.getElementById('simpan').addEventListener('click',Login)
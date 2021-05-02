const generateTeam = function (team) {

}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${team[0]}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/dist/styles.css">
</head>
<body>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">${team[0]}</span>
        </div>
      </nav>
    <div class="row">
        <div class="empty col-md-4"></div>
        <div class="card-container col-md-4">
            <div class="card">
                <div class="card-body">
                <h1 class="card-title">${manager.name}</h1>
                <h2 class="card-subtitle mb-2 text-muted">${manager.role}</h2>
                <p class="number">${manager.number}</p>
                <a href="mailto: ${manager.email}">${manager.email}</a>
                <p class="id">${manager.id}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="empty col-md-1"></div>
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">${engineer.name}</h1>
                      <h2 class="card-subtitle mb-2 text-muted">${engineer.role}</h2>
                      <p class="github">${engineer.github}</p>
                      <a href="mailto: ${engineer.email}">${engineer.email}</a>
                      <p class="id">${engineer.id}</p>
                    </div>
                  </div>
            </div>
        <div class="empty col-md-2"></div>
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">${intern.name}</h1>
                      <h2 class="card-subtitle mb-2 text-muted">${intern.role}</h2>
                      <p class="school">${intern.school}</p>
                      <a href="mailto: ${intern.email}">${intern.email}</a>
                      <p class="id">${intern.id}</p>
                    </div>
                  </div>
            </div>
    </div>
</body>
</html>
   `
}
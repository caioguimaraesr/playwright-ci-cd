# Teste de login - Demo Web Shop

O teste usa Page Objects e precisa de uma conta já cadastrada em
https://demowebshop.tricentis.com/register. Use uma conta exclusiva para testes,
sem dados pessoais.

No PowerShell, defina as variáveis para a sessão atual e execute:

```powershell
$env:DEMO_WEBSHOP_EMAIL = "email-da-conta"
$env:DEMO_WEBSHOP_PASSWORD = [System.Net.NetworkCredential]::new('', (Read-Host "Senha da conta" -AsSecureString)).Password
npx playwright test tests/login.spec.js
```

Para executar no GitHub Actions, configure os secrets `DEMO_WEBSHOP_EMAIL` e
`DEMO_WEBSHOP_PASSWORD` no repositório. Não coloque credenciais no arquivo `.env`,
que já é rastreado pelo Git. Capturas, vídeos e traces estão desativados neste
teste para evitar registrar a senha.

## Orquestracao das paginas

A classe [Page](./pages/Page.js) centraliza os Page Objects. A spec importa apenas
essa classe e acessa a pagina de login por `app.login`:

```javascript
const Page = require('./pages/Page');

const app = new Page(page);
await app.login.open();
await app.login.login(email, password);
```

O caminho do import acima considera a raiz do projeto; nas specs dentro de
`tests`, use `../pages/Page`. Ao adicionar outras paginas, importe e instancie
seus Page Objects no construtor de `Page`, usando a mesma instancia do Playwright.

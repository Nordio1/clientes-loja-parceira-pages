# Frontend público de homologação

Protótipo estático para GitHub Pages, criado do zero e sem qualquer arquivo da empresa parceira.

## Propriedades de segurança

- contém apenas dados sintéticos e identificadores `TESTE-*`;
- não possui `fetch`, XHR, formulários com `action` ou qualquer transmissão de dados;
- não solicita CPF, cartão, CVV, senha ou código SMS;
- não usa cookies, `localStorage` ou `sessionStorage`;
- aplica uma política de conteúdo que bloqueia conexões de rede;
- identifica visualmente todas as páginas como ambiente de homologação.

O painel administrativo é uma visualização estática. Uma implementação real deve permanecer atrás de autenticação no servidor e VPN; controles JavaScript no navegador não substituem segurança de backend.

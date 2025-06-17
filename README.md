# InchurchCoreWeb

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 20.0.2.

## Development server

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Angular CLI](https://angular.io/cli) (versão 20)
- [Git](https://git-scm.com/)

### Instalação do Angular CLI (se ainda não tiver)

```bash
npm install -g @angular/cli
```

### Instalação e execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/KaioJesus/inchurch-core-web.git
   ```

2. **Entre no diretório do projeto**
   ```bash
   cd inchurch-core-web
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Execute a aplicação em modo de desenvolvimento**
   ```bash
   npm start ou ng serve
   ```

5. **Acesse a aplicação**
   A aplicação estará rodando em: `http://localhost:4200`

## Fazendo o login na aplicação

![image](https://github.com/user-attachments/assets/c6f8aba8-b5a3-46c5-a3bd-89671fbf76fb)
Utilize um dos dados mockados listados:

```
   const USERS_LIST = [
    {
        name: 'Kaio Jesus',
        email: 'kaiojesus@gmail.com',
        username: 'kaio',
        password: '123456789',
    },
    {
        name: 'Kevin Jesus',
        email: 'kevinjesus@gmail.com',
        username: 'kevin',
        password: '123456789',
    },
    {
        name: 'Kauã Jesus',
        email: 'kauajesus@gmail.com',
        username: 'Kaua',
        password: '123456789',
    },
]
```


## 📝 Scripts disponíveis

- `npm start` - Executa a aplicação em modo de desenvolvimento
- `ng serve` - Executa o servidor de desenvolvimento (alternativa)
- `ng build` - Gera a build de produção
- `ng test` - Executa os testes unitários via Karma


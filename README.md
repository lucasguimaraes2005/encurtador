# URL Shortner
API para encurtador de URL

## Rodando localmente
Clone este repositório
```bash
git clone https://github.com/gbezerradev/url-shortner.git
```

Entre no diretório do projeto
```bash
cd url-shortner
```

Instale as dependências
```bash
npm install
```

Inicie o servidor
```bash
npm run dev
```

Execute a migration pelo endpoint
```http
GET /api/migrations
```

## Documentação da API

#### Retorna todos os links

```http
GET /api/links
```

#### Cria um link encurtado
```http
POST /api/links
```

| Parâmetro      | Tipo     | Descrição                                                   |
| :------------- | :------- | :---------------------------------------------------------- |
| `originalUrl`  | `string` | **Obrigatório**. URL de redirecionamento                    |
| `shortenedUrl` | `string` | **Opcional**.  Texto encurtado, referente ao `originalUrl` |


#### Navega até as URLS originais
```http
GET /:shortenedUrl
```


### Migrations e status

#### Retorna status da aplicação
```http
GET /api/
```

#### Execute as migrations do banco de dados
```http
GET /api/migrations
```

## Autores

- [@lucasguimaraes2005] (https://github.com/lucasguimaraes2005)


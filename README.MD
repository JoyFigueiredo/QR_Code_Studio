<h1 align="center">QR Code Studio 📱</h1>

<p align="center">
Aplicação web para <strong>geração, visualização e download de QR Codes</strong>, permitindo personalização de conteúdo e tamanho, com foco em simplicidade, usabilidade e arquitetura modular.
</p>

<p align="center">
 <img src="https://img.shields.io/badge/status-concluído-green" alt="Status">
  <img src="https://img.shields.io/badge/frontend-Nuxt%203-green" alt="Nuxt 4">
  <img src="https://img.shields.io/badge/docker-configurado-blue" alt="Docker">

</p>

> **Ambiente:** Docker  
> **Tipo:** Aplicação Web  
> **Propósito:** Geração e gerenciamento de QR Codes

---

## 📌 Descrição do Projeto

O **QR Code Studio** é uma aplicação web que permite ao usuário **gerar QR Codes a partir de textos**, visualizar o resultado em tempo real, **ajustar o tamanho do QR Code**, além de **baixar ou imprimir** o código gerado.

---
## 🐳 Docker

Primeiro baixe o Docker de a cordo com seu Sistema:
https://www.docker.com/get-started/

---

## 🐳 Passos para execução com Docker

### 🔹 1. Clonar ou baixar o repositório

```bash
git clone https://github.com/JoyFigueiredo/QR_Code_Studio


cd qr-code-studio
```

Ou baixe o projeto diretamente pelo GitHub e extraia os arquivos.

### 🔹 2. Buildar a imagem Docker

Na raiz do projeto (onde está o Dockerfile):

```
docker build -t qr-code-studio .
```

### 🔹 3. Rodar o container

```
 docker compose up
```

---

## 🌐 Porta da Aplicação

A aplicação sobe, por padrão, na porta:

```
http://localhost:3000
```

---

## ⚙️ Variáveis de Ambiente

Atualmente, a aplicação **não exige variáveis de ambiente obrigatórias** para funcionar.

Valores padrão utilizados:

- **PORT:** `3000`
- **API de geração de QR Code:** pública (goQR.me), sem necessidade de autenticação

Caso seja necessário futuramente, o projeto pode ser facilmente adaptado para uso de variáveis de ambiente no Nuxt.

---

## 🧱 Arquitetura e Decisões Técnicas

A aplicação foi desenvolvida utilizando **Nuxt 4 **, seguindo uma arquitetura baseada em **componentes reutilizáveis** e **composables**.

### Estrutura principal

- **Componentes (`/components`)**
  - `QrForm`: responsável pela entrada do texto e do tamanho do QR Code
  - `QrPreview`: renderiza o QR Code dinamicamente
  - `QrActions`: ações de download e impressão
  - `QrHistory`: exibe e gerencia o histórico dos últimos QR Codes

- **Composables (`/composables`)**
  - `useQrCode`: centraliza a lógica de negócio, controle de estado, histórico e ações do QR Code

Essa separação promove melhor organização, reutilização de código e facilita a manutenção do projeto.

---

## 🔌 Integração com a API do goQR.me

A geração dos QR Codes é feita por meio da API pública do **goQR.me**, utilizando requisições via URL.

Formato da URL utilizada:
https://api.qrserver.com/v1/create-qr-code/?size=WIDTHxHEIGHT&data=CONTEUDO

Onde:

- `WIDTHxHEIGHT` representa o tamanho definido pelo usuário
- `CONTEUDO` corresponde ao texto digitado, codificado para URL

A URL gerada é utilizada diretamente como `src` de uma tag `<img>`, permitindo:

- Visualização imediata do QR Code
- Download da imagem gerada
- Impressão via navegador

A API não requer autenticação, o que simplifica a integração e reduz a complexidade da aplicação.

---

## 👩‍💻 Autora

**Joice Barros de Figueiredo**  
Graduada em área de Engenharia da Computação
GitHub: https://github.com/JoyFigueiredo

---

## 📄 Licença

Este projeto possui caráter de processo seletivo da Empresa Supranet.  
O uso total ou parcial do código é permitido para fins educacionais, desde que citada a autoria.

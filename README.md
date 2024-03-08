# categoria-aggiunta-pagina

Pagina Aggiunta Categoria
Campi del Form:
Nome Categoria (string): Campo di testo per il nome della categoria. È importante assicurarsi che il nome sia unico per evitare confusione.
Descrizione (string): Un'area di testo opzionale per fornire ulteriori dettagli sulla categoria, come le linee guida su cosa dovrebbe essere incluso in questa categoria.
Elementi Addizionali:
Bottone Salva: Utilizzato per salvare la nuova categoria o le modifiche apportate a una esistente. Dopo il salvataggio, l'utente può essere reindirizzato all'elenco delle categorie con un messaggio di conferma che mostra il successo dell'operazione.
Bottone Annulla: Permette di uscire dalla pagina di aggiunta/modifica senza salvare le modifiche. Questo bottone può riportare l'utente all'elenco delle categorie o alla pagina precedente.
Validazione del Form: Prima di salvare, il sistema dovrebbe controllare che il nome della categoria non sia vuoto e che non esista già una categoria con lo stesso nome, per mantenere l'unicità e la chiarezza nell'organizzazione delle categorie.
L'utilizzo di una nuova pagina per questa funzionalità consente di gestire in modo più chiaro e strutturato le categorie, che sono un elemento fondamentale per l'organizzazione e la ricerca degli articoli nel magazzino. Questa scelta aiuta a prevenire errori e rende più intuitiva l'interazione con il sistema.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/categoria-aggiunta-pagina.git
cd categoria-aggiunta-pagina
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

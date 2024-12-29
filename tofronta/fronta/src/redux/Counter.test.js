// src/redux/Counter.test.js
import React from 'react'; // Importation de React
import { render, screen } from '@testing-library/react'; // Importation des utilitaires de testing
import { Provider } from 'react-redux'; // Importation du Provider pour Redux
import configureStore from 'redux-mock-store'; // Importation pour créer un store simulé
import Counter from './counter'; // Importation du composant à tester

// Configuration du store simulé
const mockStore = configureStore([]);

describe('Counter Component', () => { // Début du bloc de test pour le composant Counter
  let store;

  beforeEach(() => { // Avant chaque test, initialiser le store
    store = mockStore({
      count: 100, // État initial simulé
    });
  });

  test('renders the counter with the initial count', () => { // Test pour vérifier l'affichage initial
    render(
      <Provider store={store}> // Envelopper le composant avec le Provider
        <Counter /> // Rendu du composant Counter
      </Provider>
    );

    // Vérification que le compteur affiche le bon nombre initial
    expect(screen.getByText(/compteur : 100/i)).toBeInTheDocument();
  });

  test('increments the counter', () => { // Test pour vérifier l'incrémentation
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    getByText('+').click(); // Simuler un clic sur le bouton +

    // Vérification que l'action d'incrémentation a été dispatchée
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'INCREMENT' }]); // Vérification de l'action envoyée
  });

  test('decrements the counter', () => { // Test pour vérifier la décrémentation
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    getByText('-').click(); // Simuler un clic sur le bouton -

    // Vérification que l'action de décrémentation a été dispatchée
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'DECREMENT' }]); // Vérification de l'action envoyée
  });
});

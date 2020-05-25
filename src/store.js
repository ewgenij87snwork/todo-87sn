import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: null,
    todos: [
      {
        name: 'First part of Todo',
        colors: ['#8a7876', '#32201c'],
        category: 'I',
        tasks: [
          {
            id: 1,
            title: 'Make array of Todos in Store (12)',
            done: false,
          },
          {
            id: 2,
            title: 'Todo-List ',
            done: false,
          },
          {
            id: 3,
            title: 'Todo ',
            done: false,
          },
          {
            id: 4,
            title: 'Todo-Tasks ',
            done: false,
          },
        ],
      },
      {
        name: 'Second part of Todo',
        category: 'I',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 5,
            title: 'Page Todo-Details',
            done: false,
          },
          {
            id: 6,
            title: 'Colorized Todo',
            done: false,
          },
          {
            id: 7,
            title: 'System: "Selected"',
            done: false,
          },
        ],
      },
      {
        name: 'Third part of Todo',
        category: 'I',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 8,
            title: 'Floating Buttons',
            done: false,
          },
          {
            id: 9,
            title: 'System: "Storage"',
            done: false,
          },
          {
            id: 10,
            title: 'System: "Transition"',
            done: false,
          },
        ],
      },
      {
        name: 'Health',
        category: 'II',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 11,
            title: 'Ride a bike in the woods',
            done: false,
          },
          {
            id: 12,
            title: 'Make a run',
            done: false,
          },
          {
            id: 13,
            title: 'Find something new for my Health',
            done: false,
          },
          {
            id: 14,
            title: '...',
            done: false,
          },
        ],
      },
      {
        name: 'VSCode setup',
        category: 'III',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 15,
            title: 'Extension: Translate',
            done: false,
          },
          {
            id: 16,
            title: 'Extension: Pomodoro Timer with sound',
            done: false,
          },
          {
            id: 17,
            title: 'Extension: +',
            done: false,
          },
          {
            id: 18,
            title: 'Extension: ++',
            done: false,
          },
        ],
      },
      {
        name: 'Reading',
        category: 'III',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 19,
            title: 'Read 100 page of Karnegi K.',
            done: false,
          },
          {
            id: 20,
            title: 'Read 100 page of "My productive year"',
            done: false,
          },
          {
            id: 21,
            title: 'Read some 5 article from Habr',
            done: false,
          },
          {
            id: 22,
            title: 'Read some 5 article about realization logic in React',
            done: false,
          },
          {
            id: 23,
            title: 'Read some 10 not specific article from Medium',
          },
        ],
      },
      {
        name: 'Work',
        category: 'I',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 24,
            title: 'Find and answer at 3 vacancy in LinkedIn',
            done: false,
          },
          {
            id: 25,
            title: 'Find and answer at 3 vacancy in DOU',
            done: false,
          },
          {
            id: 26,
            title: 'Make some test task from vacancy',
            done: false,
          },
          {
            id: 27,
            title: 'Make review some decision from popular site or git-repo',
          },
        ],
      },
      {
        name: 'Home',
        category: 'III',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            id: 28,
            title: 'Room cleaning',
            done: false,
          },
          {
            id: 29,
            title: 'Laptop inside cleaning ',
            done: false,
          },
          {
            id: 30,
            title: 'Do something other than clean up ...',
            done: false,
          },
          {
            id: 31,
            title: 'And find something other what can I do here...',
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {
    selectTodo(state, selected) {
      state.selected = selected;
      state.unselect = null;
    },
    unselectTodo(state) {
      state.unselect = state.selected;
      state.selected = null;
    },
  },
});

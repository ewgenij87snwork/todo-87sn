import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: null,
    unselect: null,
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
            deleted: false,
          },
          {
            id: 2,
            title: 'Todo-List ',
            done: false,
            deleted: false,
          },
          {
            id: 3,
            title: 'Todo ',
            done: false,
            deleted: false,
          },
          {
            id: 4,
            title: 'Todo-Tasks ',
            done: false,
            deleted: false,
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
            deleted: false,
          },
          {
            id: 6,
            title: 'Colorized Todo',
            done: false,
            deleted: false,
          },
          {
            id: 7,
            title: 'System: "Selected"',
            done: false,
            deleted: false,
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
            deleted: false,
          },
          {
            id: 9,
            title: 'System: "Storage"',
            done: false,
            deleted: false,
          },
          {
            id: 10,
            title: 'System: "Transition"',
            done: false,
            deleted: false,
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
            deleted: false,
          },
          {
            id: 12,
            title: 'Make a run',
            done: false,
            deleted: false,
          },
          {
            id: 13,
            title: 'Find something new for my Health',
            done: false,
            deleted: false,
          },
          {
            id: 14,
            title: '...',
            done: false,
            deleted: false,
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
            deleted: false,
          },
          {
            id: 16,
            title: 'Extension: Pomodoro Timer with sound',
            done: false,
            deleted: false,
          },
          {
            id: 17,
            title: 'Extension: +',
            done: false,
            deleted: false,
          },
          {
            id: 18,
            title: 'Extension: ++',
            done: false,
            deleted: false,
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
            deleted: false,
          },
          {
            id: 20,
            title: 'Read 100 page of "My productive year"',
            done: false,
            deleted: false,
          },
          {
            id: 21,
            title: 'Read some 5 article from Habr',
            done: false,
            deleted: false,
          },
          {
            id: 22,
            title: 'Read some 5 article about realization logic in React',
            done: false,
            deleted: false,
          },
          {
            id: 23,
            title: 'Read some 10 not specific article from Medium',
            deleted: false,
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
            deleted: false,
          },
          {
            id: 25,
            title: 'Find and answer at 3 vacancy in DOU',
            done: false,
            deleted: false,
          },
          {
            id: 26,
            title: 'Make some test task from vacancy',
            done: false,
            deleted: false,
          },
          {
            id: 27,
            title: 'Make review some decision from popular site or git-repo',
            deleted: false,
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
            deleted: false,
          },
          {
            id: 29,
            title: 'Laptop inside cleaning ',
            done: false,
            deleted: false,
          },
          {
            id: 30,
            title: 'Do something other than clean up ...',
            done: false,
            deleted: false,
          },
          {
            id: 31,
            title: 'And find something other what can I do here...',
            deleted: false,
          },
        ],
      },
      {
        name: 'TODO: 26/05',
        category: 'I',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            title: 'Make a return button',
            done: false,
            deleted: false,
          },
          {
            title: 'Set the size and position of TodoDetail via js',
            done: false,
            deleted: false,
          },
          {
            title: 'Remove the cursor when hover on all TodoDetail',
            done: false,
            deleted: false,
          },
        ],
      },
      {
        name: 'TODO: 28/05',
        category: 'I',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            title: 'Make checkbox for Tasks in TodoDetail',
            done: true,
            deleted: false,
          },
          {
            title:
              'Make "checked"/"not checked" in one line when many symbols in string',
            done: true,
            deleted: false,
          },
          {
            title: "Don't display checkbox and fa-trash from Tasks in TodoList",
            done: true,
            deleted: false,
          },
          {
            title:
              "In mobile don't display symbol 'checked'. And must be remove line after last task. And make some expirement with 'will-change' (scss). In mobile don't display symbol 'checked'.",
            done: true,
            deleted: false,
          },
        ],
      },
      {
        name: 'TODO: 29/05',
        category: 'I',
        colors: ['#8a7876', '#32201c'],
        tasks: [
          {
            title: 'In mobile display selected Todo does not fit in height',
            done: false,
            deleted: false,
          },
          {
            title: 'Make editing Tasks',
            done: false,
            deleted: false,
          },
          {
            title: 'Make editing Title',
            done: true,
            deleted: false,
          },
          {
            title:
              "In mobile don't display symbol 'checked'. And must be remove line after last task. And make some expirement with 'will-change' (scss). In mobile don't display symbol 'checked'. And must be remove line after last task. And make some expirement with 'will-change' (scss).",
            done: false,
            deleted: false,
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
      document.body.classList.add('modal-open');
    },
    unselectTodo(state) {
      state.unselect = state.selected;
      state.selected = null;
      document.body.classList.remove('modal-open');
    },
    deleteTask(_, { task }) {
      task.deleted = true;
    },
  },
});

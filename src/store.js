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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 2,
            title: 'Todo-List ',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 3,
            title: 'Todo ',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 4,
            title: 'Todo-Tasks ',
            editing: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 6,
            title: 'Colorized Todo',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 7,
            title: 'System: "Selected"',
            editing: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 9,
            title: 'System: "Storage"',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 10,
            title: 'System: "Transition"',
            editing: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 12,
            title: 'Make a run',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 13,
            title: 'Find something new for my Health',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 14,
            title: '...',
            editing: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 16,
            title: 'Extension: Pomodoro Timer with sound',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 17,
            title: 'Extension: +',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 18,
            title: 'Extension: ++',
            editing: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 20,
            title: 'Read 100 page of "My productive year"',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 21,
            title: 'Read some 5 article from Habr',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 22,
            title: 'Read some 5 article about realization logic in React',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 23,
            title: 'Read some 10 not specific article from Medium',
            editing: false,
            done: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 25,
            title: 'Find and answer at 3 vacancy in DOU',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 26,
            title: 'Make some test task from vacancy',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 27,
            title: 'Make review some decision from popular site or git-repo',
            editing: false,
            done: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 29,
            title: 'Laptop inside cleaning ',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 30,
            title: 'Do something other than clean up ...',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            id: 31,
            title: 'And find something other what can I do here...',
            editing: false,
            done: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            title: 'Set the size and position of TodoDetail via js',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            title: 'Remove the cursor when hover on all TodoDetail',
            editing: false,
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
            editing: false,
            done: true,
            deleted: false,
          },
          {
            title:
              'Make "checked"/"not checked" in one line when many symbols in string',
            editing: false,
            done: true,
            deleted: false,
          },
          {
            title: "Don't display checkbox and fa-trash from Tasks in TodoList",
            editing: false,
            done: true,
            deleted: false,
          },
          {
            title:
              "In mobile don't display symbol 'checked'. And must be remove line after last task. And make some expirement with 'will-change' (scss). In mobile don't display symbol 'checked'.",
            editing: false,
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
            editing: false,
            done: false,
            deleted: false,
          },
          {
            title: 'Make editing Tasks',
            editing: false,
            done: false,
            deleted: false,
          },
          {
            title: 'Make editing Title',
            editing: false,
            done: true,
            deleted: false,
          },
          {
            title:
              "In mobile don't display symbol 'checked'. And must be remove line after last task. And make some expirement with 'will-change' (scss). In mobile don't display symbol 'checked'. And must be remove line after last task. And make some expirement with 'will-change' (scss).",
            editing: false,
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
    saveTask(_, { task }) {
      task.editing = false;
    },
    updateTitle(_, { task, value }) {
      task.title = value;
    },
  },
});

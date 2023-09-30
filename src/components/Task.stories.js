// import React from 'react';
// import Task from './Task';

// // 스토리북은 컴포넌트와 그 하위 스토리, 총 두 가지 기본 단계로 구성되어 있다.
// // 각 스토리는 해당 컴포넌트에 대응된다.
// // 얼마든지 필요한 만큼의 스토리를 컴포넌트별로 작성 가능하다.

// // 스토리북에게 우리가 문서화하고 있는 컴포넌트에 대해 알려주기 위해
// // 아래 사항들을 포함하는 default export를 생성한다.
// // 1. component = 해당 컴포넌트
// // 2. title = 스토리북 앱의 사이드바에서 나타내는 컴포넌트 이름

// export default {
//   component: Task,
//   title: 'Task',
// };

// const Template = (args) => <Task {...args} />;

// export const Default = Template(bind({}));
// Default.args = {
//   task: {
//     id: '1',
//     title: 'Test Task',
//     state: 'TASK_INBOX',
//     updatedAt: new Date(2021, 0, 1, 9, 0),
//   },
// };

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };

import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

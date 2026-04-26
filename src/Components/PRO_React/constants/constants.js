// Compound Components
export const tabsData = [
  {
    id: 0,
    label: '💻 React',
    title: 'React.js',
    description:
      'React-ը Facebook-ի կողմից ստեղծված JavaScript գրադարանի համար, ինտերակտիվ հավելվածների կառուցման համար:',
  },
  {
    id: 1,
    label: '📱 Vue',
    title: 'Vue.js',
    description: 'Vue.js-ը շատ հեղուկ եւ հեշտ շրջանակ, որ լավ փաստաթղթավորված:',
  },
  {
    id: 2,
    label: '🎨 Svelte',
    title: 'Svelte',
    description:
      'Svelte-ը ժամանակակից շրջանակ, որ վերածելի ժամանակ իջեցում ունի:',
  },
  {
    id: 3,
    label: '🎨 HTML',
    title: 'HTML',
    description:
      'HTML-ը վերջին տարին հայտնի է լինելու համար, որպես վեբ էջերի կառուցման հիմք:',
  },
];

// Slots Pattern
export const cardsConfig = [
  {
    id: 1,
    className: 'card-premium',
    headerTitle: '💼 Project Management',
    bodyContent: 'project',
    footerContent: "price: $99/month",
  },
  {
    id: 2,
    className: 'card-simple',
    headerTitle: '🎯 Analytics',
    bodyContent: 'analytics',
    footerContent: "price: $49/month",
  },
  {
    id: 3,
    className: 'card-minimal',
    headerTitle: '⚡ Performance',
    bodyContent: 'lorem40 ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

// Observer Pattern
export const notifications = [
  {
    type: 'success',
    buttonText: 'Send Success',
    title: '✅ Success',
    message: 'Operation completed!',
    icon: '🎉',
  },
  {
    type: 'error',
    buttonText: 'Send Error',
    title: '❌ Error',
    message: 'Something went wrong!',
    icon: '⚠️',
  },
  {
    type: 'info',
    buttonText: 'Send Info',
    title: 'ℹ️ Info',
    message: 'Here is some info!',
    icon: 'ℹ️',
  },
  {
    type: 'warning',
    buttonText: 'Send Warning',
    title: '⚠️ Warning',
    message: 'Be careful!',
    icon: '⚠️',
  },
];

// Portal Pattern
export const demoModals = [
  {
    id: 'notification',
    buttonText: '📢 Show Notification',
    buttonClass: 'primary',
    title: '🎉 Notification',
    content: 'lorem40 ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'alert',
    buttonText: '✅ Show Alert',
    buttonClass: 'success',
    title: '⚠️ Alert',
    content: 'Portals are useful for modals and dropdowns.',
  },
  {
    id: 'form',
    buttonText: '📝 Show Form',
    buttonClass: 'info',
    title: '📝 Form',
    content: 'Form content here',
  },
];

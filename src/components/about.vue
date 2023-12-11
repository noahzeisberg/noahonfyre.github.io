<template>
  <section class="grid place-items-center grid-cols-2 grid-rows-1 px-24 py-64">
    <div class="flex flex-col gap-3">
      <h1>Hello, I am <span class="text-primary-600">Noah.</span></h1>

      <p class="text-lg">
        I'm a 14 year old software developer from Germany.
        I like to develop web applications, CLIs and other various stuff.
        Please consider checking out my GitHub repositories and my other social media accounts.
      </p>

      <div class="flex gap-3">
        <button class="bg-primary-600 hover:bg-primary-500 flex items-center gap-3 rounded-lg text-sm font-bold py-2.5 px-6 ease-in-out duration-150">
          <span>View projects</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
          </svg>
        </button>

        <button class="bg-secondary-800 hover:bg-secondary-700 flex items-center gap-3 rounded-lg text-sm font-bold py-2.5 px-6 ease-in-out duration-150">
          <span>View links</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
          </svg>
        </button>
      </div>
    </div>

    <div></div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const strings = ref(["Web developer", "Backend developer"]);
const currentIndex = ref(0);

const updateText = () => {
  currentIndex.value = (currentIndex.value + 1) % strings.value.length;
};

const startInterval = () => {
  setInterval(() => {
    updateText()
  }, 1000);
};

startInterval()
</script>
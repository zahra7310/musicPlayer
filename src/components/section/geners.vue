<template>
  <div>
    <h3
      class="text-2xl text-gray-300 py-8 pt-3 font-semibold flex items-center"
    >
      Genres
      <svg
        width="25"
        height="25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style="transform: rotate(0deg); color: #fff; margin-left: 5px"
      >
        <path
          fill="#ccc"
          fill-rule="nonzero"
          d="M12.92 12L8.37 7.25a1.36 1.36 0 0 1 0-1.864 1.225 1.225 0 0 1 1.786 0l5.495 5.735a1.282 1.282 0 0 1 0 1.758l-5.495 5.735a1.225 1.225 0 0 1-1.786 0 1.36 1.36 0 0 1 0-1.865L12.92 12z"
        ></path>
      </svg>
    </h3>
    <div class="w-full pb-10 grid-flow-row gap-6  lg:grid-cols-5 sm:grid-cols-2 grid float-left cursor-pointer">
      <div v-for="gener in $store.state.geners" key="gener.id" class="inline float-left text-center text-white rounded-lg bg-gradient-to-r from-blue-900 to-purple-500" >
        <router-link to="/podcasts">
          <span
            :key="gener.id"
            class="w-full p-5 inline-block"
          >
            {{ gener }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
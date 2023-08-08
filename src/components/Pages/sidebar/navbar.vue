<template>
  <div>
    <div
      class="rounded-r bg-zinc-900 xl:hidden flex justify-between w-full p-6 items-center"
    >
      <div class="flex justify-between items-center space-x-3">
        
        <img src="src/assets/images/logo.png">
        <p class="text-2xl leading-6 text-white">OvonRueden</p>
      </div>
      <div aria-label="toggler" class="flex justify-center items-center">
        <button
          aria-label="open"
          id="open"
          onclick="showNav(true)"
          class="hidden focus:outline-none focus:ring-2"
        >
          <svg
            class=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          aria-label="close"
          id="close"
          onclick="showNav(true)"
          class="focus:outline-none focus:ring-2"
        >
          <svg
            class=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-full flex">
      <div
        id="Main"
        class="top-0 min-h-screen transform xl:translate-x-0 ease-in-out transition duration-500 sm:w-64 flex justify-start items-startxs w-full bg-gray-900 flex-col fixed"
      >
        <div class="hidden xl:flex justify-start p-6 items-center space-x-3">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
              fill="white"
            />
          </svg>
          <p class="text-2xl leading-6 text-white">OvonRueden</p>
        </div>
        <div class="mt-6 flex flex-col justify-start items-center w-full pb-5">
          <div
            class="p-3 border-gray-600 border-b flex jusitfy-start items-center space-x-6 w-full focus:outline-none focus:text-indigo-400 text-white rounded"
          >
            <img width="30" height="35" src="src/assets/images/icons/podcast-64.png">
            <router-link to="/">
              <p class="text-base leading-4">Podcasts</p>
            </router-link>
          </div>
          <div
            class="border-gray-600 p-3 border-b flex jusitfy-start items-center space-x-6 w-full focus:outline-none focus:text-indigo-400 text-white rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.2"
              viewBox="0 0 64 64"
              width="30"
              height="30"
            >
              <defs>
                <image
                  width="60"
                  height="50"
                  id="img1"
                  href="data:image/png;base64,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"
                />
              </defs>
              <use id="Background" href="#img1" x="9" y="6" />
            </svg>
            <router-link to="/music">
              <p class="text-base leading-4">Music</p>
            </router-link>
          </div>
          <div
            class="border-gray-600 p-3 border-b flex jusitfy-start items-center space-x-6 w-full focus:outline-none focus:text-indigo-400 text-white rounded"
          >
            <!-- <svg
              class="fill-stroke"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> -->
            <img width="30" height="35" src='/src/assets/images/icons/music-folder.png'>
            <router-link to="">
              <p class="text-base leading-4">Alboms</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-full bg-gray-800 ml-64">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
const baseUrl= window.location.origin;
let icon1 = document.getElementById("icon1");
let menu1 = document.getElementById("menu1");
const showMenu1 = (flag) => {
  if (flag) {
    icon1.classList.toggle("rotate-180");
    menu1.classList.toggle("hidden");
  }
};
let icon2 = document.getElementById("icon2");

const showMenu2 = (flag) => {
  if (flag) {
    icon2.classList.toggle("rotate-180");
  }
};
let icon3 = document.getElementById("icon3");

const showMenu3 = (flag) => {
  if (flag) {
    icon3.classList.toggle("rotate-180");
  }
};

let Main = document.getElementById("Main");
let open = document.getElementById("open");
let close = document.getElementById("close");

const showNav = (flag) => {
  if (flag) {
    Main.classList.toggle("-translate-x-full");
    Main.classList.toggle("translate-x-0");
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
  }
};

export default {
  name: "Navbar",
};
</script>
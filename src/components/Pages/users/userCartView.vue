<template>
  <div class="flex items-center gap-x-6">
    <router-link :to="{ name: 'showuser', params: { id: user.id } }">
      <img
        class="h-16 w-16 rounded-full"
        src="../../../assets/images/awatar.jpeg"
        :alt="user.name"
      />
    </router-link>

    <div>
      <router-link :to="{ name: 'showuser', params: { id: user.id } }">
        <h3
          class="text-base font-semibold leading-7 tracking-tight text-gray-900"
        >
          Name: {{ user.name }}
        </h3>
      </router-link>
      <p class="text-sm font-semibold leading-6 text-indigo-600">
        User name: {{ user.username }}
      </p>
      <p class="text-sm font-semibold leading-6 text-indigo-600">
        Email: {{ user.email }}
      </p>
      <p class="text-sm font-semibold leading-6 text-indigo-600">
        Address:{{ user.phone }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

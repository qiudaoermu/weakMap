<template functional>
    <div>
    <p v-for="item in props.items" :key="item" @click="props.itemClick(item);">
      {{ item }}
    </p></div>
 </template>
